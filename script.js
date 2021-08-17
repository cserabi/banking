document.getElementById('login-submit').addEventListener('click', function () {


  // email field
  const emailfield = document.getElementById('user-mail');
  const userEmail = emailfield.value;



  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;



  if (userEmail == 'rabiul@gmail.com' && userPassword == 'rabiset') {
    document.body.style.backgroundColor = "green";

    window.location.replace = 'http://127.0.0.1:5500/banking.html';
    console.log('Congratulation');
  }
  else {
    console.log('none user');
  }



})