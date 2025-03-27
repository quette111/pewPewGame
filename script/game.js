const gameScreen = document.getElementById("gameScreen"); //gaining access to element of game to add interactivity
const startButton = document.getElementById("startGame");
const hiddenDiv = document.getElementById("hiddenDiv");
const triangleGuy = document.getElementById("triangleGuy");
const squareGuy = document.getElementById("squareGuy");
const choose = document.getElementById("choose");
const chooseCharacter = document.getElementById("chooseCharacter");
const hide = document.getElementById("hide");
const loading = document.getElementById("loading");
const loadContainer = document.getElementById("loadContainer");
const head2 = document.getElementById("head2");
const healthContain = document.getElementById('healthContainer');
let img = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');
img.src = 'heart.png'
img2.src = 'heart.png'
img3.src = 'heart.png'
let src = healthContain

triangleGuy.hidden = true; //setting certain elements to not appear
squareGuy.hidden = true;
choose.hidden = true;
chooseCharacter.hidden = true;
hiddenDiv.hidden = true;
let endContainer = document.getElementById('endScreenContainer')
let myProgress = document.getElementById('myProgress');

var audio = new Audio('spaceSound.mp3');
audio.loop = true;
audio.play();

state = {
  disabled: false
}



document.getElementById('startGame').addEventListener('click', function(){

  //console.log(username)  
    console.log('started')
    setTimeout(()=> {
  if(document.getElementById('user').value == '' || document.getElementById('date').value == ''){
    alert('Please enter both username AND age to begin the game!')
  }else{
window.username = document.getElementById('user').value
//document.getElementById('inner').appendChild(document.createTextNode(document.getElementById('user').value))
    document.getElementById('userType').hidden = true
    document.getElementById('user').hidden = true; 
    document.getElementById('date').hidden = true//userType date
  startGame() 
  loadGame()

  }
}, 50)
})



function startGame() {
  src.appendChild(img);

  src.appendChild(img2);

  src.appendChild(img3);
  chooseCharacter.append(triangleGuy)
  chooseCharacter.append(squareGuy)
  document.body.style.cssText = `cursor: wait`; //initializing a loading screen for user experience

  gameScreen.style.background = "transparent";

  head2.style.cssText = `color: rgba(255, 255, 255, 0.16);

box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
`;

  let intro = "ø¤º°`°º¤ø,¸¸,ø¤º°ᖇ Y ᗩ ᑎ 'ᔕ ᖇ O ᑕ K E T ᖇEᔕᑕᑌE°º¤ø,¸¸,ø¤º°`°º¤ø"; //setting intro variable to a string

  for (let i = 0; i < intro.length; i++) {
    //passing string value to a for loop to iterate through and display one letter at a time
    setTimeout(function () {
      gameScreen.innerHTML += intro[i];
    }, 50 * (i + 1));
  }
  startButton.innerHTML = 'HEALTH:';


  startButton.disabled = true
  //after intro screen appears and goes thru loading process, clear displayed elements
  setTimeout(() => {
    gameScreen.innerHTML = "";
  }, 4000);
}

let screen =
  "Select your fighter and evade incoming enemy missiles";

function loadGame() {
  var audio3 = new Audio('typing.mp3');
audio3.play();
  let array = []; //using separate div items to continue loading screen, storing them in an array to iterate through, giving the appearance of a screen loading
  array.push("<div id='load'>");
  array.push("<div id='load'>");
  array.push("<div id='load'>");
  setTimeout(() => {
    //time for loop

    for (let i = 0; i < array.length; i++) {
      setTimeout(function () {
        loadContainer.hidden = false; //iterating through the loading array
        loading.hidden = false;
        gameScreen.innerHTML += array[i];
      }, 1000 * (i + 1));
    }

    setTimeout(() => {
      hiddenDiv.innerHTML = ""; //after a few seconds clear out loading screen elements
      gameScreen.innerHTML = "";

      document.body.style.cssText = `cursor: default`;

      for (let i = 0; i < screen.length; i++) {
        //passing string value to a for loop to iterate through and display welcome screen words one letter at a time
        setTimeout(function () {
          choose.innerHTML += screen[i];
        }, 50 * (i + 1)); //display pattern of variable screen
      }
      gameScreen.style.cssText = `animation: blinkBorder 2s infinite`; //resetting new UI loading up game
      choose.hidden = false;
      hide.style.display = "inline";
      loadContainer.hidden = true;
      var audio2 = new Audio('alarm.mp3');

audio2.play();
    }, 4000);
  }, 6000);
}





function getRandomInteger(max) {
  //creating function to create random number using the Math object
  return Math.floor(Math.random() * max);
}

let stars = document.getElementsByClassName('stars')

function changeBackground() {

  head2.remove()

  gameScreen.style.cssText = "border: none; background: rgba(0,0,0,0.0); box-shadow:none; z-index: 0";
  //element.style.cssText = "z-index: 10000";
  //stars.style.cssText = "animation: move-clouds-back 400s linear infinite;";

}






function chooseAnimalFighter() {
  triangleGuy.remove();
  choose.remove();

  document.addEventListener("mousemove", a => {
    squareGuy.style.background = "transparent";
    let x = a.clientX;
    let y = a.clientY;

    squareGuy.classList.add("active");

    squareGuy.style.cssText = `left: ${x}px; top: ${y}px`;
  });
  gameScreen.innerHTML = `<img src="rocket.gif" id="gameAntag"></img>`;

  let rocketParam = getRandomInteger(425);

  const element = document.getElementById("gameAntag"); //const ? idk m8


  let start;

  function moveGameObjects(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    const shift = Math.max(0.1 * elapsed, 70);
    //if else loop???? to loop the rockets back on screen
    var audio4 = new Audio('boom.mp3');

audio4.play();
    element.style.cssText = `top: ${rocketParam}px`;
    element.style.transform = `translateX(${shift}px)`;


    if (shift < 1650) {
      requestAnimationFrame(moveGameObjects);
    }
    if (shift > 1650) {
    
      // Replace screenWidth with the actual width of your game screen
      rocketParam = getRandomInteger(425); // Randomize the vertical position
      start = undefined; // Reset the animation start time

      requestAnimationFrame(moveGameObjects);
    }
  }
  requestAnimationFrame(moveGameObjects);
}

const date = new Date()
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

let scoreBoardCon = document.getElementById('scoreBoardCon');
function displayResetScreen() {
  

  endContainer.innerHTML = `
  
  <h1 id='resetText'>GAME OVER</h1>
  <h2 id='scoreText'>Score:${seconds}</h2>

    <button onclick='homeScreen()' id='homeButton'>HOME</button>

    <button onclick='resetGame()' id='resetButton'>PLAY AGAIN</button>
   
    `
    scoreBoardCon.innerHTML = ` <div id='scoreBoard'>
    <h2>High Scores</h2>

    <table>
    <tr>
    <th>USER</th><th>SCORE</th><th>DATE</th>
    </tr>

    <tr id='firstP'>
    <th id='inner'>${username}</th><th>${seconds}</th><th>${month}-${day}-${year}</th>
    </tr>
    <tr id='secondP'>
    <th>gomomiles</th><th>25</th><th>2/20/2000</th>
    </tr>
    <tr id='thirdP'>
    <th>gomomiles</th><th>25</th><th>2/20/2000</th>
    </tr>
    <tr id='fourthP'>
    <th>gomomiles</th><th>25</th><th>2/20/2000</th>
    </tr>
    <tr id='fifthP'>
    <th>gomomiles</th><th>25</th><th>2/20/2000</th>
    </tr>

    </table>
    
    
    
    
    </div>`
  endContainer.cssText = `height: 500px; width: 500px`;

  triangleGuy.remove()
  squareGuy.remove()
  audio.remove()
var audio5 = new Audio('gameOver.mp3');

  audio5.play();

}



const d = new Date();
let seconds = d.getMilliseconds();

function chooseGrinchFighter(timestamp) {


  //let newImg = document.createElement('img');
  //img.src =
  squareGuy.remove()

  choose.remove();

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  let rightPressed = false;
  let leftPressed = false;
  let upPressed = false;
  let downPressed = false;

  function keyDownHandler(event) {
    if (event.code === "ArrowRight") {
      rightPressed = true;
    } else if (event.code === "ArrowLeft") {
      leftPressed = true;
    }
    if (event.code === "ArrowDown") {
      downPressed = true;
    } else if (event.code === "ArrowUp") {
      upPressed = true;
    }
  }

  function keyUpHandler(event) {
    if (event.code === "ArrowRight") {
      rightPressed = true;
    } else if (event.code === "ArrowLeft") {
      leftPressed = true;
    }
    if (event.code === "ArrowDown") {
      downPressed = true;
    } else if (event.code === "ArrowUp") {
      upPressed = true;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (rightPressed) {
      playerX += 5;
    } else if (leftPressed) {
      playerX -= 5
    }

    if (downPressed) {
      playerY += 5;
    } else if (upPressed) {
      playerY -= 5
    }
    ctx.drawImage(triangleGuy, playerX, playerY);
    requestAnimationFrame(draw)

  }




  document.body.style.cssText = `cursor: default`;

  document.addEventListener("mousemove", a => {
    let x = a.clientX;
    let y = a.clientY;

    triangleGuy.classList.add("active");
    triangleGuy.style.cssText = `left: ${x}px; top: ${y}px`;
  });

    
   
     // Replace screenWidth with the actual width of your game screen
    

     window.newGuy = document.createElement('img');
newGuy.src ='rocket.gif'
newGuy.setAttribute('class', 'gameAntag')

document.body.appendChild(newGuy)

console.log('attemptedCreation')
window.start = undefined

window.elapsed = timestamp - start;

window.shift = Math.max(0.3 * elapsed, 0);
   

   

 

    ;

  let rocketParam = getRandomInteger(425);

  

 let element = document.querySelector(".gameAntag");
  window.start = undefined

  let counting = 100;

  function moveGameObjects(timestamp) {
   const elementTrack = element.getBoundingClientRect();

   
    let triTrack = triangleGuy.getBoundingClientRect();


    let overlap = !(
      elementTrack.right < triTrack.left ||
      elementTrack.left > triTrack.right ||
      elementTrack.bottom < triTrack.top ||
      elementTrack.top > triTrack.bottom
    );

    if (overlap === true) {
      var audio = new Audio('boom.mp3');

      audio.play();
      startButton.innerHTML = `HEALTH:${counting}`

      counting--;
      let scoreKeeper = document.createElement('div');
    }

    if (counting < 70) {
      img.remove()
    }
    if (counting < 35) {
      img2.remove()
    }

    if (counting < 0) {
      img3.remove()
      displayResetScreen()
      return;



    }
    console.log(counting);

    if (start === undefined) {
      start = timestamp;
    }
   window.elapsed = timestamp - start;

window.shift = Math.max(0.3 * elapsed, 0);

 




    element.style.cssText = `top: ${rocketParam}px`;
    element.style.transform += `translateX(${shift}px)`;


    if (shift < 1650) {
      requestAnimationFrame(moveGameObjects);

    }

    if (shift > 1650) {
     
    
      // Replace screenWidth with the actual width of your game screen
      rocketParam = getRandomInteger(425); // Randomize the vertical position
      start = undefined; // Reset the animation start time

      requestAnimationFrame(moveGameObjects);
      
 
  


    }
   
    }


  requestAnimationFrame(moveGameObjects);
}

setInterval(()=> {
  document.body.appendChild(newGuy)
  }, 1000) ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function resetGame() {
  document.body.style.cssText = `cursor: wait`; //initializing a loading screen for user experience
  endContainer.remove()

  loadGame()

  setTimeout(() => {
    chooseCharacter.append(triangleGuy)
    chooseCharacter.append(element)
    chooseCharacter.append(squareGuy)
    startButton.innerHTML = 'START';
    startButton.disabled = true
    startGame()
  }, 7000);
}

function homeScreen() {

  endContainer.remove()
  startButton.innerHTML = 'START';
  startButton.disabled = false

}






/*function addNewRocket() {


const newRocket = new Image(0,500);
newRocket.src = 'rocket.gif';
gameScreen.appendChild(newRocket);


// screenAdd.push(`<img src="rocket.gif" id='newRocket'></img>`)

       
 gameScreen.innerHTML += newRocket

  
/*
  let rocketParam2 = getRandomInteger(425);

  const element2 = document.getElementById("newRocket");


  let start2;

  let counting2 = 50;

    function moveGameObjects2(timestamp2) {
        
        const elementTrack2 = element2.getBoundingClientRect();
        let triTrack2 = triangleGuy.getBoundingClientRect();

        let overlap2 = !(
        elementTrack2.right < triTrack2.left ||
        elementTrack2.left > triTrack2.right ||
        elementTrack2.bottom < triTrack2.top ||
        elementTrack2.top > triTrack2.bottom
        );
        
       
        if (overlap2 === true) {
        
            let scoreKeeper2 = document.createElement('div');
            scoreKeeper2.innerHTML += `Score: ${counting2}`
            counting2--;
        }


        if(counting2 < 1){
            let loserScreen = document.createElement('div');
            loserScreen.innerHTML +=  alert(`Womp womp, you suck bro! Your score ${counting2} thats lowkey`)
            //incrementing to cot times ship is hit
        return;
        }
        console.log(counting2);

        if (start2 === undefined) {
        start2 = timestamp2;
        }
        const elapsed2 = timestamp2 - start2;

        const shift2 = Math.max(0.3 * elapsed2, 0);
        element2.style.cssText = `top: ${rocketParam2}px`;
        element2.style.transform += `translateX(${shift2}px)`;
        
        if (shift2 < 1650) {
        requestAnimationFrame(moveGameObjects2);
        requestAnimationFrame(moveGameObjects);

        }   

        if (shift2 > 1650) {
          
        // Replace screenWidth with the actual width of your game screen
        rocketParam2 = getRandomInteger(425); // Randomize the vertical position
        start2 = undefined; // Reset the animation start time
        
addNewRocket()  
        requestAnimationFrame(moveGameObjects2);
       

        }
              

    }

  requestAnimationFrame(moveGameObjects2);
  

}



*/


