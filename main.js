noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 120);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw()
{
    background('#969A97');
    fill("blue");
    stroke("white");
    text("max chacon", 100, 200);
    textSize(difference);
    //square(noseX, noseY, difference);
}
function modelLoaded()
{
    console.log("poseNet is initialized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX = "+noseX+"  NoseY = "+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftwristX  =  "+leftWristX+"  rightwristX  =  "+rightWristX+"  difference  =  "+difference);
    }
}