status="";
object=[];
function preload(){
img=loadImage("BedRoom.png");
}

function draw(){
image(img , 0 , 0 , 640 , 420);
for (var i = 0; i < object.length; i++) {
    document.getElementById("status").innerHTML = "Objects Detected";
    fill("red");
    stroke("red");
    noFill();
    label = object[i].label;
    percent = floor(object[i].confidence * 100);
    rect(object[i].x, object[i].y, object[i].width, object[i].height);
    text(label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
}
}

function setup(){
canvas=createCanvas(640 , 420);
canvas.center();
objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
document.getElementById("status").innerHTML="Detecting Objects";
}
function modelLoaded(){
    console.log("Model is Loaded");
    status=true;
    objectDetector.detect(img , gotResults);
}
function gotResults(error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results;
}
function back(){
    window.location="index.html";
}