function preload(){}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    rect(20, 20, 640, 480, 20);
    image(video, 30, 50, 600, 450);
}

function take_snapshot(){
    save('picture.png');
}

