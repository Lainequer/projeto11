 var menino, RunnerImg,edges;
 var rua, PathImg;
function preload(){
  //imagens pré-carregadas
  RunnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  PathImg = loadImage ("path.png");
  
}

function setup(){
  createCanvas(400,600);
  //crie sprite aqui
   menino = createSprite (200,200,10,10);
   menino.addAnimation ("boy",RunnerImg);
   edges = createEdgeSprites();
   rua = createSprite (200,200,10,10); 
   rua = addAnimation ("asfalto",PathImg);
   rua.velocityY = -5;
   menino.scale = 0.5;
   menino.x = 50;
   
    }

function draw() {
  background("0");

  if(rua.y>400){
   rua.x = rua.width/2 
  }
  menino.collide(rua);
  drawSprites();

}
