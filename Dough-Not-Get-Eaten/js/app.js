



let grabBox=document.querySelector('#box')
let grabEmptyGo=document.querySelector('#empty-go')
let grabEmptyJump=document.querySelector("#empty-jump")
let grabDoughEaten=document.querySelector("#dough-eaten")

//GLOBAL VARIABLES
let bottomVar = 0
let grabJumpBtn;
let grabGoBtnPlayer1;
let doughnutEaten;
//let doughnutEatenImage;
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
 

 doughnutEaten1(){ //?? This is making a div set to #dough-eaten cant reach image for CSS
    console.log("inside doughnutEaten1 funct")

    
    //let boxBackground = document.querySelector('#box').style.backgroundImage

    //grabBox.style.backgroundImage=src="./images/doughnutEatenImage.png"
     
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

// How long this function runs to determine time.
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
    //trying to use Date.now()
    // const startPlayer1 = Date.now()
    //  console.log("startPlayer1", startPlayer1)
     const durationP1 = Date.now() - this.startPlayer1;
    console.log("durationP1", durationP1)    
}

}
//NEW INSTANCE
let onePlayer = new Game1()

//EVENT LISTENERS
document.getElementById('play1-btn').addEventListener('click',(e)=>{onePlayer.Play1Btn()}) 
//document.getElementById('jump-btn').addEventListener('click',(e)=>{roundOne.jump(),roundOne.checkEaten()}) 

//__________________________________________________________________________________________________________



//CLASS 2 PLAYER
//let playerTurn = 0//This controls the players turn //Odd # = player1//Even # = player2
class Game2 {
    constructor(player1, player2){
        this.player1=player1
        this.player2=player2  
        this.startPlayer1;
    } 
        
    //Methods :
    Play2Btn (){	
        //background change & play-btn removed		
        document.body.style.backgroundColor="pink";  
        document.querySelector("#play1-btn").remove()
        document.querySelector("#play2-btn").remove()
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
    //  jump(){
    //     console.log("inside jump funct")
    //     if(doughnut.classList != ('animate')){   // only do the following if the classList hasn't added animate- This is so that each click doesn't add classList animate each time.
    //         doughnut.classList.add('animate')   // access #doughnut via the sprinkles variable.Grab it's classList and use add() to animate- only runs one jump on it's own.
    //         setTimeout(function(){
    //             doughnut.classList.remove('animate');  //??? can't re add the same classList more than once. So have to remove after the animation is done.
    //         } , 500)
    //     }  
    //  } 
     
    
    //  doughnutEaten1(){ //?? This is making a div set to #dough-eaten cant reach image for CSS
    //     console.log("inside doughnutEaten1 funct")
    
        
        //let boxBackground = document.querySelector('#box').style.backgroundImage
    
        //grabBox.style.backgroundImage=src="./images/doughnutEatenImage.png"
         
        //  doughnutEaten=document.createElement('img')
        // doughnut.setAttribute('id', 'dough-eaten')
        // grabBox.appendChild(doughnutEaten)
        // doughnutEaten.src=('../images/doughnutEatenImage.png')
        
       
        
        //  setTimeout((()=> {doughnutEaten.remove()}), 1500) 
    
    
    
        //PlayScreen2()
    // }
    
    
    //  checkEaten(){ // How long this function runs to determine player time score.
    //     console.log("inside check funct")
    //     this.startPlayer1 = Date.now()
    //     console.log("startPlayer1", this.startPlayer1)
    //     setInterval(()=>{
    
    //        const doughnutTop=parseInt(window.getComputedStyle(doughnut).getPropertyValue("top")); //get the top position of the #doughnut
    //       // parsInt because without it it would return the top position with px but we only want the number.                                
    //        const mouthLeft = parseInt(window.getComputedStyle(mouth).getPropertyValue("left")); //get the left position of the #mouth
    //        if(mouthLeft<90  && mouthLeft >30 && doughnutTop>=120){ // 90= 30px(px distance from left side of div to left side of doughnut img) + 60px(width of doughnut img ) && 30= pxdistance from left side of div being greater than 30, so it hasn't passed the doughnut img. ---- both of these together mean that the mouth is in the same spot within the div as the doughnut. && 120 = 200 (div px height) - 80 (height of the mough) --- this means that the doughnut didn't jump over the mouth.
    //         console.log("Doughnut was eaten")                   
    //         doughnut.style.animation ="none"; // turn off animation
    //         doughnut.style.display ="none"; // can't see it anymore
    //         mouth.style.animation ="none";
    //         mouth.style.display ="none";
    //         grabJumpBtn.remove();   
    //         this.doughnutEaten1();
    //         this.player1Score();
    //        }
    //    } ,10 ) ;  
       
   // }
    
    // How long this function runs to determine time.
    // goPlayer1(){
    //     console.log("inside goPlayer1")
    //     let mouth=document.createElement('div')
    //     mouth.setAttribute('id', 'mouth')
    //     grabBox.appendChild(mouth)
    //     document.querySelector("#go-btn-player-1").remove()
    //     this.checkEaten()
    
    // }
    
    // player1Score(){
    //     console.log("inside player1Score")
    //     //trying to use Date.now()
    //     // const startPlayer1 = Date.now()
    //     //  console.log("startPlayer1", startPlayer1)
    //      const durationP1 = Date.now() - this.startPlayer1;
    //     console.log("durationP1", durationP1)
        
        
    // }
    
    
    
    }
    //NEW INSTANCE
    let twoPlayer = new Game2()
    
    //EVENT LISTENERS
    document.getElementById('play2-btn').addEventListener('click',(e)=>{twoPlayer.Play2Btn()}) 
    //document.getElementById('jump-btn').addEventListener('click',(e)=>{roundOne.jump(),roundOne.checkEaten()}) 
    
     

 