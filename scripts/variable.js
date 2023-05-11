var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//brick
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;


//block
var blockHeight = 20;
var blockWidth = 70; 
var blockX, blockY;
var blockUp = false;

//ball
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
