'use strict';

class Player {
  constructor (canvas) {
  this.lives = 3;
  this.canvas = canvas;
  this.height = 75;
  this.width = 100;
  this.x = this.canvas.width/2;
  this.y = this.canvas.height-50;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 8;
  this.direction = 0;
  this.img = document.getElementById('hero');
  } 

  draw () {
    this.ctx.drawImage(this.img, this.x - this.width/2, this.y-this.height/2, this.width, this.height);
  }

  update () {  
    this.x = this.x + this.direction * this.speed;
  }
  
  move (newDirection) {
    if (!this.checkLimits(newDirection)) {
      this.direction = newDirection;
    }
  }
  setLives (){
    this.lives --;
  }

  checkCollisionWithEnemy (enemy){
    const collisionRigth = this.x + this.width/2 > enemy.x - enemy.width/2;
    const collisionLeft = this.x - this.width/2 < enemy.x + enemy.width/2;
    const collisionTop = this.y - this.height/2 < enemy.y + enemy.height/2;
    const collisionBottom = this.y + this.height/2 > enemy.y - enemy.height/2;
  
    return collisionRigth && collisionLeft && collisionTop && collisionBottom;
  }

  checkLimits (direction){
    return (this.x - this.width/2 < 0 && direction === -1|| this.x + this.width/2 > this.canvas.width && direction === 1)
  }

}






