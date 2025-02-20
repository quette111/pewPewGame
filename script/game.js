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

triangleGuy.hidden = true; //setting certain elements to not appear
squareGuy.hidden = true;
choose.hidden = true;
chooseCharacter.hidden = true;
hiddenDiv.hidden = true;

function startGame() {
  document.body.style.cssText = `cursor: wait`; //initializing a loading screen for user experience

  gameScreen.style.background = "transparent";

  head2.style.cssText = `color: rgba(255, 255, 255, 0.16);

box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
`;

  let intro = "W e l c o m e - t o - t y p eS h i t - theGame:-)"; //setting intro variable to a string

  for (let i = 0; i < intro.length; i++) {
    //passing string value to a for loop to iterate through and display one letter at a time
    setTimeout(function() {
      gameScreen.innerHTML += intro[i];
    }, 50 * (i + 1));
  }

  startButton.hidden = true; //after intro screen appears and goes thru loading process, clear displayed elements
  setTimeout(() => {
    gameScreen.innerHTML = "";
  }, 4000);
}

let screen =
  "Prepare for battle! Select your fighter and evade incoming enemy missiles. If you're hit three times, the enemy's attack will succeed.";

function loadGame() {
  let array = []; //using separate div items to continue loading screen, storing them in an array to iterate through, giving the appearance of a screen loading
  array.push("<div id='load'>");
  array.push("<div id='load'>");
  array.push("<div id='load'>");
  setTimeout(() => {
    //time for loop

    for (let i = 0; i < array.length; i++) {
      setTimeout(function() {
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
        setTimeout(function() {
          choose.innerHTML += screen[i];
        }, 50 * (i + 1)); //display pattern of variable screen
      }
      gameScreen.style.cssText = `animation: blinkBorder 2s infinite`; //resetting new UI loading up game
      choose.hidden = false;
      hide.style.display = "inline";
      loadContainer.hidden = true;
    }, 4000);
  }, 6000);
}






function getRandomInteger(max) {
  //creating function to create random number using the Math object
  return Math.floor(Math.random() * max);
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










function chooseGrinchFighter() {
//let newImg = document.createElement('img');
//img.src =

  squareGuy.remove();
  choose.remove();
  document.body.style.cssText = `cursor: default`;

  document.addEventListener("mousemove", a => {
    let x = a.clientX;
    let y = a.clientY;

    triangleGuy.classList.add("active");
    triangleGuy.style.cssText = `left: ${x}px; top: ${y}px`;
  });

  gameScreen.innerHTML = `<img src="rocket.gif" id="gameAntag"></img>` 

; 

  let rocketParam = getRandomInteger(425);

  const element = document.getElementById("gameAntag");


  let start;

  let counting = 50;

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
        
            let scoreKeeper = document.createElement('div');
            scoreKeeper.innerHTML += `Score: ${counting}`
            counting--;
        }


        if(counting < 1){
            let loserScreen = document.createElement('div');
            /*loserScreen.innerHTML += */ alert(`Womp womp, you suck bro! Your score ${counting} thats lowkey`)
            //incrementing to cot times ship is hit
        return;
        }
        console.log(counting);

        if (start === undefined) {
        start = timestamp;
        }
        const elapsed = timestamp - start;

        const shift = Math.max(0.3 * elapsed, 0);
        element.style.cssText = `top: ${rocketParam}px`;
        element.style.transform += `translateX(${shift}px)`;
        
        if (shift < 1650) {
        requestAnimationFrame(moveGameObjects);
        
        }   

        if (shift > 1650) {
          
        // Replace screenWidth with the actual width of your game screen
        rocketParam = getRandomInteger(425); // Randomize the vertical position
        start = undefined; // Reset the animation start time
        addNewRocket()

        requestAnimationFrame(moveGameObjects);
        }
                

    }

  requestAnimationFrame(moveGameObjects);
}




function addNewRocket() {


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
  
*/
}






