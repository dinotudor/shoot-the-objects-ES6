'use strict';

class Bullet {
  constructor (canvas, x) {
    this.speed = 10;
    this.direction = -1;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.size = 5;
    this.x = x;
    this.y = this.canvas.height-50;
  }

  draw (){
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
  }

  update (){
    this.y = this.y + this.direction * this.speed
  }

}

