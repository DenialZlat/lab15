window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  const canvas = document.getElementById('myCanvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    const cx = canvas.width / 2, cy = canvas.height / 2;
    const drawEye = (color, rx, ry) => {
      ctx.beginPath();
      ctx.moveTo(cx - rx, cy);
      ctx.quadraticCurveTo(cx, cy - ry, cx + rx, cy);
      ctx.quadraticCurveTo(cx, cy + ry, cx - rx, cy);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };
    const yellow = 'rgb(255, 200, 0)';
    drawEye(yellow, 65, 65);
    drawEye('black', 55, 55);
    drawEye(yellow, 45, 45);
    drawEye('black', 35, 35);
    ctx.beginPath();
    ctx.arc(cx, cy, 22.5, 0, Math.PI * 2);
    ctx.fillStyle = yellow;
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.font = 'bold 38px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('!', cx, cy);
  }
});
