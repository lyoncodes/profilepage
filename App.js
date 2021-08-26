const bus = {
  header: {
    name: 'Michael Lyon',
    title: 'Software Developer',
    location: 'Seattle',
    description: 'I enjoy building efficient solutions to real-world problems. I specialize in full-stack web development across a variety of technologies. My favorites include firebase, SQLite3, node.js, fastify, javascript, and jade.'
  }
}
async function routes (fastify, options){
  fastify.get('/', async (request, reply) => {
    reply.view('/public/index.pug', { bus })
  })
}
module.exports = routes