// jQuery for Catch the Eggs Game


// Download DOM before running jQuery script
$(document).ready(onLoad);

// Create global object so jQuery doesn't have to
// repeat the search for elements in the DOM
var scope = {};

// begin jQuery execution
function onLoad(){

  scope.$wolf = $('div.wolf');
  scope.$allChickens = $('div.chicken');

// add keydown event listener to move basket
  $(document).keydown(moveWolf);

}
 // create event handler for keydown event
function moveWolf(event){
  // check for right and left arrow keys
  // if right key then move basket to the right
  if (event.key == 'ArrowRight'){
    scope.$wolf.css('left', '+=50').removeClass('wolf-left');
// if left key then move basket to the left
  } else if (event.key == 'ArrowLeft'){
    scope.$wolf.css('left', '-=50').addClass('wolf-left');




  }

};


// this.startPos = chickens[Math.floor(Math.random()*4)].position()
