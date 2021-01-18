const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240, 790, 480, 20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50) {
    plinkos.push(new Plinko(j, 75, 10));
  }

  for (var j = 20; j <=width; j=j+50) {
    plinkos.push(new Plinko(j, 150, 10));
  }

  for (var j = 40; j <=width; j=j+50) {
    plinkos.push(new Plinko(j, 225, 10));
  }

  for (var j = 20; j <=width; j=j+50) {
    plinkos.push(new Plinko(j, 300, 10));
  }

}

function draw() {
  background(225);  

  Engine.update(engine);

  ground.display();

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display(); 
  }

  if (frameCount % 50 === 0) {
    var rand = Math.round(random(50, 400))
    particles.push(new Particle(rand, 10, 10));
    console.log(particles[0]);
  }

  for (var p = 0; p < particles.length; p++) {
    particles[p].display();
  }

  console.log(frameCount);

  drawSprites();
}