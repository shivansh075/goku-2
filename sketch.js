var gameState=0

var gokuStartingImg;
var playbuttonImg;

var wallpaper;
var playbutton;

var dragonballsGame ;
var fightGame;

var dragonballsGameImg ;
var fightGameImg ;

var gokukidCharecterImg , gokukidCharecter;
var kidgohanCharecterImg , kidgohanCharecter;
var kidvegetaCharecterImg , kidvegetaCharecter;
var krillinCharecterImg , krillinCharecter;
var piccoloCharecterImg , piccoloCharecter;
var tienCharecterImg , tienCharecter;
var trunksCharecterImg , trunksCharecter;
var yamchaCharecterImg , yamchaCharecter;
var chowsuCharecterImg , chowsuCharecter;
var bulmaCharecterImg , bulmaCharecter;
var cellform1CharecterImg , cellform1Charecter;
var friezaCharecterImg , friezaCharecter;
var charecterImg , fightgameImg , dragonballsgameImg;
var gameCharacter;
var gokuHappyImg , gokuHappy;

var dragonball1Img ,dragonball1;
var dragonball2Img ,dragonball2;
var dragonball3Img ,dragonball3;
var dragonball4Img ,dragonball4;
var dragonball5Img ,dragonball5;
var dragonball6Img ,dragonball6;
var dragonball7Img ,dragonball7;
var dbzbackgroundImg , dbzbackground;


function preload(){
  gokuStartingImg = loadImage("assets/gokustarting.jpg");
  charecterImg = loadImage("assets/charecter.png");
  dragonballsgameImg = loadImage("assets/dragonballs.png");

 /* playbuttonImg = loadImage("assets/playbutton.png");
  gokukidCharecterImg = loadImage("assets/gokukidCharecter.png");
  kidgohanCharecterImg = loadImage("assets/kidgohanCharecter.png");

  kidvegetaCharecterImg = loadImage("assets/kidvegetaCharecter.png");
  krillinCharecterImg = loadImage("assets/krillinCharecter.png");
  piccoloCharecterImg = loadImage("assets/piccoloCharecter.jpg");
  tienCharecterImg = loadImage("assets/tienCharecter.png");

  trunksCharecterImg = loadImage("assets/trunksCharecter.png");
  yamchaCharecterImg = loadImage("assets/yamchaCharecter.jpg");
  chowsuCharecterImg = loadImage("assets/chowsuCharecter.png");
  bulmaCharecterImg = loadImage("assets/bulmaCharecter.png");

  cellform1CharecterImg = loadImage("assets/cellform1Charecter.jpg");
  friezaCharecterImg = loadImage("assets/friezaform1Charecter.png");
  fightgameImg = loadImage("assets/gokuFight.jpg");*/

  /*gokuHappyImg = loadImage("assets/gokuHappy.png");
  dbzbackgroundImg = loadImage("assets/dbzbackground.jpg");
  dragonball1Img = loadImage("assets/dragonball1.png");

  dragonball2Img = loadImage("assets/dragonball2.png");
  dragonball3Img = loadImage("assets/dragonball3.png");
  dragonball4Img = loadImage("assets/dragonball4.png");
  dragonball5Img = loadImage("assets/dragonball5.png");

  dragonball6Img = loadImage("assets/dragonball6.png");
  dragonball7Img = loadImage("assets/dragonball7.png");*/

}



function setup() {
  createCanvas(windowWidth , windowHeight);

  wallpaper= createSprite(width/2 , height/2 , width , height);
  wallpaper.addImage(gokuStartingImg);
  wallpaper.scale= 0.3;

  dragonballsGame = createSprite(150,400,40,40);
  dragonballsGame.addImage(dragonballsgameImg);
  dragonballsGame.scale=0.5;
  dragonballsGame.visible=true;

  charecter = createSprite(1200,130,50,50);
  charecter.addImage(charecterImg);
  charecter.scale=0.5;

  /*gameCharacter = createSprite(width/2,height/2,50,50);
  gameCharacter.addImage(gokukidCharecterImg);
  gameCharacter.visible=false;*/

  /*playbutton= createSprite(width/2 -680 , height/2 +260 , 40,50);
  playbutton.addImage(playbuttonImg);
  playbutton.scale= 0.7;
  playbutton.visible=false;*/

  /*fightGame = createSprite(500,400,50,50);
  fightGame.addImage(fightgameImg);
  fightGame.scale=0.2;
  fightGame.visible=false;

  gokukidCharecter = createSprite(width/4,100,20,20);
  gokukidCharecter.addImage(gokukidCharecterImg);
  gokukidCharecter.visible=false;
  gokukidCharecter.scale=0.4;

  kidgohanCharecter = createSprite(width/4+100,100,20,20);
  kidgohanCharecter.addImage(kidgohanCharecterImg);
  kidgohanCharecter.visible=false;
  kidgohanCharecter.scale=0.4;

  kidvegetaCharecter = createSprite(width/4+1009,566,20,20);
  kidvegetaCharecter.addImage(kidvegetaCharecterImg);
  kidvegetaCharecter.visible=false;
  kidvegetaCharecter.scale=0.3;

  /*krillinCharecter = createSprite(width/4+650,207,20,20);
  krillinCharecter.addImage(krillinCharecterImg);
  krillinCharecter.visible=false;
  krillinCharecter.scale=0.4;

  piccoloCharecter = createSprite(width/4,450,20,20);
  piccoloCharecter.addImage(piccoloCharecterImg);
  piccoloCharecter.visible=false;
  piccoloCharecter.scale=0.5;

  tienCharecter = createSprite(width/4+950,200,20,15);
  tienCharecter.addImage(tienCharecterImg);
  tienCharecter.visible=false;
  tienCharecter.scale=0.4;

  trunksCharecter = createSprite(width/4+150,250,20,20);
  trunksCharecter.addImage(trunksCharecterImg);
  trunksCharecter.visible=false;
  trunksCharecter.scale=0.4;

  yamchaCharecter = createSprite(width/4+700,250,20,20);
  yamchaCharecter.addImage(yamchaCharecterImg);
  yamchaCharecter.visible=false;
  yamchaCharecter.scale=0.4;

  chowsuCharecter = createSprite(width/4,350,20,20);
  chowsuCharecter.addImage(chowsuCharecterImg);
  chowsuCharecter.visible=false;
  chowsuCharecter.scale=0.4;

  bulmaCharecter = createSprite(width/4+150,350,20,20);
  bulmaCharecter.addImage(bulmaCharecterImg);
  bulmaCharecter.visible=false;
  bulmaCharecter.scale=0.4;

  cellform1Charecter = createSprite(width/2+23,160,20,50);
  cellform1Charecter.addImage(cellform1CharecterImg);
  cellform1Charecter.visible=false;
  cellform1Charecter.scale=0.3;

  friezaCharecter = createSprite(110,200,20,20);
  friezaCharecter.addImage(friezaCharecterImg);
  friezaCharecter.visible=false;
  friezaCharecter.scale=0.7;*/

}

function draw() {
 background(0);
  /*if(gameState==0){

    if(mousePressedOver(charecter)){
      charecterChart();
    }

    if(mousePressedOver(dragonballsGame))
    {
          dragonballcollectionGame();
          DestroycharecterChart();

          
          gokuHappy = createSprite(100,300,30,30);
          gokuHappy.addImage(gokuHappyImg);
          gokuHappy.scale=0.5;

          if(keyDown(RIGHT_ARROW)){
          gokuHappy.x = gokuHappy.x + 10;
          }

          if(keyDown(LEFT_ARROW)){
          gokuHappy.x = gokuHappy.x - 10;
          }   
  
  
    }      

/* if(mousePressedOver(friezaCharecter)){
   gameCharacter.changeImage(friezaCharecterImg);
   
 }

 else if(mousePressedOver(cellform1Charecter)){
   gameCharacter.changeImage(cellform1CharecterImg);
  
 }*/

//}
  drawSprites();
}

function charecterChart(){

 background("blue");

  wallpaper.visible = false;
  charecter.visible= false;
  gokukidCharecter.visible=true;
  kidgohanCharecter.visible=true;
  kidvegetaCharecter.visible=true;


 /* krillinCharecter.visible=true;
  piccoloCharecter.visible=true;
  tienCharecter.visible=true;
  trunksCharecter.visible=true;
  yamchaCharecter.visible=true;
  chowsuCharecter.visible=true;
  bulmaCharecter.visible=true;
  cellform1Charecter.visible=true;
  friezaCharecter.visible=true;*/
}

/*function VisibleOnOff(){
  gokukidCharecter.visible=false;
  kidgohanCharecter.visible=false;
  kidvegetaCharecter.visible=false;

 /* krillinCharecter.visible=false;
  piccoloCharecter.visible=false;
  tienCharecter.visible=false;
  trunksCharecter.visible=false;
  yamchaCharecter.visible=false;
  chowsuCharecter.visible=false;
  bulmaCharecter.visible=false;
  cellform1Charecter.visible=false;
  friezaCharecter.visible=false;
  playbutton.visible=true;*/

  
//}

/*function DestroycharecterChart()
{

  // background("blue");
 
   wallpaper.visible = false;
   charecter.visible= false;
   gokukidCharecter.visible=false;
   kidgohanCharecter.visible=false;
   kidvegetaCharecter.visible=false;

   /*krillinCharecter.visible=false;
   piccoloCharecter.visible=false;
   tienCharecter.visible=false;
   trunksCharecter.visible=false;
   yamchaCharecter.visible=false;
   chowsuCharecter.visible=false;
   bulmaCharecter.visible=false;
   cellform1Charecter.visible=false;
   friezaCharecter.visible=false;*/
//}

/*function dragonballcollectionGame(){
  
dbzbackground = createSprite(1000,500,width*4,1400);
dbzbackground.addImage(dbzbackgroundImg);

}*/

 