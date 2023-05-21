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
var brickPro = 6;


//block
var blockRate =1;
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

//
var level;

//
var timer;
var min = 5;
var sec = 60;

//
var calc;
var score = 0;
var update_score = 0;

//
var life_count;
var lifeArray = ["life1.png","life2.jpeg"];

//
var slideArray = ["resources/img/block1.png" ];

// 
var attack = 0;
var manzu = 2;
var hard = 3;
