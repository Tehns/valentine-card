const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.6; // Чтобы текст был сверху
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function drawHeart(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + size / 4);
    ctx.bezierCurveTo(x + size, y - size, x + size * 2, y + size, x, y + size * 2);
    ctx.bezierCurveTo(x - size * 2, y + size, x - size, y - size, x, y + size / 4);
    ctx.fill();
}

let i = 0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let size = 100 + Math.sin(i) * 10;  
    drawHeart(canvas.width / 2, canvas.height / 2, size, "red");
    i += 0.1;
    requestAnimationFrame(animate);
}

window.onload = animate;
