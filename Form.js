class Form{
    constructor(){
        
        }
    input = createInput("").attribute("placeholder", "Name");
    button = createButton('Play');
    greeting = createElement('h2');
    title = createElement('h2');
    reset=createButton("reset");

display(){
    this.title.position(displayWidth/2 - 50, 0);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();  
    }   
