
var r = 0;
var g = 50;
var b=255;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
  

}


function draw(){
  background(r,g,b);

  if(mouseX<400){
    r=r+20;
  }
  if(mouseX<200){
    g=g+20;
  }
  if(mouseX<800){
    b=b-20;
  }
  if(mouseX<=235){
    r=60;
  }
  if(mouseX<=768){
    g=235;
  }
  if(mouseX<=650){
    b=210;
  }

  let m =map(mouseX,0,width,0,width);
  fill(255);
ellipse(m,mouseY,40);
 




  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}