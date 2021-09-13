import { Stack } from './Stack.js'

function newNodeAttribute(node, data){
  data.forEach(el => {
    node.setAttribute(el.tag, el.value)
  })
}

function newNode(nodeData){
  let node = document.createElement(nodeData.type)
  node.innerText = nodeData.text
  nodeData.attr ? newNodeAttribute(node, nodeData.attr) : null
  return { node }
}

function newTemplate(type, html) {
  const template = document.createElement(type);
  template.innerHTML = html
  return template
}

function displayFooter(){
  const model = document.getElementsByTagName('model-viewer')
  model[0].style.display = 'block'
}

export function populateDataStore(app) {
  const template = newTemplate(app.type, app.html)
  const stack = new Stack()

  class AppStack extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({mode: 'open'})
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      
      const ref = this.shadowRoot.querySelector('#stack-container')
      
      function pushAllToStack(){
        app.pages.forEach(arr => {
          let container = document.createElement('div')
          arr.forEach(id => {
            let nodeData = app.data.find(el => el.id === id)
            let ref = newNode(nodeData)
            container.appendChild(ref.node)
          })
          stack.push(container)
        })
      }
      
      function popTop(){
        stack.length() ? ref.appendChild(stack.pop()) : displayFooter()
      }
      
      pushAllToStack()
      popTop()
      
      window.onscroll = () => {
        if ((window.scrollY) == (document.body.scrollHeight - document.body.clientHeight)) {
          popTop()
        } else {
          null
        }
      }
    }
  }
  customElements.define(`${app.name}`, AppStack)
}