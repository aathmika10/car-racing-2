class Player{
    constructor(){

    }
    getCount(){
        database.ref('playerCount').on("value",function(data){
        playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(name){
        console.log(playerCount)
        var playerIndex= "player"+playerCount
        console.log(playerIndex)
        database.ref(playerIndex).set({
            name:name
        })
    }
}
