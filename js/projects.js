async function runProjects() {
  const path = '~/projects';
  await typeCmd('ls -la', path);
  mkGap();

  //await outLine(`  <span class="c-violet">// stay tuned</span>`, '', 0);
  //mkGap();
  
  await outLine(`  <span class="c-violet">▸ Porównanie modeli detekcji anomalii</span>`,'',0);
  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">  desc</span><span class="c-white">Anomaly Detection Showdown</span>`,'',30);
  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">  stack</span><span class="c-white">Python · Isolation Forest · Autoencoder</span>`,'',30);
  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">  status</span><span class="c-orange">○ Work in progress!</span>`,'',30);
  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">  link</span><a href="#" target="_blank" style="color:var(--blue);text-decoration:none">Coming Soon!</a>`,'',30);
  mkGap();

  //await outLine(`  <span class="c-violet">▸ Dashboard do detekcji anomalii</span>`,'',0);
  //await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">  desc</span><span class="c-white">Wizualizacji danych do detekcji anomalii</span>`,'',30);
  //await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">  stack</span><span class="c-white">Autoencoder · Tailwind CSS · TypeScript</span>`,'',30);
  //await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">  status</span><span style="color:#fb923c">● work in progress</span>`,'',30);
  //await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">  link</span><a href="#" target="_blank" style="color:var(--blue);text-decoration:none">Coming Soon!</a>`,'',30);
  //mkGap();

  idle(path);
}