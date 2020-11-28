var ball;
var database;
var ballPosition;
var pos;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballPosition = database.ref('ball/position');
    ballPosition.on('value', readPosition, showError)
}

function draw(){
    background("white");
    if(pos !== undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,1);
    }}
    drawSprites();
}


function readPosition(data){
    pos = data.val();
    console.log(pos.x);
    console.log(pos.y);
}
function showError(){
    console.log("error in database");
}
function writePosition(x, y){
    database.ref("ball/position").set({
        'x': pos.x + x,
        'y': pos.y + y
    })
}