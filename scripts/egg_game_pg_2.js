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

// start hatching eggs for all chicken divs
    window.setTimeout(chickensStartHatch, 1000);
};




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

// select all 4 chicken divs
function chickensStartHatch(){
  var $allChickenDivs = $('div.chicken')
// use .each to execute function for each element in the array of chicken divs
                        .each(function(index) {
// 'this' in context of enclosed function represents each html element
                                  var $eachChickenDiv = $(this);
// create object chicken object from Chicken clas
                                  var $eachChickenObject = new Chicken($eachChickenDiv);
// envoke method hatchEggs in each instance of Chicken Class
                                  $eachChickenObject.hatchEggs();
                              });

}

