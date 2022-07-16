

//DOM QUERYSELECTORS
//let doughnut = document.querySelector("#doughnut")
//let mouth = document.querySelector('#mouth')

let grabBox=document.querySelector('#box')
let grabEmptyGo=document.querySelector('#empty-go')
let grabEmptyJump=document.querySelector("#empty-jump")
let grabDoughEaten=document.querySelector("#dough-eaten")
//let boxBackground= document.grabBox.style.backgroundImage;
//GLOBAL VARIABLES
let bottomVar = 0
let grabJumpBtn;
let grabGoBtnPlayer1;
let doughnutEaten;
//let doughnutEatenImage;
let doughnut;
//let playerTurn = 0//This controls the players turn //Odd # = player1//Even # = player2

//CLASS
class Game {
constructor(player1, player2){
    this.player1=player1
    this.player2=player2  
} 
    
//Methods :
PlayBtn (){	
    //background change & play-btn removed		
    document.body.style.backgroundColor="pink";  
    document.querySelector("#play-btn").remove()
    //create doughnut character
    doughnut=document.createElement('div')
    //let doughnut=document.createElement('div')
    doughnut.setAttribute('id', 'doughnut')
    grabBox.appendChild(doughnut)

    //create JUMP btn                                 
    grabJumpBtn=document.createElement('button')   
    grabJumpBtn.innerText="JUMP"
    grabJumpBtn.setAttribute('id',"jump-btn")
    grabJumpBtn.addEventListener("click", ()=>this.jump()) // Arrow function and this. since it is calling a method w/in the class rather than a function
    grabEmptyJump.appendChild(grabJumpBtn)
//create GO btn
    grabGoBtnPlayer1=document.createElement('button');
    grabGoBtnPlayer1.innerText="GO";
    grabGoBtnPlayer1.setAttribute("id", "go-btn-player-1")
    grabGoBtnPlayer1.addEventListener("click", ()=>this.goPlayer1())
    grabEmptyGo.appendChild(grabGoBtnPlayer1);

}
 jump(){
    console.log("inside jump funct")
    if(doughnut.classList != ('animate')){   // only do the following if the classList hasn't added animate- This is so that each click doesn't add classList animate each time.
        doughnut.classList.add('animate')   // access #doughnut via the sprinkles variable.Grab it's classList and use add() to animate- only runs one jump on it's own.
        setTimeout(function(){
            doughnut.classList.remove('animate');  //??? can't re add the same classList more than once. So have to remove after the animation is done.
        } , 500)
    }  
 } 
 

 doughnutEaten1(){
    console.log("inside doughnutEaten1 funct")

    
    //let boxBackground = document.querySelector('#box').style.backgroundImage

    //grabBox.style.backgroundImage=src="./images/doughnutEatenImage.png"
     
     doughnutEaten=document.createElement('img')
      doughnut.setAttribute('id', 'dough-eaten')
    grabBox.appendChild(doughnutEaten)
    doughnutEaten.src=('../images/doughnutEatenImage.png')
    
   
    
    // setTimeout((()=> {doughnutEaten.remove()}), 1500) 



//PlayScreen2()
 }

// Start checking with Go button clicked
 checkEaten(){
    console.log("inside check funct")
    setInterval(()=>{

       const doughnutTop=parseInt(window.getComputedStyle(doughnut).getPropertyValue("top")); //get the top position of the #doughnut
      // parsInt because without it it would return the top position with px but we only want the number.                                
       const mouthLeft = parseInt(window.getComputedStyle(mouth).getPropertyValue("left")); //get the left position of the #mouth
       if(mouthLeft===50 && doughnutTop>=160){ //   would be right under the doughnut && haven't jumped over entire mouth    
        console.log("Doughnut was eaten")                   
        doughnut.style.animation ="none"; // turn off animation
        doughnut.style.display ="none"; // can't see it anymore
        mouth.style.animation ="none";
        mouth.style.display ="none";
        grabJumpBtn.remove();   
        this.doughnutEaten1();
       }
   } ,10 ) ;  
   
}


goPlayer1(){
    console.log("inside goPlayer1")
let mouth=document.createElement('div')
mouth.setAttribute('id', 'mouth')
grabBox.appendChild(mouth)
document.querySelector("#go-btn-player-1").remove()
this.checkEaten()

//Player1 Score()
}

//player1Score(){
//Store time for player1
//}

// doughnutEaten1(){
//     console.log("inside doughnutEaten1")
//  doughnutEaten=document.createElement('div')
//  doughnut.setAttribute('id', 'doughnut-eaten')
//  grabBox.appendChild(doughnutEaten)
// doughnutEatenImage=document.createElement("img")
// doughnutEatenImage.setAttribute("id", "doughnut-eaten-image")
// doughnutEaten.appendChild(doughnutEatenImage)
// //doughnutEatenImage.src= ""
// //setTimeout((()=> {doughnutEaten.remove()}), 1500) 

// //Add eaten doughnut image

// //PlayScreen2()

// }


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
//NEW INSTANCE
let roundOne = new Game()

//EVENT LISTENERS
document.getElementById('play-btn').addEventListener('click',(e)=>{roundOne.PlayBtn()}) 
//document.getElementById('jump-btn').addEventListener('click',(e)=>{roundOne.jump(),roundOne.checkEaten()}) 

 