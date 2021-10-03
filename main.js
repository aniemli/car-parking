var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var car_x = 25;
var car_y = 320;
var car_width = 80;
var car_height = 170;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = "parkingLot.jpg";
    
    car_imgTag = new Image();
    car_imgTag.onload = uploadcar();
    car_imgTag.src = "car2.png";
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
        if(keyPressed == '38')
        {
            up();
        }
        if(keyPressed == '40')
        {
            down();
        }
        if(keyPressed == '37')
        {
            left();
        }
        if(keyPressed == '39')
        {
            right();
        }
}

function up() 
{
    if (car_y >= 0) 
    {
        car_y -= 10;
        uploadBackground();
        uploadcar();
    }
}

function down() 
{
    if (car_y <= 500) 
    {
        car_y += 10;
        uploadBackground();
        uploadcar();
    }
}

function left() 
{
    if (car_x >= 0) 
    {
        car_x -= 10;
        uploadBackground();
        uploadcar();
    }
}

function right() 
{
    if (car_x <= 700) 
    {
        car_x += 10;
        uploadBackground();
        uploadcar();
    }
}