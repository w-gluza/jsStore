const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');

const testObject = [
  {
    username: 'user@gmail.com',
    password: 'user'
  },
  {
    username: 'user2@gmail.com',
    password: 'user'
  }
];
localStorage.setItem('testObject', JSON.stringify(testObject));
const usersArray = JSON.parse(localStorage.getItem('testObject'));
console.log(usersArray);

// to działa jak mam z hardcodowane narazie probowalam wysłac cały obiekt to local storage i sciagnac go
// zeby sprawdzic czy autentykacja zadziala
// glowny goal jest taki ze zrobie w index.html cos w stylu rejestracji
// i zrobie push to tej testObject i pozniej z tymi danymi bedzie mozna się logować

// ta array sobie zrobilam wczesniej zeby w ogole sprobowac walicaji
// const usersArray = [
//   {
//     username: 'user@gmail.com',
//     password: 'user'
//   },
//   {
//     username: 'user2@gmail.com',
//     password: 'user'
//   }
// ];

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
  return (window.location.href = 'index.html');
}
