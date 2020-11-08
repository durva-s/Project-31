const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup(){
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground();

  for(var k = 0; k <= width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2-15, 10, divisionHeight));
  }
  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 100))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,200))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,300))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,400))
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  if(frameCount % 30 === 0){
    particle = new Particle(random(width/2-70,width/2+70), 10,10);
    particles.push(particle);
  }

  ground.display();

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  for(var k = 0; k<divisions.length;k++){
    divisions[k].display();
 }
  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }

 ground.display();

  drawSprites();
}
