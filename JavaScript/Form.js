class Form{

   constructor()
   {
    this.input = createInput("Name");
    this.button = createButton("Play")
    this.greeting = createElement("H3");
    this.reset = createButton("reset");

   }
   hideForm(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
   }
   display()
   {
       var title = createElement("H2");
       title.html("Car Racing Game");
       title.position(width/2-50, 10)

       
    this.reset.position(width-50,50)
    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0)        
    })

       this.input.position(width/2-40,height/2-80)

     
       
       this.button.position(width/2 + 30,height/2)
       this.button.mousePressed(()=> {    
    this.input.hide()
      this.button.hide();
        player.name = this.input.value();
        this.greeting.html("Hello "+ player.name + " let your freinds join.")
        this.greeting.position(width/2 - 40,height/2)
        playercount = playercount + 1;
        player.index = playercount;
        console.log("form "+ playercount )
        player.update();
        player.updateCount(playercount);
       });
    }
}