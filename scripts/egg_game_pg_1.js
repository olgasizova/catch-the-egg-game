$(document).ready(onLoad);

function onLoad(){
  $('button.start-button').click(startGame);

};

var startGame = function(){
  var player = $('input.login').val();
$(document.location).attr('href', 'egg_game_pg_2.html?player=' + player);
startGame();
};


