import { Queue } from './Queue.js'

function newTemplate(type, html) {
  const template = document.createElement(type);
  template.innerHTML = html
  return template
}

export function BuildQueue(app) {
  const template = newTemplate(app.type, app.html)
  const queue = new Queue()

  class AppQueue extends HTMLElement {
    constructor() {
      super();
      
      this.attachShadow({mode: 'open'})
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      
      const ref = this.shadowRoot.querySelector('#queue-container')

      let scrollPos = 0
      let qPos = 0
      
      function populateQueue(steps){
        for (let j = 0; j < steps; j++) {
          if (qPos <= app.app_data.length) {
            let container = document.createElement('div')
            
            Object.entries(app.app_data[qPos]).forEach((prop, val) => {
              let html = document.createElement(`${prop[0]}`)
              html.innerText = `${prop[1]}`
              container.append(html)
            })

            queue.enqueue(container)
            ref.appendChild(container)
            qPos++
          }
        }
      }
      
      populateQueue(2)
      console.log(qPos)
      
      document.addEventListener('scroll', () => {
        if (window.scrollY > (scrollPos + 900)){
          populateQueue(2)
          scrollPos += 900
        }
      })

    }
  }
  
  customElements.define(`${app.name}`, AppQueue)
}