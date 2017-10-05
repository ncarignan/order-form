'use strict';

var allProducts = [];
//localstorage.cartArray
(function localStorageAlign1(){
  if(!localStorage.allProducts){
    newInstances();
    localStorage.setItem('allProducts', JSON.stringify(allProducts));
    // console.log('created local' + localStorage.allProducts);
  }else{
    allProducts = JSON.parse(localStorage.getItem('allProducts'));
    // console.log('pulled from local' + allProducts);
  }
})();

function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.numInCart = 0;
  allProducts.push(this);
}

function newInstances(){
  new Product('R2D2 Bag', 'img/bag.jpg');
  new Product('Banana Slicer', 'img/banana.jpg');
  new Product('Toilet Paper Ipad', 'img/bathroom.jpg');
  new Product('Toeless Boots', 'img/boots.jpg');
  new Product('Coffee Toaster', 'img/breakfast.jpg');
  new Product('Meatball Bubblegum', 'img/bubblegum.jpg');
  new Product('butt bumper', 'img/chair.jpg');
  new Product('cthulhu', 'img/cthulhu.jpg');
  new Product('dog duck', 'img/dog-duck.jpg');
  new Product('dragon meat', 'img/dragon.jpg');
  new Product('pentencile', 'img/pen.jpg');
  new Product('pet swiffer', 'img/pet-sweep.jpg');
  new Product('pizza scizzors', 'img/scissors.jpg');
  new Product('shark bag', 'img/shark.jpg');
  new Product('baby swiffer', 'img/sweep.png');
  new Product('tauntaun bag', 'img/tauntaun.jpg');
  new Product('unicorn meat', 'img/unicorn.jpg');
  new Product('naughty arm', 'img/usb.gif');
  new Product('water can', 'img/water-can.jpg');
  new Product('wine glass', 'img/wine-glass.jpg');
}


(function(){
  for(var i in allProducts){
    var productDropdown = document.getElementById('productDrop');
    // console.log(productDropdown);
    var optionEl = document.createElement('option');
    // console.log(optionEl);
    optionEl.textContent = allProducts[i].name;
    // console.log(optionEl);
    productDropdown.appendChild(optionEl);
  }
})();

var addToCart = document.getElementById('addToCart');
addToCart.addEventListener('submit', handleAddToCartSubmit);

function handleAddToCartSubmit(event){
  console.log('fired');
  console.log(event);
  event.preventDefault();
  var product = event.target.product.value;
  console.log(event.target.product.value);
  var quantity = parseInt(event.target.quantity.value);
};
