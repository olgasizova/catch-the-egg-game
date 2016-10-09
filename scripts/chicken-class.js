// Download DOM before running jQuery script
$(document).ready(onLoad);

var scope = {};
// test creating new test
function onLoad(){

    var firstChickenDiv = $('div.chicken').first();

    var chickenOne = {
      left: 50,
      top: 70,
      $chickenDiv: firstChickenDiv
    }

    // This is a test function to work with the egg

}

// position: https://api.jquery.com/position/

function Chicken($chickenDiv){
  var position = $chickenDiv.position();
  this.left = position.left + $chickenDiv.width()/2;
  this.top = position.top + $chickenDiv.height();

}
