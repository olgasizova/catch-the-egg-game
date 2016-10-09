// Download DOM before running jQuery script
$(document).ready(onLoad);

var scope = {};
// test creating new test

// This is a test function to work with the egg
function onLoad(){

    // var firstChickenDiv = $('div.chicken').first();

    // scope.testEgg = new Egg(firstChickenDiv);
    // console.log(scope.testEgg.startPosLeft);
    // window.setTimeout(function(){scope.testEgg.startFall();},1000);


}



// Create Egg Class in a separate js files as a prototype
// for mulitple eggs

// Create Class Egg with parameter $chickenDiv
// because I need to know where to create the egg div.
function Egg($chickenDiv){
  // this. is used to point to individual object
  // of future egg objects
  // position: https://api.jquery.com/position/
  this.chickenDivPosition = $chickenDiv.position();
  this.startPosLeft = this.chickenDivPosition.left + $chickenDiv.width()/2 - 20;
  this.startPosTop = this.chickenDivPosition.top + $chickenDiv.height() - 30;


  // create div in memory to hold egg image
  // set width, height and background via class egg in egg_style.css
  // set left and top position via input parameters
  this.$eggImageDiv = $('<div></div>').attr('class', 'egg')
                                      .css('left', this.startPosLeft)
                                      .css('top', this.startPosTop);

  $chickenDiv.append(this.$eggImageDiv);
  // calculate distance of egg fall by subtracting it's position from the window
  this.fallDistance = window.innerHeight - this.startPosTop + 'px';

  //create function startFall to animate egg drop and find out the height
  // of the window and myltipy by to 10 to control speed.
  // this.breakEgg is a callback function that will called after
  // egg animation is complete
  var milliSeconds = window.innerHeight * 10;
  this.startFall = function(){
    this.$eggImageDiv.animate({top: this.fallDistance}
                            , milliSeconds, 'linear', this.breakEgg);
  };


// this.breakEgg is a callback function triggered by animate function
// after animation is complete
// remove() is opposite of append to remove from DOM
  this.breakEgg = function(){
    $(this).fadeOut('slow', function(){$(this).remove();});



  };


};







