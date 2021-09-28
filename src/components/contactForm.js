function submitContactForm(){
  console.log('succesfully submitted')
}

function validate(e) {
  e.preventDefault();

  const name = document.querySelector('#name').value
  const email = document.querySelector('#email').value
  const msg = document.querySelector('#msg').value
  const captcha = document.querySelector('#g-recaptcha-response').value

  fetch('/', {
    method: 'POST',
    body: JSON.stringify({name, email, msg, captcha}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  })

  grecaptcha.execute();

}

function onload() {
  const form = document.getElementById('submit');
  form.onclick = validate;
}