status="";
input_text="";

function setup(){
canvas = createCanvas(300,290);
canvas.position(480,250);
video = createCapture(VIDEO);
video.size(300,290);
video.hide();
}

function start(){
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "status : detecting objects";
input_text = document.getElementById("input_id").value;
}

function modelLoaded(){
console.log("model_loaded")
status=true;
}

function draw(){
image(video,0,0,300,290);
}