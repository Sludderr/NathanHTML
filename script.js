const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = 10;
let positionX = 500;
let positionY = 100;
let velocityX = 0;
let velocityY = 0;

function drawCircle(){
    ctx.fillStyle = "black";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

function drawRect(){
    ctx.fillStyle = "red";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.rect(0, canvas.height-40, canvas.width, 20);
    ctx.closePath();
    ctx.fill();
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    velocityY += 0.1633;
    if (positionY >= canvas.height-45){
        velocityY = 0
    }
    positionX += velocityX;
    positionY += velocityY;
    drawCircle();
    drawRect();
    requestAnimationFrame(animate);
}
animate();
