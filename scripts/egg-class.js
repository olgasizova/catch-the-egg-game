// Create Egg Class in a separate js files as a prototype
// for mulitple eggs

// Create Class Egg with parameter startHatch
// because I need to know the start position for every egg.
function Egg(startHatch){
  // this. is used to point to individual object
  // of future egg objects
  this.startPosLeft = startHatch.left;
  this.starPosTop = startHatch.top;

  // create div in memory to hold egg image
  // set width, height and background via class egg in egg_style.css
  // set left and top position via input parameters
  this.$eggImageDiv = $('<div></div>').attr('class', 'egg')
                                      .css('left', this.startPosLeft)
                                      .css('top', this.starPosTop);


};

// This is a test function to work with the egg
var testEgg = new Egg({left: 10, top: -5});
console.log(testEgg.startPosLeft);


