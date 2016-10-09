// Download DOM before running jQuery script
$(document).ready(onLoad);

var scope = {};
// test creating new test
function onLoad(){

    var firstChickenDiv = $('div.chicken').first();



    // This is a test function to work with the egg
    scope.testEgg = new Egg(firstChickenDiv);
    console.log(scope.testEgg.startPosLeft);
    window.setTimeout(function(){scope.testEgg.startFall();},1000);


}



// Create Egg Class in a separate js files as a prototype
// for mulitple eggs

// Create Class Egg with parameter startHatch
// because I need to know the start position for every egg.
function Egg($chickenDiv){
  // this. is used to point to individual object
  // of future egg objects
  var position = $chickenDiv.position();
  this.startPosLeft = position.left + $chickenDiv.width()/2 - 20;
  this.startPosTop = position.top + $chickenDiv.height() - 30;
  this.$chickenDiv = $chickenDiv;

  // create div in memory to hold egg image
  // set width, height and background via class egg in egg_style.css
  // set left and top position via input parameters
  this.$eggImageDiv = $('<div></div>').attr('class', 'egg')
                                      .css('left', this.startPosLeft)
                                      .css('top', this.startPosTop);

  this.$chickenDiv.append(this.$eggImageDiv);
  this.fallDistance = window.innerHeight - this.startPosTop + 'px';

  this.startFall = function(){
    this.$eggImageDiv.animate({top: this.fallDistance}, window.innerHeight * 10, 'linear', this.breakEgg);
  };



  this.breakEgg = function(){
    $(this).fadeOut('slow', function(){$(this).remove();});



  };


};







