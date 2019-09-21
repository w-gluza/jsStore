function test() {
  let adminCredentials = localStorage.getItem('adminLoggedIn');
  if (adminCredentials == 'true') {
    // Check if it's equal to the string true
    alert('true');
  } else {
    alert('restricted Area');
    return (window.location.href = 'login.html');
  }
  console.log('hello');
}

function logOutAdmin() {
  localStorage.setItem('adminLoggedIn', false);
  return (window.location.href = 'login.html');
}
