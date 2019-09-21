// new User
const username = document.getElementById('emailNew');
const registeredPassword = document.getElementById('passwordNew');

// current User
const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');

// checking if any user is already stored in Local Storafe
let usersArray = localStorage.getItem('newUser')
  ? JSON.parse(localStorage.getItem('newUser'))
  : [];
localStorage.setItem('newUser', JSON.stringify(usersArray));

function initialInputValue() {
  (username.value = ''), (registeredPassword.value = '');
}
function User(username, registeredPassword) {
  (this.username = username), (this.registeredPassword = registeredPassword);
}
function createUser() {
  event.preventDefault();
  let user = new User(username.value, registeredPassword.value);
  usersArray.push(user);
  localStorage.setItem('newUser', JSON.stringify(usersArray));
  initialInputValue();
}

document
  .querySelector('#submitCredentials')
  .addEventListener('click', function(event) {
    event.preventDefault();
    const emailText = email.value;
    const passwordText = password.value;
    for (i = 0; i < usersArray.length; i++) {
      // if login as an admin
      if (passwordText == 'admin' && emailText == 'admin@gmail.com') {
        localStorage.setItem('adminLoggedIn', true);
        localStorage.setItem('userLoggedIn', false);
        window.location.href = 'admin.html';
        return;
      }
      for (i = 0; i < usersArray.length; i++) {
        if (
          emailText == usersArray[i].username &&
          passwordText == usersArray[i].registeredPassword
        ) {
          console.log('LoggedIn');
          localStorage.setItem('userLoggedIn', true);
          localStorage.setItem('adminLoggedIn', false);
          window.location.href = 'products.html';
          return;
        }
      }
      alert('Access denied! Incorrect credentials!');
      return false;
    }
  });
function logOutUser() {
  localStorage.setItem('userLoggedIn', false);
  return (window.location.href = 'index.html');
}
