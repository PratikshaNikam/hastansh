class Apply{
    constructor(){
       
        this.button=createButton('APPLY');
        
    }
      
        hide(){
            this.button.hide();
        } 
         display(){
            this.button.position(displayWidth-100,displayHeight-40)
             this.button.mousePressed(()=>{
                gameState=2;
                apply.hide();
            });
         }
        
       
    }
    