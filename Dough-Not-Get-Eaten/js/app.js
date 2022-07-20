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
let mouth;

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
    grabJumpBtn.style.backgroundImage= "url(../images/jumpBtnImage.png)"
    grabJumpBtn.setAttribute('id',"jump-btn")
    grabJumpBtn.addEventListener("click", ()=>this.jump()) // Arrow function and this. since it is calling a method w/in the class rather than a function
    grabEmptyJump.appendChild(grabJumpBtn)
    //create GO btn
    grabGoBtnPlayer1=document.createElement('button');
    // grabGoBtnPlayer1.innerText="GO";
    grabGoBtnPlayer1.style.backgroundImage= "url(../images/goBtnImage.png)"
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
    doughnutEaten.setAttribute('id', 'dough-eaten')
    grabBox.appendChild(doughnutEaten)
    doughnutEaten.src=('../images/doughnutEatenImage.png')
    
   
    
        setTimeout((()=> {doughnutEaten.remove()}), 1500)   
 }


 checkEaten(){ // How long this function runs to determine player time score.
    console.log("inside check funct")
    this.startPlayer1 = Date.now()
    console.log("startPlayer1", this.startPlayer1)
   let checkEatInv= setInterval(()=>{

       let doughnutTop=parseInt(window.getComputedStyle(doughnut).getPropertyValue("top")); //get the top position of the #doughnut
      // parsInt because without it it would return the top position with px but we only want the number.                                
       let mouthLeft = parseInt(window.getComputedStyle(mouth).getPropertyValue("left")); //get the left position of the #mouth
       if(mouthLeft<90  && mouthLeft >30 && doughnutTop>=120){ // 90= 30px(px distance from left side of div to left side of doughnut img) + 60px(width of doughnut img ) && 30= pxdistance from left side of div being greater than 30, so it hasn't passed the doughnut img. ---- both of these together mean that the mouth is in the same spot within the div as the doughnut. && 120 = 200 (div px height) - 80 (height of the mough) --- this means that the doughnut didn't jump over the mouth.
       clearInterval(checkEatInv);
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
     mouth=document.createElement('div')
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

//Global Variables
let grabturnTrackerDiv;
let grabturnTracker;
let turnChange;
let grabGoBtnPlayer1a;
let grabGoBtnPlayer2;
let mouth2;
let winnerImage;
let grabJumpBtn2;
//CLASS 2 PLAYER

class Game2 {
    constructor(turn=0){
           this.turn=turn
           this.startPlayer1;
           this.startPlayer2;
           this.durationP1;
           this.durationP2;
           
    } 
        
    //Methods :
    Play2Btn (){	
        //background change & play-btn removed		
        document.body.style.backgroundColor="pink";  
        document.querySelector("#play1-btn").remove()
        document.querySelector("#play2-btn").remove()
        document.querySelector("#title").remove()
        //create Turn Tracker
       
        grabturnTrackerDiv=document.createElement('div')
        grabturnTrackerDiv.setAttribute('id', "turnTrackerDiv")
        document.body.appendChild(grabturnTrackerDiv)
        grabturnTracker=document.createElement('div')
        grabturnTracker.setAttribute('id', "turnTracker")
        grabturnTrackerDiv.appendChild(grabturnTracker)
        grabturnTrackerDiv.style.backgroundColor='white';
        grabturnTracker.innerText="Player's Turn:"
        this.turn +=1
        turnChange= document.createElement('span')
        turnChange.setAttribute('id', "turnChange")
        turnChange.innerText=this.turn 
        grabturnTracker.appendChild(turnChange)
        console.log(this.turn)
       // create doughnut character
        doughnut=document.createElement('div')
        doughnut.setAttribute('id', 'doughnut')
        grabBox.appendChild(doughnut)
        //create JUMP btn                                 
        grabJumpBtn2=document.createElement('button')   
        grabJumpBtn2.innerText="JUMP"
        grabJumpBtn2.style.backgroundImage= "url(../images/jumpBtnImage.png)"
        grabJumpBtn2.setAttribute('id',"jump-btn2")
        grabJumpBtn2.addEventListener("click", ()=>this.jump()) // Arrow function and this. since it is calling a method w/in the class rather than a function
        grabEmptyJump.appendChild(grabJumpBtn2)
    //create GO btn
        grabGoBtnPlayer1a=document.createElement('button');
        grabGoBtnPlayer1a.style.backgroundImage= "url(../images/goBtnImage.png)"
        // grabGoBtnPlayer1a.innerText="GO";
        grabGoBtnPlayer1a.setAttribute("id", "go-btn-player-1a")
        grabGoBtnPlayer1a.addEventListener("click", ()=>this.goPlayer1())
        grabEmptyGo.appendChild(grabGoBtnPlayer1a);
       
        
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
        doughnutEaten.setAttribute('id', 'dough-eaten')
        grabBox.appendChild(doughnutEaten)
        doughnutEaten.src=('../images/doughnutEatenImage.png')
        
            setTimeout((()=> {doughnutEaten.remove()}), 1500)  
            this.turn +=1
            turnChange.innerText=this.turn 
            console.log(this.turn)
             this.player2SetUp()

    }
    
    
      checkEaten1(){ // 
         console.log("inside check funct")
         this.startPlayer1 = Date.now()     // Date.now() returns the # of milliseconds elapsed since Jan 1 1970
         console.log("startPlayer1", this.startPlayer1)
        let checkIntv1= setInterval(()=>{
    
           const doughnutTop1=parseInt(window.getComputedStyle(doughnut).getPropertyValue("top")); //get the top position of the #doughnut
          // parsInt because without it it would return the top position with px but we only want the number.                                
            const mouthLeft1 = parseInt(window.getComputedStyle(mouth).getPropertyValue("left"));//get the left position of the #mouth
            if(mouthLeft1<90  && mouthLeft1 >30 && doughnutTop1>=120){ // 90= 30px(px distance from left side of div to left side of doughnut img) + 60px(width of doughnut img ) && 30= pxdistance from left side of div being greater than 30, so it hasn't passed the doughnut img. ---- both of these together mean that the mouth is in the same spot within the div as the doughnut. && 120 = 200 (div px height) - 80 (height of the mouth) --- this means that the doughnut didn't jump over the mouth.
            console.log("Doughnut was eaten")                   
            clearInterval(checkIntv1)
            doughnut.remove();
            mouth.remove();
            grabJumpBtn2.remove(); 
            this.player1Score();  
            this.doughnutEaten1();
             
            }
        } ,10 ) ;  
       
   }
    
    // Have the turn tracker start? but needs to change once checkEaten2 is met
     goPlayer1(){ 
        console.log("inside goPlayer1")
        mouth=document.createElement('div')
        mouth.setAttribute('id', 'mouth')
        grabBox.appendChild(mouth)
         document.querySelector("#go-btn-player-1a").remove()
        this.checkEaten1()
    
     }
    
    player1Score(){ //?????
         console.log("inside player1Score")
          this.durationP1 = Date.now() - this.startPlayer1; //
         console.log("durationP1", this.durationP1) 
        
     }
     
    player2SetUp(){
        console.log("inside player2SetUp")
        setTimeout((()=> {
        
        //create doughnut character
        doughnut=document.createElement('div')
        doughnut.setAttribute('id', 'doughnut')
        grabBox.appendChild(doughnut)
        // //create JUMP btn                                 
        grabJumpBtn2=document.createElement('button')   
        grabJumpBtn2.innerText="JUMP"
        grabJumpBtn2.style.backgroundImage= "url(../images/jumpBtnImage.png)"
        grabJumpBtn2.setAttribute('id',"jump-btn2")
        grabJumpBtn2.addEventListener("click", ()=>this.jump()) // Arrow function and this. since it is calling a method w/in the class rather than a function
        grabEmptyJump.appendChild(grabJumpBtn2)
    //create GO btn
        grabGoBtnPlayer2=document.createElement('button');
        grabGoBtnPlayer2.style.backgroundImage= "url(../images/goBtnImage.png)"
        grabGoBtnPlayer2.setAttribute("id", "go-btn-player-2")
        grabGoBtnPlayer2.addEventListener("click", ()=>this.goPlayer2())
        grabEmptyGo.appendChild(grabGoBtnPlayer2);
          
        }), 2000)  
    }
   
      goPlayer2(){
        console.log("inside goPlayer2")
         mouth2=document.createElement('div')
        mouth2.setAttribute('id', 'mouth2')
        grabBox.appendChild(mouth2)
         document.querySelector("#go-btn-player-2").remove()
         this.checkEaten2()
     }

     checkEaten2(){ 
        console.log("inside check2 funct")
        this.startPlayer2 = Date.now()
        console.log("startPlayer2", this.startPlayer2)
      let checkIntv2 = setInterval(()=>{
            console.log("inside setInterval check")
          const doughnutTop2=parseInt(window.getComputedStyle(doughnut).getPropertyValue("top")); //get the top position of the #doughnut - getComputedStyle=returns an object containing the values of all CSS properties of an element.getPropertValue=eturns a string containing the value of a specified CSS property
         // parsInt because without it it would return the top position with px but we only want the number.                                
           const mouthLeft2 = parseInt(window.getComputedStyle(mouth2).getPropertyValue("left"));
            //get the left position of the #mouth
           if(mouthLeft2<90  && mouthLeft2 >30 && doughnutTop2>=120){ // 90= 30px(px distance from left side of div to left side of doughnut img) + 60px(width of doughnut img ) && 30= pxdistance from left side of div being greater than 30, so it hasn't passed the doughnut img. ---- both of these together mean that the mouth is in the same spot within the div as the doughnut. && 120 = 200 (div px height) - 80 (height of the mouth) --- this means that the doughnut didn't jump over the mouth.
            clearInterval(checkIntv2);
                console.log("Doughnut was eaten")                
                doughnut.remove();
                 mouth2.remove();
                 grabJumpBtn2.remove();   
                this.doughnutEaten2();
                this.player2Score();
                this.determineWinner()
           }
       } ,10 ) ;  
        
  }


  doughnutEaten2(){ 
    console.log("inside doughnutEaten2 funct")
    doughnutEaten=document.createElement('img')
    doughnutEaten.setAttribute('id', 'dough-eaten')
    grabBox.appendChild(doughnutEaten)
    doughnutEaten.src=('../images/doughnutEatenImage.png')
    
        setTimeout((()=> {doughnutEaten.remove()}), 1500)  
        console.log("ready to determine winner")
}
    
    player2Score(){ //?????
        console.log("inside player2Score")
         this.durationP2 = Date.now() - this.startPlayer2;
        console.log("durationP2", this.durationP2)
    }
    

     determineWinner(){ //??? this isn't coming out to the correct winner
        console.log("Inside determineWinner")
        grabGoBtnPlayer2.remove()
        grabturnTrackerDiv.remove()
console.log("d1",this.durationP1)
console.log("d2", this.durationP2)
        if (this.durationP1 > this.durationP2){
            winnerImage=document.createElement('img')
            winnerImage.setAttribute('id', 'winner-image')
            grabBox.appendChild(winnerImage)
            winnerImage.src=('../images/winnerImage.png')
            alert("The winner is Player 1!")
        }
        else if (this.durationP1 < this.durationP2){
        winnerImage=document.createElement('img')
        winnerImage.setAttribute('id', 'winner-image')
        grabBox.appendChild(winnerImage)
        winnerImage.src=('../images/winnerImage.png')
        alert("The winner is Player 2!")
        }
        else {
        winnerImage=document.createElement('img')
        winnerImage.setAttribute('id', 'winner-image')
        winnerImage.src=('../images/tieImage.png')
         alert("Wow! It was a tie game!")
        
    }

    }
}

// Add a replay btn
    //NEW INSTANCE
    let twoPlayer = new Game2(0)
    
    //EVENT LISTENERS
    document.getElementById('play2-btn').addEventListener('click',(e)=>{twoPlayer.Play2Btn()}) 
    //document.getElementById('jump-btn').addEventListener('click',(e)=>{roundOne.jump(),roundOne.checkEaten()}) 
    
     

 