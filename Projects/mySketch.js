
let foods = [];


function setup() {
  createCanvas(400, 400);
  
  for(let i = 0; i < 100; i++){
    foods.push(new Food())
  }
}

function draw() {
  background(220);
  for(let i = 0; i < 100; i++){
    foods[i].display()
    foods[i].move()
    foods[i].hit()
  }
}


class Food{
  
  constructor(){
    this.x = random(0 + 10,width);
    this.y = random(0 + 10, height);
    this.c = color(random(255),random(255),random(255));
    this.s = random(10,15);
  }

  display(){
    fill(this.c);
    ellipse(this.x,this.y,this.s);
  }

  move(){
      this.x = this.x + random(-1,1);
      this.y = this.y + random(-1,1);
    
    
  }

  hit(){
    if (dist(this.x,this.y,mouseX, mouseY) <= this.s/2 && mouseIsPressed){
      this.x = -100000000000000
    }
  }
}