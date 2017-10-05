'use strict';

var cartTable = document.getElementById('cart');
var buyButton = document.getElementById('checkout');
var cartArray = [];
cartArray = JSON.parse(localStorage.cartArray);

function newElement(type, content, parent) {
  var newEl = document.createElement(type);
  newEl.textContent = content;
  parent.appendChild(newEl);
};

function clearTable(){
  cartTable.innerHTML = '';
};

function tableData(){
  for (var i = 0; i < cartArray.length; i++){
    var trEl = document.createElement('tr');
    newElement('th', cartArray[i].name, trEl);
    var imgEl = document.createElement('img');
    img.src = cartArray[i].filepath;
    newElement('td', imgEl, trEl);
    newElement('td', cartArray[i].numInCart, trEl);
    var butEl = document.createElement('button');
    butEl.id = 'button' + i;
    butEl.innerHTML = 'Remove from Cart';
    newElement('td', butEl, trEl);
    user.appendChild(trEl);
  }
};

function deletePress(i){
  localStorage.removeItem('cartArray');
  // remove item from cart array
  cartArray.splice(i, 1);

  localStorage.cartArray = JSON.stringify(cartArray);

  clearTable();

  tableData();
}

cartTable.addEventListener('click', clickHandler);

function clickHandler(event){
  var check = event.target.id;
  var i = parseInt(check.slice(check.length - 1));
  deletePress(i);
}

buyButton.addEventListener('click', buyHandler);

function buyHandler(event){
  console.log(event.target.id);
  localStorage.removeItem('cartArray');
  cartArray = [];
  clearTable();
  tableData();
}

tableData();
