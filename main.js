function preload()  {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    square(1, 455, 25)
    square(615, 455, 25)
    square(1, 1, 25)
    square(615, 1, 25)
}



function take_snapshot(){
    save('sister_birthday.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}