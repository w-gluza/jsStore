function test() {
  let adminCredentials = localStorage.getItem('adminLoggedIn');
  if (adminCredentials == 'true') {
    alert('true');
  } else {
    alert('restricted Area');
    return (window.location.href = 'index.html');
  }
  console.log('hello');
}

function logOutAdmin() {
  localStorage.setItem('adminLoggedIn', false);
  return (window.location.href = 'index.html');
}
