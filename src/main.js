'use strict';

function main () {

  const mainSection = document.querySelector('main');

  function buildDom (html) {
    mainSection.innerHTML = html;
    return mainSection
  }

  function buildSplashScreen () {
    const splashScreen = buildDom(`
    <section class="game-container">
      <div class="splash">
        <h1>SHOOT THE OBJECTS</h1>
        <button class="start-button">START GAME</button>
        <p>'< left arrow '  '> right arrow' 'space bar shoot'</p>  
      </div>
    </sectin>
      `);
    
    const startButton = document.querySelector('.start-button');

    startButton.addEventListener( 'click', buildGameScreen);
  
  }

  function buildGameScreen (){
    
    const gameScreen = buildDom(`
    <section class="game-container">
        <p class="points">SCORE 0</p>
        <p class="lives">3 &hearts;</p>
      <canvas></canvas>
    </section>  
    `);

    const gameContainerElement = document.querySelector('.game-container');
    const livesElemtn = document.querySelector('.lives')
    const pointsElement = document.querySelector('.points')
    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    const game = new Game(canvasElement);
    game.startLoop();
    game.soundTrack.play();
    game.soundTrack.loop=true;
    game.setGameOverCallBack(buildGameOverScreen);
    game.setUpdateMarkersCallback(updateMarkers);

    document.addEventListener('keydown', function(event){
      if (event.keyCode === 37) {
        game.player.move(-1);
      } else if (event.keyCode === 39) {
        game.player.move(1);
      }
    })

    document.addEventListener('keyup', function(event){
      if (event.keyCode === 37 || event.keyCode === 39) {
        game.player.move(0);
      }
  })

  addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
    console.log('SHOOT');
      game.shoot();
      game.shootFx.currentTime = 0;
      game.shootFx.play();
    }
  });



  function updateMarkers(lives, points) {
    livesElemtn.innerHTML = lives + ' &hearts;';
    pointsElement.innerHTML = 'SCORE ' + points;

  }
  


/*     const gameOverTest = document.querySelector('#game-over-test');
    gameOverTest.addEventListener('click', buildGameOverScreen); */
  }

  function buildGameOverScreen (score) {
    const gameOverScreen = buildDom(`
    <section class="game-container">
      <div class="over">
        <h1>game over</h1>
        <p>SCORE => ${score}</p>
        <button class="restart-button">play Again</button><br />
        <button class="splash-screen">initial Screen</button>
        
      </div>    
    </section>
    `);

    const restartButton = document.querySelector('.restart-button');
    const initialScreen = document.querySelector('.splash-screen');
    restartButton.addEventListener('click', buildGameScreen);
    initialScreen.addEventListener('click', buildSplashScreen);

  }


  buildSplashScreen();

}

window.addEventListener('load', main);