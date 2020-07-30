class Form{
constructor(){
   
    this.button=createButton('PLAY')
    
}
  
    hide(){
        this.button.hide();
    } 
     display(){
        this.button.position(displayWidth/2,500)
         textSize(200);
        fill('red');
         textFont('Algerian');
         text('CHEF MANIA ',displayWidth/2-500,200);
         this.button.mousePressed(()=>{
            gameState=1;
            form.hide();
        });
     }
    
   
}
