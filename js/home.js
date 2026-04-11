async function runHome() {
  // Symulacja sprawdzania połączenia
  await typeCmd('ping -c 3 maciek.dev');
  mkGap();
  await outLine(`  <span class="c-dim">PING maciek.dev (127.0.0.1) 56(84) bytes of data.</span>`, '', 0);
  await outLine(`  <span class="c-red">From 127.0.0.1 icmp_seq=1 Destination Host Unreachable</span>`, '', 600);
  await outLine(`  <span class="c-red">From 127.0.0.1 icmp_seq=2 Destination Host Unreachable</span>`, '', 600);
  await outLine(`  <span class="c-red">From 127.0.0.1 icmp_seq=3 Destination Host Unreachable</span>`, '', 600);
  await outLine(`  <span class="c-dim">--- maciek.dev ping statistics ---</span>`, '', 100);
  await outLine(`  <span class="c-dim">3 packets transmitted, 0 received, +3 errors, 100% packet loss</span>`, '', 0);
  mkGap();

  // Sprawdzanie statusu serwera
  await typeCmd('./check_status.sh');
  mkGap();
  
  // Napis OFFLINE w ASCII
  await ascii([
    '   ██████╗ ███████╗███████╗██╗     ██╗███╗   ██╗███████╗',
    '  ██╔═══██╗██╔════╝██╔════╝██║     ██║████╗  ██║██╔════╝',
    '  ██║   ██║█████╗  █████╗  ██║     ██║██╔██╗ ██║█████╗  ',
    '  ██║   ██║██╔══╝  ██╔══╝  ██║     ██║██║╚██╗██║██╔══╝  ',
    '  ╚██████╔╝██║     ██║     ███████╗██║██║ ╚████║███████╗',
    '   ╚═════╝ ╚═╝     ╚═╝     ╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝'
  ]);
  mkGap();

  await outLine(`  <span class="c-red">● STATUS: 503 SERVICE UNAVAILABLE</span>`, '', 0);
  await outLine(`  <span class="c-orange">● SYSTEM: UNDER MAINTENANCE</span>`, '', 40);
  mkGap();

  // Komunikat o przebudowie
  await outLine(`  <span class="c-violet">▸ Przerwa techniczna</span>`, '', 0);
  await outLine(`  <span class="c-white">Strona jest tymczasowo zawieszona z powodu prac serwisowych.</span>`, '', 40);
  await outLine(`  <span class="c-dim">Kompiluję nowe paczki, układam divy i trenuję modele.</span>`, '', 40);
  await outLine(`  <span class="c-dim">Zajrzyj ponownie za jakiś czas!</span>`, '', 40);
  mkGap();

  idle();
}