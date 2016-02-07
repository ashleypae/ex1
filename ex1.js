console.log("hello world from js");


var d=50;
var R;
var G;
var B;


function setup(){
	var myCanvas=createCanvas(800,250);
	//link to id mySketch from header tag
	myCanvas.parent('mySketch');
}


function draw(){
noStroke();
R= random(28, 238, 255);
G= random(230, 246, 250);
B=random(183, 255, 253);
fill(R, G, B);
ellipse(mouseX, mouseY, d, d);
}


function mouseOver(){
ellipse(mouseX, mouseY, d, d);

}