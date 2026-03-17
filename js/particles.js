const cvs = document.getElementById('particles');
const ctx = cvs.getContext('2d');
let W, H, pts = [];

function resize() {
  W = cvs.width  = innerWidth;
  H = cvs.height = innerHeight;
}
resize();
addEventListener('resize', resize);

for (let i = 0; i < 55; i++) {
  pts.push({
    x:  Math.random() * innerWidth,
    y:  Math.random() * innerHeight,
    vx: (Math.random() - .5) * .3,
    vy: (Math.random() - .5) * .3,
    r:  Math.random() * 1.5 + .5,
    a:  Math.random()
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, W, H);

  pts.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(167,139,250,${p.a * .4})`;
    ctx.fill();
  });

  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < 120) {
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
        ctx.strokeStyle = `rgba(124,58,237,${(1 - d / 120) * .12})`;
        ctx.lineWidth   = .5;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawParticles);
}

drawParticles();
