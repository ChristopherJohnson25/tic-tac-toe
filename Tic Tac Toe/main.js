var gameBoard = document.querySelector('table');
// var resetButton = document.getElementById('reset-btn');

// var addChimp = function (){
//   square1.classList.add('chimp')
// }

var square1 = document.getElementsByClassName('s1')
var square2 = document.getElementsByClassName('s2')
var square3 = document.getElementsByClassName('s3')
var square4 = document.getElementsByClassName('s4')
var square5 = document.getElementsByClassName('s5')
var square6 = document.getElementsByClassName('s6')
var square7 = document.getElementsByClassName('s7')
var square8 = document.getElementsByClassName('s8')
var square9 = document.getElementsByClassName('s9')

// square1.addEventListener("click", addChimp);
// square2.addEventListener('click');
// square3.addEventListener('click');
// square4.addEventListener('click');
// square5.addEventListener('click');
// square6.addEventListener('click');
// square7.addEventListener('click');
// square8.addEventListener('click');
// square9.addEventListener('click');


var gameBoard = document.querySelector('table');
var resetButton = document.getElementById('reset-btn');

var gameCounter = 0;

var chooseSquare = function(){
   var square = event.target;
       if (gameCounter === 0) {
           // square.textContent = 'X';
           square.classList.add('roo');
           gameCounter++;
   } else if (gameCounter % 2 === 0) {
           // square.textContent = 'X';
           square.classList.add('roo');
           gameCounter++;
   } else if (gameCounter % 2 !== 0) {
           // square.textContent = 'O';
           square.classList.add('chimp');
           gameCounter++;
   }
};

var resetBoard = function(){
   location.reload(true);
};


gameBoard.addEventListener('click', chooseSquare);
