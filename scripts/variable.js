var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var img;
var brickImg;
//brick
var brickColumnCount = 0;
var brickRowCount = 0;
var brickWidth = 75;
var brickHeight = 40;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 50;
var bricks = [];
//block
var blockHeight = 50;
var blockWidth = 250; 
var blockX, blockY;
var blockUp = false;

//ball
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 20;

var itemSize = [150,100,50,25];
//var hard = false;

//
var level;
//var startTimer;

//
var timer;
var min = 5;
var sec = 60;

//
var calc;
var score = 0;
var update_score;

var audio;
var ouch;
var ef;
var wa;


//
var life_count;
var damage_count;

var stone;

//

var timeScript;

var blockSize = [200,150,100, 50];
var blockShuffleTimer;

var gameTimer;

//게임 클리어 확인 변수
var clear = false;

var isRun = false;

