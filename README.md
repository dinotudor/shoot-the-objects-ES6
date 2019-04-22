# Flying Objects

## Vertically scrolling shooter
Shoot the enemies that come in your direction and avoid collision.


## MVP (DOM - CANVAS)
Canvas. The player can move left and right and shoot enemies.

## Backlog

sound effects

enemies shoot back

add boss

Increasing levels


## Data structure
**game.js**

`Game ( ){` 

​	`this.canvas`

​	`this.ctx`

​	this.player

​	this.enemies

​	this.bullets

​	this.isGameOver

`}`

`Game.prototype.startGame ( ) {` 

`}`

`Game.prototype.update ( ) {` 

`}`

`Game.prototype.render ( ) {` 

}

`Game.prototype.checkCollision ( ) {` 

`}`

`Game.prototype.clearShotEnemy ( ) {` 

`}`

`Game.prototype.isGameOver ( ) {` 

`}`

**player.js**

`Player ( ){` 

​	`this.x`

​	`this.y`

​	`this.size`

​	`this.canvas`

​	`this.ctx`

​	`this.lives`

​	`this.direction`

​	`this.speed`

`}`

`Playe.prototype.render ( ) {` 

`}`

`Player.prototype.update ( ) {` 

`}`

`Player.prototype.move ( ) {` 

`}`

`Player.prototype.shoot ( ) {` 

`}`

`Player.prototype.hitEnemy ( ) {` 

`}`

`Player.prototype.collision ( ) {` 

`}`

`Player.prototype.checkLives ( ) {` 

`}`

`Player.prototype.removeLives ( ) {` 

`}`

`Player.prototype.score ( ) {` 

`}`



**enemy.js**

`Enemy ( ){` 

​	`this.x`

​	`this.y`

​	`this.size`

​	`this.canvas`

​	`this.ctx`

​	`this.direction`

​	`this.speed`

`}`

`Enemy.prototype.draw ( ) {` 

`}`

`Enemy.prototype.update ( ) {` 

`}`

`Enemy.prototype.remove ( ) {` 

`}`

`Enemy.prototype.checkIfHitWithBullet ( ) {` 

`}`

**bullets.js**

`Bullets ( ){` 

​	`this.x`

​	`this.y`

​	`this.size`

​	`this.canvas`

​	`this.ctx`

​	`this.speed`

​	`this.direction`

`}`

`Bullet.prototype.draw ( ) {` 

`}`

`Bullet.prototype.update ( ) {` 

`}`

`Bullet.prototype.removeIfHit ( ) {` 

`}`








## States and States Transitions
Definition of the different states and their transition (transition functions)

SplashScreen ( ) { }

 - Play( );
 - restart (if game over) ( );
 - Instructions - read only

GameScreen ( ) { }

- createNewGame( );
- Star ( );
- restart ( );

GameOverScreen ( ) { }

- endGame( );
- playAgain ( );


## Task - To do
Build main function 

- Build Splash Screen **=> main.js** 
  - start button
- Build Game Screen  **=> main.js**
- Build Game container  **=> main.js**
- Build Game Over Screen  **=> main.js**
  - restart button
- Make transitions  **=> main.js**

- Build Game constructor  **=> game.js**
  - Add properties (canvas, ctx, player, enemy, bullet, isGameOver)
- Build StartLoop  **=> game.js**
  - clear canvas
  - Update
  - draw
- Test loop

- Build Player constructor  **=> player.js**

  - add properties (x, y, size, canvas, ctx, lives, direction, speed)

- draw **=> player.js**

- update **=> player.js**

- move **=> player.js**

  

- Build Enemy constructor **=> enemy.js**

  - add properties (x, y, size, canvas, ctx, direction, speed)

- draw **=> enemy.js**

- update **=> enemy.js**

  

- Build Bullet constructor **=> bullets.js**
  - add properties (x, y, size, canvas, ctx, speed, direction)
- draw **=> bullets.js**
- update **=> bullets.js**



- Check collision  **=> game.js**
- Clear shot enemies  **=> game.js**
- is game over  **=> game.js**

- shoot **=> player.js**
- Collision detection **=> player.js**
- check lives **=> player.js**
- remove lives **=> player.js**
- remove **=> enemy.js**
- Remove if hit **=> bullets.js**
- hit enemy **=> player.js**
- check if hit with bullet **=> enemy.js**
- score **=> player.js**




## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy

<https://github.com/dinotudor/flying-objects>

[Link Deploy](http://github.com)


### Slides
http://slides.com)