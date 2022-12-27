const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var gravity = -0.01;
var friction = 0.995;
var bounce = 0.65;
var wind = 0;

var gravslider = document.getElementById("gravityrange");
var fricslider = document.getElementById("frictionrange");
var bounceslider = document.getElementById("bouncerange");
var windslider = document.getElementById("windrange");

class Particle {
    constructor(x,y,size,xv) {
        this.x = x;
        this.y = y;
        this.xv = xv;
        this.yv = 0;
        this.size = size;
        this.gravity = gravity;
        this.friction = friction;
        this.wind = wind;
    }
    drawupdate() {
        this.gravity = gravity;
        this.friction = friction;
        this.wind = wind;
        if (this.y >= canvas.height-45){
            this.yv *= -bounce
        }
        if (this.x >= canvas.width-45){
            this.xv *= -bounce
        }
        if (this.x <= 45){
            this.xv *= -bounce
        }
        this.x += this.xv * tx;
        this.y += this.yv * tx;
        this.xv += this.wind;
        this.yv += this.gravity;
        this.xv *= this.friction
        this.yv *= this.friction
        ctx.moveTo(this.x, this.y);
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    }
}

gravslider.oninput = function() {
    gravity = (this.value * -0.01);
}

fricslider.oninput = function() {
    if (this.value == 9){
        friction = 0.995;
    }
    else{
        friction = (this.value * 0.1);
    }
}

bounceslider.oninput = function() {
    bounce = (this.value * 5)/100;
}

windslider.oninput = function() {
    wind = (this.value-50)*-0.001;
}


function drawRect(){
    ctx.fillStyle = "red";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.rect(0, canvas.height-40, canvas.width, 20);
    ctx.closePath();
    ctx.fill();
}


function reset(){
    particles = [];
    for (let i = 0; i < document.getElementById("particletot").value; ++i) {
        if (i<Math.floor(document.getElementById("particletot").value/2)){
            particles.push(new Particle(
                Math.random() * 1900,
                Math.random() * 100,
                5,
                Math.random()
            ));
        }
        else{
            particles.push(new Particle(
                Math.random() * 1900,
                Math.random() * 100,
                5,
                Math.random()*-1
            ));
        }  
    }
    return particles;
}


drawRect();

var particles = [];
reset();

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
