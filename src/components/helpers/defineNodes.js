import { Stack } from './Stack.js'

function newContainer(){
  const container = document.createElement('div')
  container.className = "col-12"
  container.className += " col-md-6"
  return container
}

function newNode(nodeData){
  let node = document.createElement(nodeData.type)
  node.innerText = nodeData.text
  return { node }
}

function appendNode(parent, child){
  parent.appendChild(child)
}

function displayFooter(){
  const form = document.getElementById('contact')
  form.style.display = 'flex'
}

export default function DefineNodes(){
  let app = document.getElementById('root')

  fetch('/data').then(async res => {
    const stackData = await res.json();
    const stack = new Stack();

    stackData.forEach(arr => {
      const container = newContainer();
      
      arr.sort((a, b) => a.order - b.order)

      arr.forEach(data => {
        const node = newNode(data)
        appendNode(container, node.node)
      })

      stack.push(container)
    });

    appendNode(app, stack.pop())

    window.onscroll = () => {
      if ((window.scrollY) == (document.body.scrollHeight - document.body.clientHeight)) {
        stack.length() ? appendNode(app, stack.pop()) : displayFooter()
      } else {
        null
      }
    }
  })
}

DefineNodes()