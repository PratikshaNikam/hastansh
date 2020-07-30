var bkg,form;
var manager,managerImage;
var gameState=0;
var bkgImg,manager_speech;
var apply,applyImg;
var onion,onionImg;
var greenPepper,greenPepperImg;
var redPepper,redPepperImg;
var cheeseSlice,cheeseSliceImg;
var bread,breadImg;
var customer1,customer1Img;
var customer2,customer2Img;
var customer3,customer3Img;
var customer4,customer4Img;
var sandwich,sandwichImg;
var tomato,tomatoImg;
var counter;
var board,boardImg;
var dash;
var customer,customer1;
var rand;
var count1=0;



function preload(){
managerImage=loadImage('Images/manager1.png');
bkgImg=loadImage('Images/bkg1.jpg');
manager_speech=loadImage('Images/manager_speech.png');
applyImg=loadImage('Images/apply.png');
onionImg=loadImage('Images/onion.png');
greenPepperImg=loadImage('Images/greenPepper.png');
redPepperImg=loadImage('Images/redPepper.png');
cheeseSliceImg=loadImage('Images/cheese slice.png');
breadImg=loadImage('Images/bread.png');
tomatoImg=loadImage('Images/tomato.png');
//customer3Img=loadImage('Images/customer3.png');
customer1Img=loadImage('Images/customer1.png');
customer2Img=loadImage('Images/customer2.png');
customer4Img=loadImage('Images/customer4.png');
sandwichImg=loadImage('Images/sandwich.png');
boardImg=loadImage('Images/board.jpg');

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  form=new Form();
  manager=new Manager();
  apply=new Apply();
 counter=new Counter();
 customer=new Customer();
  customer1=createSprite(random(800,displayWidth-250),displayHeight-450,50,50);
customer1.visible=false;
 rand=Math.round(random(1,3));
 console.log(rand);
 if (rand===1)
 {
   customer1.addImage('customer1Img',customer1Img)
 }
 if(rand===2)
 {
   customer1.addImage('customer2Img',customer2Img)
 }
 
 if(rand===3)
 {
   customer1.addImage('customer4Img',customer4Img)
 }
}

function draw() {

  background(0,255,0); 
  if(gameState===0){
    form.display();
  }
  if(gameState===1){
background(bkgImg);
 manager.display();
  apply.display();
  } 
  if(gameState===2){
    
  background(bkgImg);
  counter.display();
  fill("red");
  textSize(20);
  text("count1:"+count1,250,displayHeight-130)
  customer1.visible=true;
  
  
  }
  
  drawSprites();
}

