'use strict';

class Game  {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player = null;
    this.enemies = [];
    this.bullets = [];
    this.bullet = null;
    this.isGameOver = false;
    this.score = 0;
    this.updateMarkers = null;
    this.hitEnemyFx = new Audio('sound/xplode.wav');
    this.looseLifeFx = new Audio('sound/life3.wav');
    this.shootFx = new Audio('sound/shot.wav');
    this.looseFx = new Audio('sound/loose.wav');
    this.soundTrack = new Audio('sound/soundTrack.mp3');
    this.level = 1;
    this.gameSpeed = 1;

  }
    startLoop () {
   
      this.player = new Player(this.canvas);
  
      
      const loop = () => {
  
        if(Math.random() > 0.98){
          const randomNumber = (Math.random() * this.canvas.width - 15) + 15;
          this.enemies.push(new Enemy(this.canvas, randomNumber))
        }
  
        this.clearCanvas();
        this.updateCanvas();
        this.drawCanvas();
        this.checkCollisions();
  
        if (this.isGameOver === false) {
          window.requestAnimationFrame(loop)
        }
      } 
  
      window.requestAnimationFrame(loop)
  }

  shoot (){
    this.bullets.push(new Bullet (this.canvas, this.player.x));
  }

  clearCanvas (){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  }

  updateCanvas () {
    let gameSpeed = this.gameSpeed;
  
    this.player.update();
    this.enemies.forEach(function(enemy){
      enemy.update(gameSpeed);
    });
    this.bullets.forEach(function(bullet) {
      bullet.update();
    });
  }

  drawCanvas () {
    this.player.draw();
    this.enemies.forEach(function(enemy){
      enemy.draw();
    });
    this.bullets.forEach(function(bullet){
      bullet.draw();
    });
  }
  
  clearEnemy (enemy){
      return (enemy.y + enemy.height) > this.canvas.height;
  }
  
  clearShots (bullet){
      return (bullet.y - bullet.size) < 0; 
  }

  updateLevel () {
    if (this.score % 600 === 0) {
      this.level++;
      this.gameSpeed += 0.3;
      
    }
  }
  
  checkCollisions (){
    this.enemies.forEach((enemy, enemyIndex) => {
      const isColliding = this.player.checkCollisionWithEnemy(enemy);
      const isOutOfScreen = this.clearEnemy(enemy);
      
      
      if (isColliding) {
        this.enemies.splice(enemyIndex,1);
        this.looseLifeFx.play();
        this.player.setLives();
        this.updateMarkers(this.player.lives, this.score);
        if (this.player.lives === 0){
          this.isGameOver = true;
          this.looseFx.play();
          this.soundTrack.pause();
          this.soundTrack.currentTime=0;
          this.buildGameOverScreen(this.score);
          this.updateMarkers(this.score);
        }
  
      }
  
      if (isOutOfScreen) {
        let removed = this.enemies.splice(enemyIndex,1);      
  
      }
      this.bullets.forEach((bullet, bulletIndex) => {
        const isHitEnemy = enemy.checkHitByBullet(bullet);
        if (isHitEnemy) {
          this.hitEnemyFx.currentTime=0;
          this.hitEnemyFx.play();
          this.enemies.splice(enemyIndex,1);
          this.bullets.splice(bulletIndex,1);
          this.score += 100;
          this.updateLevel();
          this.updateMarkers(this.player.lives, this.score);
        
        }
      });
  
    })
  
    this.bullets.forEach( (bullet, index) => {
      const isOutOfScreen = this.clearShots(bullet);
      if (isOutOfScreen) {
        this.bullets.splice(index, 1);
        
      }
    });
    if(this.player.checkLimits(this.player.direction)) {
      this.player.direction = 0;
    }
      
    
  }
  
  setGameOverCallBack (buildGameOverScreen) {
    this.buildGameOverScreen = buildGameOverScreen;
  }
  
  setUpdateMarkersCallback(callback) {
    this.updateMarkers = callback;
  }
  
}

















