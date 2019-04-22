'use strict';

function Bullet(canvas, x) {
  this.speed = 10;
  this.direction = -1;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.size = 5;
  this.x = x;
  this.y = this.canvas.height-50;
}

Bullet.prototype.draw = function(){
  this.ctx.fillStyle = 'white';
  this.ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
}

Bullet.prototype.update = function(){
  this.y = this.y + this.direction * this.speed
}