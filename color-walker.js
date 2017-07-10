var walkers = [];
var total = 100;

var windo = windowWidth * .72;




function setup(){
 var cvn = createCanvas(windowWidth * .70,windowHeight);
   
   
  cvn.parent("sketch-holder");
  
  for(var i = 0;i<total;i++){ 
    walkers.push(new Walker());
    walkers[i].selectColor();
  }
  background(255);
}

function windowResized(){
  //when the window is resized i need to redo all the starting points
   cvn = resizeCanvas(width,height);
 
  for(var i = 0;i<total;i++){ 
    walkers.push(new Walker());
    walkers[i].selectColor();
    walkers.pop();
    console.log(walkers[i].x);
  }

  
  
 
  
  resizeCanvas(windowWidth * .7,windowHeight);
}



function draw(){
  frameRate(30);
  for(var i = 0;i<walkers.length;i++){
  walkers[i].render();
  walkers[i].step();
}
}

function Walker(){
  var c1;
  var c2 ;
  var distance = 10; 

  this.x = (floor(random(windowWidth)/distance))*distance;
 
  this.y = (floor(random(windowHeight)/distance))*distance;
  
  
  this.selectColor = function(){
    
    
    
    var set0 = color(255,0,255, .33*255);
    var set1 = color(255,0,0, .33*255);
    var set2 = color(0,255,0, .33*255);
    var set3 = color(0,0,255, .33*255);
    var set4 = color(255,255,0,  .33*255);
    var set5 = color(0,255,255,  .33*255);
    var set6 = color(255,255,255,.33*255);
    var selector = floor(random(7));
    
    switch(selector){
      case 0:
       c1 = set0;
        break;
      case 1:
         c1 = set1;
        break;
      case 2:
         c1 = set2;
        break;
      case 3:
         c1 = set3;
        break;
      case 4:
         c1 = set4;
        break;
      case 5:
         c1 = set5;
        break;
      case 6:
         c1 = set6;
        break;
    }
    
    var selector2 = floor(random(7));
    
    switch(selector2){
      case 0:
       c2 = set0;
        break;
      case 1:
         c2 = set1;
        break;
      case 2:
         c2= set2;
        break;
      case 3:
         c2 = set3;
        break;
      case 4:
         c2 = set4;
        break;
      case 5:
         c2 = set5;
        break;
      case 6:
         c2 = set6;
        break;
    }
  
      
  };
  this.render = function(){
    
    
   noStroke();
   c1 = lerpColor(c1,c2,.33);
  fill(c1);
    ellipse(this.x,this.y,distance,distance);
  };
  this.step = function(){
    
   
   var choice = floor(random(4));
   if(choice === 0){
     this.x+=distance;
   }
   else if(choice == 1){
     this.x-=distance;
   }
   else if(choice == 2){
     this.y+=distance;
   }
    else{
     this.y-=distance;
   }
   this.x = constrain(this.x,0,windowWidth);
   this.y = constrain(this.y,0,windowHeight);
   
    
  };
}



