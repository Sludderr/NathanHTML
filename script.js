const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const gravity = -0.01;



class Particle {
    constructor(x,y,size) {
        this.x = x;
        this.y = y;
        this.xv = 0;
        this.yv = 0;
        this.size = size;
        this.gravity = gravity;
    }
    drawupdate() {
        this.x += this.xv * tx;
        this.y += this.yv * tx;
        this.xv *= 0.9 ** (tx / 100);
        this.yv *= 0.9 ** (tx / 100);
        this.yv += gravity;
        ctx.moveTo(this.x, this.y);
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    }
}


function drawRect(){
    ctx.fillStyle = "red";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.rect(0, canvas.height-40, canvas.width, 20);
    ctx.closePath();
    ctx.fill();
}

drawRect();

const particles = [];
for (let i = 0; i < 50; ++i) {
    particles.push(new Particle(
        Math.random() * 1900,
        Math.random() * 100,
        5
    ));
}

let to = 0, tx;
function frame(tt) {
    tx = to - tt;
    to = tt;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawRect();
    ctx.fillStyle = "black";
    ctx.beginPath();
    particles.forEach(i => {
        i.drawupdate();
    });
    ctx.closePath();
    ctx.fill();
    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
