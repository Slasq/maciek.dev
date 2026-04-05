async function runHome() {
  await typeCmd('whoami --verbose');
  mkGap();
  await ascii([
    ' ███╗   ███╗ █████╗  ██████╗██╗███████╗██╗  ██╗',
    ' ████╗ ████║██╔══██╗██╔════╝██║██╔════╝██║ ██╔╝',
    ' ██╔████╔██║███████║██║     ██║█████╗  █████╔╝ ',
    ' ██║╚██╔╝██║██╔══██║██║     ██║██╔══╝  ██╔═██╗ ',
    ' ██║ ╚═╝ ██║██║  ██║╚██████╗██║███████╗██║  ██╗',
    ' ╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝╚══════╝╚═╝  ╚═╝',
  ]);
  mkGap();
  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">name</span><span class="c-white">Maciej Gilecki</span>`, '', 0);
  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">role</span><span class="c-white">Data Engineer</span>`, '', 40);
  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">focus</span><span class="c-white">Data Analysis · Anomaly Detection · Cybersecurity</span>`, '', 40);
  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">location</span><span class="c-white">Rzeszów, PL 🇵🇱</span>`, '', 40);
  await outLine(`  <span class="c-dim" style="display:inline-block;min-width:90px">status</span><span class="c-green">● Part of Prz Racing team</span>`, '', 40);
  mkGap();

  await typeCmd('cat about.txt');
  mkGap();
  await outLine(`  <span class="c-violet">Head of Frontend Dev @ PRz Racing</span>`, '', 0);
  await outLine(`  <span class="c-white">Student inżynierii i analizy danych — Politechnika Rzeszowska, rok 3.</span>`, '', 50);
  await outLine(`  <span class="c-dim">Student za dnia, frontend dev w garażu wyścigowym</span>`, '', 50);
  await outLine(`  <span class="c-dim">Piszę kod, projektuję systemy, ścigam się z deadlinami.</span>`, '', 50);
  await outLine(`  <span class="c-white">Równolegle: nowoczesny frontend (Next.js + Tailwind).</span>`, '', 50);
  mkGap();

  await typeCmd('ls ./skills/');
  mkGap();
  await tags(['Python', 'scikit-learn', 'Faker', 'Drain3', 'Linux Internals', 'PostgreSQL', 'Docker', 'Pandas', 'Wireshark']);
  mkGap();

  await typeCmd('cat contact.json');
  mkGap();

  await outLine(`  <span class="c-muted">{</span>`, '', 0);
  
  //await linkRow('  ⌂ ', '&quot;terefere&quot;',    'https://terefere/Slasq', 'terefere/Slasq');
  //await wait(60);
  await wait(60);
  await linkRow('  ⌥ ', '&quot;github&quot;',    'https://github.com/Slasq', 'github.com/Slasq');
  await wait(60);
  await linkRow('  ⊞ ', '&quot;linkedin&quot;',  'https://www.linkedin.com/in/maciek-gilecki-b968a1331', 'linkedin.com/in/maciek-gilecki');
  await wait(60);
  await linkRow('  ✉ ', '&quot;email&quot;',     'mailto:maciekgilecki@gmail.com', 'maciekgilecki@gmail.com');
  await outLine(`  <span class="c-muted">}</span>`, '', 0);
  mkGap();
  idle();
}
