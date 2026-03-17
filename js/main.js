const sbTime = document.getElementById('sb-time');
function updateClock() {
  sbTime.textContent = new Date().toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
}
updateClock();
setInterval(updateClock, 1000);

let activeTab = 'home';

function switchTab(tab) {
  if (tab === activeTab) return;
  activeTab = tab;
  runToken++;
  removeCursor();
  term.innerHTML = '';

  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });

  const labels = {
    home:     'maciek@dev — zsh',
    projects: 'maciek@dev — ~/projects',
    thesis:   'maciek@dev — ~/thesis'
  };
  document.querySelector('.titlebar-label').textContent = labels[tab] || 'maciek@dev — zsh';

  if (tab === 'home')     runHome();
  if (tab === 'projects') runProjects();
  if (tab === 'thesis')   runThesis();
}

document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => switchTab(t.dataset.tab));
});

/* ── Boot ── */
wait(3000).then(() => runHome());
