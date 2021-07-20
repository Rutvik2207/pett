var dog,dog_img;
var dog1,dog_1img;
var happydog;
var database;
var foodS,foodstock;
var feed;

function preload(){
 dogImage=loadImage("images/dogImg.png");
 foodStock=database.ref('food');
 foodStock.on("value",readStock)
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(400,350,30,30);
  dog.addImage(dogImage)
  dog.scale=0.2;

}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStocks(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}
database.ref('/').update
  
  }




