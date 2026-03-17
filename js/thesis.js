async function runThesis() {
  const path = '~/thesis';
  await typeCmd('cat README.md', path);
  mkGap();

  await outLine(`  <span class="c-violet">Tytuł:</span>`, '', 0);
  await outLine(`  <span class="c-white">  "Metody i środki automatycznej generacji danych</span>`, '', 30);
  await outLine(`  <span class="c-white">   używanych w procesie trenowania modeli wykrywania anomalii"</span>`, '', 30);
  mkGap();

  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:110px">  uczelnia</span><span class="c-white">Politechnika Rzeszowska</span>`, '', 0);
  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:110px">  kierunek</span><span class="c-white">Inżynieria i Analiza Danych</span>`, '', 30);
  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:110px">  promotor</span><span class="c-white">Dr inż. Marek Bolanowski</span>`, '', 30);
  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:110px">  status</span><span style="color:#fb923c">○ w trakcie</span>`, '', 30);
  mkGap();

  await typeCmd('cat stack.txt', path);
  mkGap();
  await tags(['Python', 'Faker', 'Drain3', 'scikit-learn', 'Isolation Forest', 'Autoencoder', 'HDFS', 'LANL', 'BGL']);
  mkGap();

  await typeCmd('cat progress.log', path);
  mkGap();
  await outLine(`  <span class="c-green">✓</span>  <span class="c-dim">Faza 1 —</span> <span class="c-white">Analiza literatury i dobór datasetu</span>`, '', 0);
  await outLine(`  <span class="c-dim">○</span>  <span class="c-dim">Faza 2 —</span> <span class="c-white">Generacja logów syntetycznych (Faker)</span>`, '', 40);
  await outLine(`  <span class="c-dim">○</span>  <span class="c-dim">Faza 3 —</span> <span class="c-white">Parsowanie i normalizacja (Drain3)</span>`, '', 40);
  await outLine(`  <span class="c-dim">○</span>  <span class="c-dim">Faza 4 —</span> <span class="c-white">Trenowanie modeli anomaly detection</span>`, '', 40);
  await outLine(`  <span class="c-dim">○</span>  <span class="c-dim">Faza 5 —</span> <span class="c-white">Ewaluacja i testy</span>`, '', 40);
  await outLine(`  <span class="c-dim">○</span>  <span class="c-dim">Faza 6 —</span> <span class="c-white">Dokumentacja i redakcja</span>`, '', 40);
  mkGap();

  idle(path);
}
