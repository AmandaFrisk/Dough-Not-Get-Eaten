//1 PLAYER 

//QUERYSELECTORS

let grabBox=document.querySelector('#box')
let grabEmptyGo=document.querySelector('#empty-go')
let grabEmptyJump=document.querySelector("#empty-jump")
let grabDoughEaten=document.querySelector("#dough-eaten")

//GLOBAL VARIABLES
let bottomVar = 0
let grabJumpBtn;
let grabGoBtnPlayer1;
let doughnutEaten;
let doughnut;


//1 PLAYER CLASS
class Game1 {
constructor(){
     
    this.startPlayer1;
} 
    
//Methods :
Play1Btn (){	
    //background change & play-btn removed		
    document.body.style.backgroundColor="pink";  
    document.querySelector("#play1-btn").remove()
    document.querySelector("#play2-btn").remove()
    //create doughnut character
    doughnut=document.createElement('div')
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
 

 doughnutEaten1(){ //?? This is making a div set to #dough-eaten cant reach image for CSS
    console.log("inside doughnutEaten1 funct")
    doughnutEaten=document.createElement('img')
    doughnut.setAttribute('id', 'dough-eaten')
    grabBox.appendChild(doughnutEaten)
    doughnutEaten.src=('../images/doughnutEatenImage.png')
    
   
    
        setTimeout((()=> {doughnutEaten.remove()}), 1500)   
 }


 checkEaten(){ // How long this function runs to determine player time score.
    console.log("inside check funct")
    this.startPlayer1 = Date.now()
    console.log("startPlayer1", this.startPlayer1)
    setInterval(()=>{

       const doughnutTop=parseInt(window.getComputedStyle(doughnut).getPropertyValue("top")); //get the top position of the #doughnut
      // parsInt because without it it would return the top position with px but we only want the number.                                
       const mouthLeft = parseInt(window.getComputedStyle(mouth).getPropertyValue("left")); //get the left position of the #mouth
       if(mouthLeft<90  && mouthLeft >30 && doughnutTop>=120){ // 90= 30px(px distance from left side of div to left side of doughnut img) + 60px(width of doughnut img ) && 30= pxdistance from left side of div being greater than 30, so it hasn't passed the doughnut img. ---- both of these together mean that the mouth is in the same spot within the div as the doughnut. && 120 = 200 (div px height) - 80 (height of the mough) --- this means that the doughnut didn't jump over the mouth.
        console.log("Doughnut was eaten")                   
        doughnut.style.animation ="none"; // turn off animation
        doughnut.style.display ="none"; // can't see it anymore
        mouth.style.animation ="none";
        mouth.style.display ="none";
        grabJumpBtn.remove();   
        this.doughnutEaten1();
        this.player1Score();
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

}

player1Score(){
    console.log("inside player1Score")
     const durationP1 = Date.now() - this.startPlayer1;
    console.log("durationP1", durationP1)    
}

}
//NEW INSTANCE
let onePlayer = new Game1()

//EVENT LISTENER
document.getElementById('play1-btn').addEventListener('click',(e)=>{onePlayer.Play1Btn()}) 
 

//__________________________________________________________________________________________________________
//2 PLAYER

//QUERYSELECTORS - JUST USED FOR GAME2
let grabturnTrackerDiv=document.querySelector('#turnTrackerDiv')
let grabturnTracker=document.querySelector('#turnTracker')
let grabTurnChange=document.querySelector('#turnChange')
//Global Variables
let turnChange;
let grabGoBtnPlayer2;
//CLASS 2 PLAYER

class Game2 {
    constructor(turn=0){
           this.turn=turn
           this.startPlayer1;
           
    } 
        
    //Methods :
    Play2Btn (){	
        //background change & play-btn removed		
        document.body.style.backgroundColor="pink";  
        document.querySelector("#play1-btn").remove()
        document.querySelector("#play2-btn").remove()
        document.querySelector("#title").remove()
        //create Turn Tracker
        grabturnTrackerDiv.style.backgroundColor='white';
        grabturnTracker.innerText="Player's Turn:"
        this.turn +=1
        turnChange= document.createElement('span')
        turnChange.setAttribute('id', "turnChange")
        turnChange.innerText=this.turn 
        grabturnTracker.appendChild(turnChange)
        console.log(this.turn)
        //create doughnut character
        doughnut=document.createElement('div')
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
     
    
      doughnutEaten1(){ //?? This is making a div set to #dough-eaten cant reach image for CSS
        console.log("inside doughnutEaten funct")
        doughnutEaten=document.createElement('img')
        doughnut.setAttribute('id', 'dough-eaten')
        grabBox.appendChild(doughnutEaten)
        doughnutEaten.src=('../images/doughnutEatenImage.png')
        
            setTimeout((()=> {doughnutEaten.remove()}), 1500)  
            this.turn +=1
            turnChange.innerText=this.turn 
            console.log(this.turn)
            this.player2SetUp()

    }
    
    
      checkEaten1(){ // How long this function runs to determine player time score.
         console.log("inside check funct")
         this.startPlayer1 = Date.now()
         console.log("startPlayer1", this.startPlayer1)
         setInterval(()=>{
    
           const doughnutTop=parseInt(window.getComputedStyle(doughnut).getPropertyValue("top")); //get the top position of the #doughnut
          // parsInt because without it it would return the top position with px but we only want the number.                                
            const mouthLeft = parseInt(window.getComputedStyle(mouth).getPropertyValue("left")); //get the left position of the #mouth
            if(mouthLeft<90  && mouthLeft >30 && doughnutTop>=120){ // 90= 30px(px distance from left side of div to left side of doughnut img) + 60px(width of doughnut img ) && 30= pxdistance from left side of div being greater than 30, so it hasn't passed the doughnut img. ---- both of these together mean that the mouth is in the same spot within the div as the doughnut. && 120 = 200 (div px height) - 80 (height of the mough) --- this means that the doughnut didn't jump over the mouth.
            console.log("Doughnut was eaten")                   
             doughnut.style.animation ="none"; // turn off animation
             doughnut.style.display ="none"; // can't see it anymore
            mouth.style.animation ="none";
             mouth.style.display ="none";
             grabJumpBtn.remove();   
             this.doughnutEaten1();
             this.player1Score();
            }
        } ,10 ) ;  
       
   }
    
    // Have the turn tracker start? but needs to change once checkEaten2 is met
     goPlayer1(){ 
        console.log("inside goPlayer1")
        let mouth=document.createElement('div')
        mouth.setAttribute('id', 'mouth')
        grabBox.appendChild(mouth)
         document.querySelector("#go-btn-player-1").remove()
        this.checkEaten1()
    
     }
    
    player1Score(){
         console.log("inside player1Score")
        
         const startPlayer1 = Date.now()
          console.log("startPlayer1", startPlayer1)
         const durationP1 = Date.now() - this.startPlayer1;
         console.log("durationP1", durationP1)
        
        // use duration to compare to other player
     }
     
    player2SetUp(){
        //create doughnut character
        doughnut=document.createElement('div')
        doughnut.setAttribute('id', 'doughnut')
        grabBox.appendChild(doughnut)
        //create JUMP btn                                 
        grabJumpBtn=document.createElement('button')   
        grabJumpBtn.innerText="JUMP"
        grabJumpBtn.setAttribute('id',"jump-btn")
        grabJumpBtn.addEventListener("click", ()=>this.jump()) // Arrow function and this. since it is calling a method w/in the class rather than a function
        grabEmptyJump.appendChild(grabJumpBtn)
    //create GO btn
        grabGoBtnPlayer2=document.createElement('button');
        grabGoBtnPlayer2.innerText="GO";
        grabGoBtnPlayer2.setAttribute("id", "go-btn-player-2")
        grabGoBtnPlayer2.addEventListener("click", ()=>this.goPlayer2())
        grabEmptyGo.appendChild(grabGoBtnPlayer2);
          this.goPlayer2()
    }
   
      goPlayer2(){
        console.log("inside goPlayer2")
        let mouth=document.createElement('div')
        mouth.setAttribute('id', 'mouth')
        grabBox.appendChild(mouth)
         document.querySelector("#go-btn-player-2").remove()
        // this.checkEaten2()
     }

//      checkEaten2(){ // How long this function runs to determine player time score.
//         console.log("inside check funct")
//         this.startPlayer2 = Date.now()
//         console.log("startPlayer2", this.startPlayer2)
//         setInterval(()=>{
   
//           const doughnutTop=parseInt(window.getComputedStyle(doughnut).getPropertyValue("top")); //get the top position of the #doughnut
//          // parsInt because without it it would return the top position with px but we only want the number.                                
//            const mouthLeft = parseInt(window.getComputedStyle(mouth).getPropertyValue("left")); //get the left position of the #mouth
//            if(mouthLeft<90  && mouthLeft >30 && doughnutTop>=120){ // 90= 30px(px distance from left side of div to left side of doughnut img) + 60px(width of doughnut img ) && 30= pxdistance from left side of div being greater than 30, so it hasn't passed the doughnut img. ---- both of these together mean that the mouth is in the same spot within the div as the doughnut. && 120 = 200 (div px height) - 80 (height of the mough) --- this means that the doughnut didn't jump over the mouth.
//            console.log("Doughnut was eaten")                   
//             doughnut.style.animation ="none"; // turn off animation
//             doughnut.style.display ="none"; // can't see it anymore
//            mouth.style.animation ="none";
//             mouth.style.display ="none";
//             grabJumpBtn.remove();   
//             //  this.doughnutEaten1();
//             this.player2Score();
//            }
//        } ,10 ) ;  
      
//   }
   
    
//     player2Score(){
//         console.log("inside player2Score")
        
//         const startPlayer2 = Date.now()
//          console.log("startPlayer2", startPlayer2)
//         const durationP2 = Date.now() - this.startPlayer2;
//         console.log("durationP2", durationP2)
//     }
    
    }
    //NEW INSTANCE
    let twoPlayer = new Game2(0)
    
    //EVENT LISTENERS
    document.getElementById('play2-btn').addEventListener('click',(e)=>{twoPlayer.Play2Btn()}) 
    //document.getElementById('jump-btn').addEventListener('click',(e)=>{roundOne.jump(),roundOne.checkEaten()}) 
    
     

 