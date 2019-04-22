'use strict';

class Enemy  {
  constructor (canvas, x) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.height = 75;
  this.width = 75;
  this.direction = 1;
  this.speed = 2;
  this.x = x;
  this.y = 0 + this.height/2;
  this.img = document.getElementById('enemy');
  }
  
  draw (){
    this.ctx.drawImage(this.img, this.x - this.width/2, this.y - this.width/2, 100, 75);
  }

  update (gameSpeed){
    this.y = this.y + this.direction * (this.speed * gameSpeed);
  }
  
  checkHitByBullet (bullet){
    const collisionRigth = this.x + this.width/2 > bullet.x - bullet.size/2;
    const collisionLeft = this.x - this.width/2 < bullet.x + bullet.size/2;
    const collisionTop = this.y - this.height/2 < bullet.y + bullet.size/2;
    const collisionBottom = this.y + this.height/2 > bullet.y - bullet.size/2;
  
    return collisionRigth && collisionLeft && collisionTop && collisionBottom;
  }
  
}


