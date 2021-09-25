const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour1;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    hour1 = hour%12

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);
    

    fill("black");
    textSize(30);

    //need help on this ,i cant make it work.
    if(hour1){
        text("Time : "+ hour1 + " PM", 50,100);
    }else if(hour1==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour1 + " AM", 50,100);
    }
    //text( hour,50,100)
   

    
    
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Europe/London")
    

 
    //change the data in JSON format and store it in variable responseJSON
    
    var responseJSON = await response.json();
    
    //fetch datetime from responseJSON
    
    var datetime = responseJSON.datetime
    
    // slice the datetime to extract hour
    
    var hour = datetime.slice(11,13)
    console.log(hour)


    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
   
   
    

    
    backgroundImg = loadImage(bg);
}
