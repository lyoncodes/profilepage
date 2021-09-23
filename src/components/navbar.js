const icon = document.querySelector('#top-btn')
function hideIcon(){
  icon.setAttribute('style', 'display: none')
}
function showIcon(){
  icon.setAttribute('style', 'display: inline')
}
function displayFooter(){
  const form = document.getElementById('contact')
  form.style.display = 'flex'
}
document.onscroll = () => {
  if (window.scrollY > 500){
    showIcon()
  } else if (window.scrollY <= 30){
    hideIcon()
  }
}
