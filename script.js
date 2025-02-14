<html>
<body>
    <canvas id="canvas"></canvas>
    <script>
        const c = document.getElementById("canvas");
        const ctx = c.getContext("2d");
        c.width = window.innerWidth;
        c.height = window.innerHeight;

        function drawHeart(x, y, size, color) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.bezierCurveTo(x + size, y - size, x + size * 2, y + size, x, y + size * 2);
            ctx.bezierCurveTo(x - size * 2, y + size, x - size, y - size, x, y);
            ctx.fill();
        }

        let i = 0;
        function animate() {
            ctx.clearRect(0, 0, c.width, c.height);
            drawHeart(c.width / 2, c.height / 2, 50 + Math.sin(i) * 10, "red");
            i += 0.1;
            requestAnimationFrame(animate);
        }
        animate();
    </script>
</body>
</html>
