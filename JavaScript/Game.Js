class Game{
    constructor()
    {}
    update(state){
        dataBase.ref("/").update({GameState:state})
        
    }
    getState()
    {
        var gameStateRef = dataBase.ref("GameState");
        gameStateRef.on("value", function(data)
        {gamestate = data.val();});
    }
 startGame(){
     if(gamestate === 0){
         player = new Player();
         player.getCount();
         form = new Form();
         form.display();
     }
   car1 = createSprite(100,200);
   car1.addImage("car1", car1Image)
   car2 = createSprite(300,200);
   car2.addImage("car2", car2Image)
   car3 = createSprite(500,200);
   car3.addImage("car3",car3Image)
   car4 = createSprite(700,200);
   car4.addImage("car4", car4Image)
   cars = [car1,car2,car3,car4];
 }
play()
{
    form.hideForm();
    // textSize(30);
    // text("Game Start", 120, 100);
    Player.getPlayerInfo();
    player.getFinishedPlayers();

    if(allPlayers!==undefined)
    {
        background("grey")
        image(Track,0,-height*4, width, height*5)
    var index = 1
    var x = 400
    var y = height; 
    
    for(var plr in allPlayers)
    {      
      cars[index-1].x=x;
      y=height - allPlayers[plr].distance
      cars[index-1].y=y
     
       if(index === player.index){
           cars[index-1].shapeColor= "red";
          
            camera.position.x = width/2;
            camera.position.y = cars[index-1].y; 
           
          fill("Blue")
          ellipse(x,y,100,100) 
       } 
       index = index+1
       x = x+200

     
    }
    if(keyIsDown(UP_ARROW) && player.index!== null)
    {
      
        player.distance = player.distance + 50;
        player.update(); 
        
    }
    if(player.distance > 3860){
        this.rank = this.rank +1;
        player.update();
        Player.updateFinishedPlayers(player.rank)
        gamestate = 2 
    }
  drawSprites();
}
}
end(){
    console.log("Game Ended");
    text("You made it! Just wait for the others to finish! ", width/2, camera.position.y)
    
}
displayRank(){
    var textYPosition = camera.position.y;
    textSize(35);
    fill("black")
    stroke("black")
    text("Leader Board", width/2, textYPosition);

    textSize(20)
    for(var plyrs in allPlayers)
    {

      if(allPlayers[plyrs].rank === 1){
           fill("Blue")
           stroke("Black")
          text(allPlayers[plyrs].Name + " is the Winner ", width/2 - 60,textYPosition+30 )
      }
      else if(allPlayers[plyrs].rank === 2){
        fill("Yellow")
        stroke("Black")
       text(allPlayers[plyrs].Name + " is in 2nd ", width/2 - 60,textYPosition+60 )
   }
   else if(allPlayers[plyrs].rank === 3){
    fill("Red")
    stroke("Black")
   text(allPlayers[plyrs].Name + " is the 3rd ", width/2 - 60,textYPosition+90 )
}
else if(allPlayers[plyrs].rank === 4){
    fill("Brown")
    stroke("Black")
   text(allPlayers[plyrs].Name + " is the 4th ", width/2 - 60,textYPosition+120 )

}
}


    }





}
