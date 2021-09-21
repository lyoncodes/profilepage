function submitContactForm(){
  alert('thanks' + document.getElementById('name-field').value)
}
function validate(e) {
  e.preventDefault();

  const name = document.querySelector('#name-field').value
  const email = document.querySelector('#email-field').value
  const msg = document.querySelector('#msg-field').value
  const captcha = document.querySelector('#g-recaptcha-response').value

  console.log({name: name, email: email, msg: msg, captcha: captcha})

  grecaptcha.execute();
}
function onload() {
  const form = document.getElementById('submit');
  form.onclick = validate;
}