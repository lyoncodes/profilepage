async function routes (fastify, options){
  fastify.get('/', async (request, reply) => {
    reply.view('/public/index.pug')
  })
}
module.exports = routes