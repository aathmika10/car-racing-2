class Game{
    constructor(){

    }
    getState(){
        database.ref('gameState').on("value",function(data){
        gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if (gameState===0){
            player= new Player();
            player.getCount();
            console.log(playerCount);
            form=new Form();
            form.display();
        }
    }
}
