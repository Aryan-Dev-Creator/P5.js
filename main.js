function preload()
{
    
}

function setup()
{
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video= createCapture(VIDEO);
    video.hide();

    tint_color= "";
}


function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function Take_Snapshot()
{
    save('Student_Name.png');
}

function Apply_Filter()
{
    tint_color= document.getElementById("colour_name").value;
}