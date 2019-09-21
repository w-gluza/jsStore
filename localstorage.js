let productsArray = localStorage.getItem('products')
  ? JSON.parse(localStorage.getItem('products'))
  : [];

localStorage.setItem('products', JSON.stringify(productsArray));
const data = JSON.parse(localStorage.getItem('products'));
console.log(data);
let name = document.getElementById('name');
let description = document.getElementById('description');
let price = document.getElementById('price');
let amount = document.getElementById('amount');
let src = document.getElementById('src');
function getProduct() {
  let storedValue = JSON.parse(localStorage.getItem('products') || '[]');
  if (storedValue) {
    document.getElementById('output').innerHTML = storedValue
      .map(
        item =>
          `<div>
      <h4>${item.name}</h4>
      <p>${item.description}</p>
      <p>${item.price}</p>
      <p>${item.amount}</p>
      <p>${item.src}</p>
      <button onclick="deleteItem()">delete</button>
      </div>`
      )
      .join('');
  }
}
function initialInputValue() {
  (name.value = ''),
    (description.value = ''),
    (price.value = ''),
    (amount.value = ''),
    (src.value = '');
}
function Product(name, description, price, amount, src) {
  (this.name = name),
    (this.description = description),
    (this.price = price),
    (this.amount = amount),
    (this.src = src);
}
function createProduct() {
  let product = new Product(
    name.value,
    description.value,
    price.value,
    amount.value,
    src.value
  );
  productsArray.push(product);
  localStorage.setItem('products', JSON.stringify(productsArray));
  initialInputValue();
  getProduct();
}

window.onload = getProduct();

let id = data[0];
console.log(id);
function deleteItem() {
  localStorage.splice(id, 1);
}
