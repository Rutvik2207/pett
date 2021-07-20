class Food{
    constructor(){
     
      this.foodStock=0;
      this.lastFed;
      this.image=loadImage("images/milk.png");  

    }
     feedDog(){
         dog.addImage(happyDog);

         foodObj.updatefoodStock(foodObj.getfoodStock-1
         )
     } 
     updatefoodStock(foodStock){
         this.foodStock=foodStock;
         
     }
     
     display(){
         var x=80;
         var y=100;
         image(this.image,720,720,70,70);

           if(this.foodStock !=0){
             
           
         for(var i=0;i<this.foodStock;i++){
             if(i%10==0){
                 x=80;
                 y=y+50;
             }
             image(this.image,x,y,50,50);
             x=x+30;
         }

     }
     
     
     }
    }  
     addFoodS(){
         foodS++;
         
        

     }
