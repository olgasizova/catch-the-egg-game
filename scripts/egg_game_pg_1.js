$(document).ready(onLoad);

function onLoad(){
  $('button.start-button').click(startGame);
  updatePlayerScore();

};

function updatePlayerScore(){
  var newScore = $.urlParam('score');
  var player = $.urlParam('player');
  $('td:contains("'+player+'")').next().text(newScore);


};

var startGame = function(){
  var player = $('input.login').val();
$(document.location).attr('href', 'egg_game_pg_2.html?player=' + player);
startGame();
};

// plugin function from http://snipplr.com/view/26662/get-url-parameters-with-jquery--improved/

$.urlParam = function(name) {

     url = window.location.href;

    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
    if (!results) {
        return undefined;
    }
    return unescape(results[1]) || undefined;
}
