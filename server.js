const fastify = require('fastify')({ logger: true })
const path = require('path')
const fastifyRecaptcha = require('fastify-recaptcha')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'src'),
  prefix: '/src',
})

fastify.register(require('point-of-view'), {
  engine: {
    pug: require('pug')
  }
})

fastify.register(fastifyRecaptcha, {
  recaptcha_secret_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"
})

fastify.register(require('./routes'))

const start = async () => {
  try {
    await fastify.listen(8080)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()