
//create an empty array called balls

let balls = [];
// let pig = (random);
// let blue = (random);
// for (let random = 20, random < 300; random++);

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(random(0,width), random(0,height),random(0,255),random(0,255),random(0,255));
  balls.push(b);
  console.log(balls);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,red,green,blue){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.red=red;
        this.green=green;
        this.blue=blue;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.red,this.green,this.blue);
		    ellipse(this.x,this.y,10,10);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}


}
