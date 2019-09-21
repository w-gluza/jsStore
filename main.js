const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');

const usersArray = [
  {
    username: 'user@gmail.com',
    password: 'user'
  },
  {
    username: 'user2@gmail.com',
    password: 'user'
  }
];
document
  .querySelector('#submitCredentials')
  .addEventListener('click', function(event) {
    event.preventDefault();
    const emailText = email.value;
    const passwordText = password.value;
    for (i = 0; i < usersArray.length; i++) {
      if (passwordText == 'admin' && emailText == 'admin@gmail.com') {
        localStorage.setItem('adminLoggedIn', true);
        localStorage.setItem('userLoggedIn', false);
        return (window.location.href = 'admin.html');
      } else if (
        emailText == usersArray[i].username &&
        passwordText == usersArray[i].password
      ) {
        console.log('LoggedIn');
        localStorage.setItem('userLoggedIn', true);
        localStorage.setItem('adminLoggedIn', false);
        return (window.location.href = 'products.html');
      }

      alert('Access denied! Incorrect credentials!');
      return false;
    }
  });
function logOutUser() {
  localStorage.setItem('userLoggedIn', false);
  return (window.location.href = 'login.html');
}
