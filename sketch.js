function preload() {
Wall=loadImage("images/wall.png");
Way=loadImage("images/way.jpg");
Boy=loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png");
}
function setup() {
  createCanvas(1200,500);
  Element1=createElement('h4','HAUNTED MANSION');
  Element1.position(300,10);
  Element1.style('font-size','80px');
  
  Button1=createButton('PLAY');
  Button1.position(600,300);
  Button1.style('width','100px');
  Button1.style('height','35px');
  Button1.style('font-size','20px');
  Button1.style('font-family','cursive');
  Button1.style('fontColor','blue');
  Button1.mousePressed(()=>{
   Button1.hide();
   Element1.hide();
   Button2.hide();
    wall=createSprite(600,230,20,20);
    wall.addImage(Wall);
    wall.scale=0.5;  
   way=createSprite(600,500,20,20);
   way.addImage(Way);
   way.scale=3.3;
  });
  Button2=createButton('CONTROLS');
  Button2.position(600,400);
  Button2.style('width','150px');
  Button2.style('height','35px');
  Button2.style('font-size','20px');
  Button2.style('font-family','cursive');
  Button2.mousePressed(()=>{
   
  });
}

function draw() {
  background(205,245,125);  
  drawSprites();
}