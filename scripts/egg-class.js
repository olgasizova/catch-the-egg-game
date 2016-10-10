// Download DOM before running jQuery script
$(document).ready(onLoad);

var scope = {};
// test creating new test

// This is a test function to work with the egg
function onLoad(){

    var firstChickenDiv = $('div.chicken').first();

    scope.testEgg = new Egg(firstChickenDiv);
    console.log(scope.testEgg.startPosLeft);
    window.setTimeout(function(){scope.testEgg.startFall();},1000);


}



// Create Egg Class in a separate js files as a prototype
// for mulitple eggs

// Create Class Egg with parameter $chickenDiv
// because I need to know where to create the egg div.
function Egg($chickenDiv){
  // this. is used to point to individual object
  // of future egg objects
  // position: https://api.jquery.com/position/
  this.chickenDivPosition = $chickenDiv.offset();
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
  var basket = new Basket();
  this.distanceToBasket = basket.basketTop;

  //create function startFall to animate egg drop and find out the height
  // of the window and myltipy by to 10 to control speed.
  // this.breakEgg is a callback function that will called after
  // egg animation is complete
  var milliSeconds = window.innerHeight * 20;

  //capture 'this' into separate variable to use it for
  // further calcution. 'this' will change its meaning inside
  // local functions and loops therefore we need to capture it in
  // a separate variabe. Credit for 'var basketObject = 'this' goes to:
  // http://stackoverflow.com/questions/520019/controlling-the-value-of-this-in-a-jquery-event

  var eggObject = this;

  this.startFall = function(){
    this.$eggImageDiv.animate({top: this.distanceToBasket}
                            , milliSeconds, 'linear', this.catchEgg);
  };


// this.breakEgg is a callback function triggered by animate function
// after animation is complete
// remove() is opposite of append to remove from DOM
  this.catchEgg = function(){
    //$(this).fadeOut('slow', function(){$(this).remove();});
    var $eggDiv = $(this);
    $eggDiv.css('border', '2px solid purple');
    var $eggPosition = $eggDiv.offset();

    var basket = new Basket();
    var basketRight = basket.basketRight;
    var basketLeft = basket.basketLeft;
    var eggLeft = $eggPosition.left;
    var eggRight = $eggPosition.left + $eggDiv.width();

    var isCatched = basketRight > eggRight
                    && basketLeft < eggLeft;
    if(isCatched){
      eggObject.breakEgg();

    }else{
      eggObject.missedEgg();
    }







  };


  this.missedEgg = function(){
    var $egg = eggObject.$eggImageDiv;
    $egg.animate({top: window.innerHeight - $egg.height()}
                            , 1000, 'linear', eggObject.breakEgg);



  }

  this.breakEgg = function(){
    var $egg = eggObject.$eggImageDiv;
    $egg.fadeOut('slow', function(){$egg.remove();});
  };


};







