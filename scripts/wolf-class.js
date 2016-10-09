// Download DOM before running jQuery script
$(document).ready(onLoad);


function onLoad(){

};

// create wolf Class
function Wolf(){
  this.divBasket = $('div.basket');
  this.basketPosition = this.divBasket.position();
  this.basketTop = this.basketPosition.top;
  this.basketLeft = this.basketPosition.left;
  this.basketRight = this.basketPosition.left + this.divBasket.width();

}
