import { populateDataStore } from './helpers/defineNodes.js'
const Data = {
  name: 'main-stack',
  id: 'main-stack',
  html: `
  <div class="m-container m-center">
    <div class="col-11 mt-3 full-height" id="stack-container">
    </div>
  </div>
  <link rel="stylesheet" href="public/styles/style.css">
  `,
  type: 'template',
  pages: [
    [
      '2',
      '4',
      '6',
      '8',
      '9',
      '10'
    ],
    [
      '1',
      '3',
      '5',
      '7'
    ]
  ],
  data: [
    {
      id: '1',
      text: 'Michael Lyon',
      type: 'h1',
      attr: [
        {
          tag: 'id',
          value: 'main-title'
        },
      ]
    },
    {
      id: '2',
      text: 'Projects',
      type: 'h1'
    },
    {
      id: '3',
      text: 'Software Developer',
      type: 'h2'
    },
    {
      id: '4',
      text: 'Web Development',
      type: 'h2'
    },
    {
      id: '5',
      text: 'Seattle, WA',
      type: 'h2'
    },
    {
      id: '6',
      text: 'www.bengaubert.com',
      type: 'a',
      attr: [
        {
          tag: 'href',
          value: 'http://www.bengaubert.com'
        },
      ]
    },
    {
      id: '7',
      text: 'I enjoy using computers to solve real-world problems. I specialize in full-stack web development across a variety of technologies. My favorites include firebase, SQLite3, node.js, fastify, javascript, and jade.',
      type: 'span'
    },
    {
      id: '8',
      text: 'Features a carousel interface built from a List, conditionally displaying Objects using internal incrementors. Lightweight shadow-root elements mapped to jade templates make this site lightweight and easy to update.',
      type: 'span'
    },
    {
      id: '9',
      text: 'www.lyonwrites.com',
      type: 'a',
      attr: [
        {
          tag: 'href',
          value: 'http://www.lyonwrites.com'
        },
      ]
    },
    {
      id: '10',
      text: 'Builds a Stack of Nodes containing data fetched from Google Cloud, using a pop method to conditionally render templates based on user interaction.',
      type: 'span'
    },
  ],
}
populateDataStore(Data)