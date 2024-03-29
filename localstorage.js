let initialProductsArray = [
  {
    name: 'Predefined Name',
    description: 'Predefined Desc',
    price: '999',
    amount: '1',
    src: 'https'
  },
  {
    name: 'Predefined Name 2',
    description: 'Predefined Desc 2',
    price: '666',
    amount: '2',
    src: 'http'
  }
];

let productsArray = localStorage.getItem('products')
  ? JSON.parse(localStorage.getItem('products'))
  : [...initialProductsArray];

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
        (item, index) =>
          `<div id=${index}>
      <h4>${item.name}</h4>
      <p>${item.description}</p>
      <p>${item.price}</p>
      <p>${item.amount}</p>
      <p>${item.src}</p>
      <button onclick="editItem(${index})">edit</button>
      <button onclick="deleteItem(${index})">delete</button>
      </div>`
      )
      .join('');
  }
}

function deleteItem(index) {
  console.log('hello');
  productsArray.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(productsArray));
  getProduct();
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
