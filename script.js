const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = 0;

function animate(){
    size ++;
    ctx.fillStyle = "black";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(100, 100, size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    requestAnimationFrame(animate);
}
animate();