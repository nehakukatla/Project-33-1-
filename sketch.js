var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var particle;
var score =0;
var count = 0;
var gameState = "start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {
    
       plinkos.push(new Plinko(j,375));
    }
}
 function draw() {
  background("black");
  textSize(20)
  text("Score:"+score,20,40);
  fill ("white");
  text("200",25,525);
  text("200",105,525);
  text("200",185,525);
  text("200",265,525);
  text("100",345,525);
  text("100",425,525);
  text("500",505,525);
  text("500",585,525);
  text("500",665,525);
  text("500",745,525);
  Engine.update(engine);
  ground.display();
  
  if (gameState === "end"){
    textSize(100);
    text("Game Over",150,250);
  }
for (var i = 0; i < plinkos.length; i++) { 
     plinkos[i].display();
   }
if (particle!=null){
  particle.display();
if(particle.body.postion.y>760){
  if (particles.position.x<320) {
      score= score+200;      
      particle=null;
      if ( count>= 5) gameState ="end";                          
  }
  else if (particles.position.x<480 && particles.position.x>320) {
        score = score + 100;
        particle=null;
        if ( count>= 5) gameState ="end";

  }
  else if (particles.position.x>480){
        score = score + 500;
        particle=null;
        if ( count>= 5)  gameState ="end";

  }      
}
}
for (var k = 0; k < divisions.length; k++) {
     
  divisions[k].display();
}
}
function mousePressed(){
  if(gameState!=="end"){
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}