async function runProjects() {
  const path = '~/projects';
  await typeCmd('ls -la', path);
  mkGap();
  await outLine(`  <span class="c-violet">// stay tuned</span>`, '', 0);
  mkGap();
  
  idle(path);
}