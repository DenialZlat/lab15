window.addEventListener('load', () => {
    const canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        function drawSharpEye(color, radiusX, radiusY) {
            ctx.beginPath();
            ctx.moveTo(centerX - radiusX, centerY);
            ctx.quadraticCurveTo(centerX, centerY - radiusY, centerX + radiusX, centerY);
            ctx.quadraticCurveTo(centerX, centerY + radiusY, centerX - radiusX, centerY);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        }

        const yellowRGB = 'rgb(255, 200, 0)';
        drawSharpEye(yellowRGB, 65, 65);
        drawSharpEye('black', 55, 55);
        drawSharpEye(yellowRGB, 45, 45);
        drawSharpEye('black', 35, 35);

        ctx.beginPath();
        ctx.arc(centerX, centerY, 22.5, 0, Math.PI * 2);
        ctx.fillStyle = yellowRGB;
        ctx.fill();

        ctx.fillStyle = 'black';
        ctx.font = 'bold 38px Sans Serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('!', centerX, centerY);
    }
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
