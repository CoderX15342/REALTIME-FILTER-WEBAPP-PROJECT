var noseX = 0;
var noseY = 0;

function preload(){
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
};
function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
};
function draw(){
    image(video, 0, 0, 300, 300);
    //circle(noseX, noseY, 20);
    //fill("#d20100");
    //stroke("#d20100");
    image(moustache, noseX, noseY, 30, 30);
};
function take_Snapshot(){
    save('myImage.png');
};
function modelLoaded(){
    console.log("PoseNet is initialized");
    
};
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    };
};
