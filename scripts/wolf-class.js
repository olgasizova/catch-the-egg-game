// Download DOM before running jQuery script
$(document).ready(onLoad);


function onLoad(){
  var wolfObject = new Wolf();

};

// create Basket Class
function Basket(){
  this.divBasket = $('div.basket');
  this.basketPosition = this.divBasket.position();

  this.divWolf = $('div.wolf');
  this.wolfPosition = this.divWolf.position();

  this.basketTop = this.basketPosition.top + this.wolfPosition.top;
  this.basketLeft = this.divWolf.width()/2 - this.divBasket.width()/2;

  this.basketRight = this.basketLeft + this.divBasket.width();
  this.basketBotton = this.basketTop + this.divBasket.height();

  // find eggs near wolf basket
  var $catchedEgg = $('div.egg').filter(function(){
    // 'this' inside the filter function is poiting to each selected element
    // by jquery selector
    var $egg = $(this);
    var $eggPosition = $egg.position();
    var $eggLeft = $eggPosition.left;
    var $eggRight = $eggPosition.left + $egg.width();
    var $eggTop = $eggPosition.top;
  });


}


