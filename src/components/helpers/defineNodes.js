// function newTemplate(type, html) {
//   const template = document.createElement(type);
//   template.innerHTML = html
//   return template
// }

// function displayFooter(){
//   const model = document.getElementById('contact')
//   model.style.display = 'flex'
// }

// export function populateDataStore(app) {
//   const template = newTemplate(app.type, app.html)
//   const stack = new Stack()

//   class AppStack extends HTMLElement {
//     constructor() {
//       super();

//       this.attachShadow({mode: 'open'})
//       this.shadowRoot.appendChild(template.content.cloneNode(true))
      
//       const ref = this.shadowRoot.querySelector('#stack-container')
      
//       function pushAllToStack(){
//         app.pages.forEach(arr => {
//           let container = document.createElement('div')
//           arr.forEach(id => {
//             let nodeData = app.data.find(el => el.id === id)
//             let ref = newNode(nodeData)
//             container.appendChild(ref.node)
//           })
//           stack.push(container)
//         })
//       }
      
//       function popTop(){
//         stack.length() ? ref.appendChild(stack.pop()) : displayFooter()
//       }
      
//       pushAllToStack()
//       popTop()
      
//       window.onscroll = () => {
//         if ((window.scrollY) == (document.body.scrollHeight - document.body.clientHeight)) {
//           popTop()
//         } else {
//           null
//         }
//       }
//     }
//   }
//   customElements.define(`${app.name}`, AppStack)
// }
function newNode(nodeData){
  let node = document.createElement(nodeData.type)
  node.innerText = nodeData.text
  return { node }
}

export default function DefineNodes(){
  let root = document.getElementById('root')

  fetch('/data').then(async res => {
    const stack = await res.json()
    stack.dataStore.forEach(el => {
      const wrapper = newNode(el)
      root.appendChild(wrapper.node)
    })
  })

}
DefineNodes()