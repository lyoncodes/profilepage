import { BuildQueue } from './helpers/defineNodes.js'
const Data = {
  name: 'home-page',
  id: 'App',
  html: `
  <div class="m-container m-center">
    <div class="col-11 mt-3 full-height" id="queue-container">
    </div>
  </div>
  <link rel="stylesheet" href="public/styles/style.css">
  `,
  type: 'template',
  app_data: [
    {
      h1: 'Michael Lyon',
      h2: 'Software Developer',
      h3: 'Seattle',
      p: 'I enjoy building efficient solutions to real-world problems. I specialize in full-stack web development across a variety of technologies. My favorites include firebase, SQLite3, node.js, fastify, javascript, and jade.'
    },
    {
      h1: 'Kisa Yonker',
      h2: 'PR Professional',
      h3: 'Seattle',
      p: 'I enjoy building efficient solutions to real-world problems. I specialize in full-stack web development across a variety of technologies. My favorites include firebase, SQLite3, node.js, fastify, javascript, and jade.'
    },
    {
      h1: 'Gibbs',
      h2: 'Genius',
      h3: 'Seattle',
      p: 'I authored algorithm G, the future of quantum computing.'
    },
    {
      h1: 'Test Case',
      h2: 'PR Professional',
      h3: 'Seattle',
      p: 'I enjoy building efficient solutions to real-world problems. I specialize in full-stack web development across a variety of technologies. My favorites include firebase, SQLite3, node.js, fastify, javascript, and jade.'
    }
  ]
}
BuildQueue(Data)