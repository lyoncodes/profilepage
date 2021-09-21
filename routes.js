const mongoose = require('mongoose')
const Stack = require('./src/components/helpers/Stack')

async function routes (fastify, options, done){
  mongoose.connect('mongodb+srv://meanxael:tt5FXQD1XudeUPLd@cluster0.u46go.mongodb.net/myProfile?retryWrites=true&w=majority')
  .then(() => {console.log('mongoDB connected')})
  
  const containerSchema = new mongoose.Schema({
    type: String,
    nodes: Array
  },
  {
    collection: 'nodeBucket'
  })
  const nodeSchema = new mongoose.Schema({
    type: String,
    text: String
  },
  {
    collection: 'nodes'
  }
  );
  
  const Container = mongoose.model('containerModel', containerSchema);
  const Node = mongoose.model('nodeModel', nodeSchema);
  
  const containers = await Container.find({});

  const nodeStack = new Stack();
  
  containers.forEach(el => {
    el.nodes.forEach(async id => {
      let node = await Node.findById(id).exec()
      nodeStack.push(node)
    })
  })


  fastify.get('/', async (req, reply) => {
    return reply.view('src/index.pug')
  });
  fastify.get('/data', { nodeSchema }, async (req, reply) => {
    return reply.send(nodeStack)
  });
  done()
}
module.exports = routes
