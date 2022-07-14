

//DOM QUERYSELECTORS
let sprinkles = document.querySelector("#doughnut")
let hungry = document.querySelector('#mouth')
//GLOBAL VARIABLES
let bottomVar = 0
let playerTurn = 0

//This controls the players turn 
//Odd # = player1
//Even # = player2

//CLASS
class Game {
constructor(player1, player2){
    this.player1=player1
    this.player2=player2
    
}
	    //  (name1 ?) (name2?)       
//Methods :





//PlayBtn (){				
//  event listener onclick   PLAY btn     
//Background 
//Add characters
//Add jump button 
//Add go btn
//}





jump(){
    console.log("inside jump funct")
    if(sprinkles.classList != ('animate')){   // only do the following if the classList hasn't added animate- This is so that each click doesn't add classList animate each time.
sprinkles.classList.add('animate')   // access #doughnut via the sprinkles variable.Grab it's classList and use add() to animate- only runs one jump on it's own.
setTimeout(function(){
    sprinkles.classList.remove('animate');  //??? can't re add the same classList more than once. So have to remove after the animation is done.
} , 500)
    
let checkEaten =setInterval(function(){

} ,10 ) ;


 }
}

//goPlayer1(){
//event listener onclick GO PLAYER 1 btn
// Mouth Movement -collision with doughnut ends movement
// Ending movement results in DoughnutEaten()
//Player1 Score()
//}

//player1Score(){
//Store time for player1
//}

//doughnutEaten1(){
// timed only for a few seconds
//Removes or hides characters
//Removes or hides JUMP btn
//Removes  goPlayer1 button
//Add eaten doughnut image
//Add Doughnut was eaten text
//PlayScreen2()

//}


//PlayScreen2 (){				
//Add/take off hiding for characters
//Add/take off hiding for JUMP button
//Add goPlayer2 btn
//}

//goPlayer2(){
// eventlistener onclick GO PLAYER 1 btn 
// Mouth Movement -collision with doughnut ends movement
// Ending movement results in DoughnutEaten2()
//player2 Score()
//}

//player2Score(){
//Store time for player2
//}


//doughnutEaten2(){
// timed only for a few seconds
//Removes or hides characters
//Removes or hides JUMP btn
//Removes  goPlayer1 button
//Add eaten doughnut image
//Add Doughnut was eaten text
//determineWinner()
//}


//determineWinner(){
//Compare player1Score vs player2Score values -winnerTimer or tieTime
//If winnerTime- winnerScreen()
//If player1
// - collect time in winnerTimeScore
//- collect  1 in winnerName
//If player2 - collect time in winnerTimeScore
//-collect 2  in winnerName
//If tie - tieScreen()
   //collect === time in tieTimeScore
//}

//winnerScreen(){
//Background change 
//Add doughnut image
//Add time= winnerTime
//Add player  ___ is the winner!
// _____ = playerName
//}

//tieScreen(){
//Background change 
//Add doughnut image
//Add Tie!
// Add tie statement
//Add tietime to tie statement
//} 

}
let roundOne = new Game()
//EVENT LISTENERS
document.getElementById('jump-btn').addEventListener('click',(e)=>{roundOne.jump()}) 