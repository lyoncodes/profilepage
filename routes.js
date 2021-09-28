const mongoose = require('mongoose')
async function routes (fastify, options, done){
  mongoose.connect('mongodb+srv://meanxael:'+`${options.token}`+'@cluster0.u46go.mongodb.net/myProfile?retryWrites=true&w=majority')
  .then(() => {console.log('mongoDB connected')})
  
  const containerSchema = new mongoose.Schema({
    type: String,
    nodes: Array
  },
  {
    collection: 'nodeBucket'
  });

  const nodeSchema = new mongoose.Schema({
    type: String,
    text: String
  },
  {
    collection: 'nodes'
  });

  const Container = mongoose.model('containerModel', containerSchema);
  const Node = mongoose.model('nodeModel', nodeSchema);
  
  const containers = await Container.find({}).sort('order');

  const nodeStack = [];
  
  containers.forEach(el => {
    const page = []
    el.nodes.forEach(async id => {
      let node = await Node.findById(id).exec()
      page.push(node)
    })
    nodeStack.push(page)
  })

  nodeStack.reverse()

  fastify.get('/', async(req, reply) => {
    return reply.view('src/index.pug')
  });
  fastify.get('/data', async(req, reply) => {
    return reply.send(nodeStack)
  });
  
  done()
}
module.exports = routes
