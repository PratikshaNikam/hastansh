class Counter{
    constructor(){
        
    }
   

display(){
    var onion=createSprite(95,displayHeight-70,50,50);
   // onion.addImage('onionImg',onionImg)
    var redPepper=createSprite(265,displayHeight-70,120,120);
    redPepper.addImage('redPepperImg',redPepperImg);
    redPepper.scale=0.8;
    var greenPepper=createSprite(435,displayHeight-50,50,50);
    greenPepper.addImage('greenPepperImg',greenPepperImg)
    var cheeseSlice=createSprite(605,displayHeight-70,50,50);
    cheeseSlice.addImage('cheeseSliceImg',cheeseSliceImg)
    var bread=createSprite(775,displayHeight-70,50,50);
    bread.addImage('breadImg',breadImg)
    var tomato=createSprite(930,displayHeight-70,50,50);
    tomato.addImage('tomatoImg',tomatoImg)
    var board=createSprite(displayWidth/2,displayHeight-250,displayWidth,100);
board.addImage('boardImg',boardImg);
var dash=createSprite(displayWidth/2,displayHeight-350,displayWidth,50);
dash.shapeColor='brown';
if(mousePressedOver(redPepper)){
    count1=count1+1;
}
console.log(count1);

}



}