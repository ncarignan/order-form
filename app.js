'use strict';
var allProducts = [];
var cartArray = [];
var addToCart = document.getElementById('addToCart');

function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.numInCart = 0;
  allProducts.push(this);
}

if(!localStorage.allProducts){
  console.log('new obj');
  instantiate();
}else{
  console.log('ls is' + localStorage.cartArray);
  allProducts = JSON.parse(localStorage.allProducts);
  cartArray = JSON.parse(localStorage.cartArray);
}

function instantiate(){
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
  var productDropdown = document.getElementById('productDrop');
  for(var i in allProducts){
    var optionEl = document.createElement('option');
    optionEl.textContent = allProducts[i].name;
    productDropdown.appendChild(optionEl);
  }
})();

addToCart.addEventListener('submit', handleAddToCartSubmit);

function handleAddToCartSubmit(event){
  event.preventDefault();
  var product = event.target.product.value;
  var quantity = parseInt(event.target.quantity.value);
  for( var j in cartArray){
    if(cartArray[j].name === (product)){
      console.log(cartArray[j].name);
      cartArray.splice(j,1);
    }
  }
  for (var i in allProducts){
    if (allProducts[i].name.includes(product)){
      allProducts[i].numInCart += quantity;
      cartArray.push(allProducts[i]);
      localStorage.cartArray = JSON.stringify(cartArray);
      localStorage.allProducts = JSON.stringify(allProducts);
      return event.target.quantity.value = null;
    }
  }
};
