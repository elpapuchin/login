const canvas = document.getElementById('snow-canvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

// Generamos copos de nieve
const snowflakes = [];
for (let i = 0; i < 150; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    speed: Math.random() * 1 + 0.5
  });
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const flake of snowflakes) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(100,100,100,0.8)';
    ctx.globalAlpha = 0.8;
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function updateSnowflakes() {
  for (const flake of snowflakes) {
    flake.y += flake.speed;
    if (flake.y > canvas.height) {
      flake.y = -flake.radius;
      flake.x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  drawSnowflakes();
  updateSnowflakes();
  requestAnimationFrame(animate);
}
animate();

