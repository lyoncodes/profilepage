import { Stack } from './Stack.js'

function newNode(element, text){
  let el = document.createElement(element)
  el.innerText = text
  return { el }
}

function newTemplate(type, html) {
  const template = document.createElement(type);
  template.innerHTML = html
  return template
}

function displayNFT(){
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
      const HUD = this.shadowRoot.querySelector('.stack-count')

      function pushAllToStack(){
        for (let i = 0; i < app.app_data.length; i++) {
          let container = document.createElement('div')
          
          Object.entries(app.app_data[i]).forEach((prop, val) => {
            const html = newNode(`${prop[0]}`, `${prop[1]}`)
            container.append(html.el)
          })
          
          stack.push(container)
        }
      }
      function toggleCount(el){
        el.innerHTML = `${stack.length()}/${app.app_data.length}`
      }
      function viewTop(){
        stack.length() ? ref.appendChild(stack.pop()) : displayNFT()
      }
      
      pushAllToStack()
      toggleCount(HUD)
      viewTop()
      
      
      document.addEventListener('click', () => {
        toggleCount(HUD)
        viewTop()
      })
    }
  }
  customElements.define(`${app.name}`, AppStack)
}