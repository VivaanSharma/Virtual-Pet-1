//Create variables here
var database
var dog;
var dogImage;
var dogHappy;
var database
var foodS;
var foodStock;
function preload()
{
  dogImage = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(350,300,350,5,5);
  dog.addImage(dogImage);
  dog.scale = 0.2
  
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);

  
}


function draw() {  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  
    dog.addImage(dogHappy);
  }
  

  background(46, 139, 87);
  textSize(20);
  fill("yellow")
  text("FOOD REMAINING:"+ foodS, 50, 100)
  drawSprites();





}

function readStock (data){
foodS = data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1
}
 // x=x-1
  database.ref("/").update({

  Food : x
  })
}


function keyPressed(){
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);

  dog.addImage(dogHappy);
}
}