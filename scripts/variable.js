var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//brick
var brickColumnCount = 0;
var brickRowCount = 0;
var brickWidth = 75;
var brickHeight = 40;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var brickPro = 6;
var bricks = [];

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
var damage_count;


// 
var attack = 0;
var manzu = 2;
var ku_skill = 3;

var timeScript;

var blockSize = [150,100,50, 25];
var blockShuffleTimer;

var gameTimer;

//게임 클리어 확인 변수
var clear;