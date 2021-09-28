const fastify = require('fastify')({ logger: true })
const path = require('path')
const fastifyRecaptcha = require('fastify-recaptcha')
const fastifyEnv = require('fastify-env')
const nodemailer = require('nodemailer')

const schema = {
  type: 'object',
  required: ['MONGOKEY', 'ICLOUDUSERNAME', 'ICLOUDAPPKEY', 'RECAPTCHAKEY'],
  properties: {
    MONGOKEY: {
      type: 'string'
    },
    ICLOUDUSERNAME: {
      type: 'string'
    },
    ICLOUDAPPKEY: {
      type: 'string'
    },
    RECAPTCHAKEY: {
      type: 'string'
    },
  }
}

const options = {
  confKey: 'config',
  schema,
  dotenv: true,
  data: process.env
}

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'src'),
  prefix: '/src',
})

fastify.register(require('point-of-view'), {
  engine: {
    pug: require('pug')
  }
})

fastify.register(require('fastify-formbody'))

const init = async () => {
  fastify.register(fastifyEnv, options)
  await fastify.after()
  
  fastify.register(fastifyRecaptcha, {
    recaptcha_secret_key:`${encodeURIComponent(fastify.config.RECAPTCHAKEY)}`,
    reply: true
  })

  fastify.register(require('./routes'), {
    token: `${encodeURIComponent(fastify.config.MONGOKEY)}`
  })
}
init()



fastify.post('/', async(req, reply) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.me.com',
    port: 587,
    auth: {
      user:`m.lyon4@me.com`,
      pass: `${encodeURIComponent(fastify.config.ICLOUDAPPKEY)}`
    }
  })

  const mail = {
    from: 'm.lyon4@me.com',
    to: 'lyoncodes@gmail.com',
    subject: `Message from ${req.body.name}`,
    text: `${req.body.msg},\n reply to: ${req.body.email} `
  }

  transporter.sendMail(mail, (err, info) => {
    if (err) {
      console.log(err);
      return reply.send('error with submission 😭')
    } else {
      return reply.view('src/index.pug')
    }
  })
})

const start = async () => {
  try {
    await fastify.listen(8080)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()