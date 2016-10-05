// jQuery for Catch the Eggs Game


// Download DOM before running jQuery script
$(document).ready(onLoad);

// Create global object so jQuery doesn't have to
// repeat the search for elements in the DOM
var scope = {};

// begin jQuery execution
function onLoad(){

  scope.$basket = $('div.basket');
  scope.$allChickens = $('div.chicken');

// add keydown event listener to move basket
  $(document).keydown(moveBasket);

}
 // create event handler for keydown event
function moveBasket(event){
  // check for right and left arrow keys
  // if right key then move basket to the right
  if (event.key == 'ArrowRight'){
    scope.$basket.css('left', '+=15');
// if left key then move basket to the left
  } else if (event.key == 'ArrowLeft'){
    scope.$basket.css('left', '-=15');




  }

};
