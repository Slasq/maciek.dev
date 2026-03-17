const term = document.getElementById('term');

let cursorEl = null;
let runToken = 0;

function prompt(path = '~') {
  return `<span class="pu">maciek</span><span class="pa">@</span><span class="ph">dev</span><span class="pa">:</span><span class="pp">${path}</span><span class="ps">$</span>`;
}

function removeCursor() {
  if (cursorEl?.parentNode) cursorEl.parentNode.removeChild(cursorEl);
  cursorEl = null;
}

function addCursor(el) {
  removeCursor();
  cursorEl = document.createElement('span');
  cursorEl.className = 'cursor';
  el.appendChild(cursorEl);
}

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function scroll() { term.scrollTop = term.scrollHeight; }
function show(el) { el.classList.add('show'); }

function mkLine(cls = 'line') {
  const d = document.createElement('div');
  d.className = cls;
  term.appendChild(d);
  return d;
}

function mkGap() {
  const d = document.createElement('div');
  d.className = 'gap';
  term.appendChild(d);
}

async function typeCmd(text, path = '~', delay = 380) {
  const P    = prompt(path);
  const row  = mkLine(); show(row);
  row.innerHTML = P;
  const span = document.createElement('span');
  span.className = 'c-white';
  row.appendChild(span);
  addCursor(row); scroll();
  await wait(delay);
  for (let i = 0; i <= text.length; i++) {
    span.textContent = text.slice(0, i);
    removeCursor(); addCursor(row); scroll();
    await wait(32 + Math.random() * 28);
  }
  removeCursor();
  await wait(160);
}

async function outLine(html, cls = '', d = 0) {
  await wait(d);
  const row = mkLine('line ' + cls);
  row.innerHTML = html;
  show(row); scroll();
}

async function ascii(lines) {
  for (const l of lines) {
    const pre = document.createElement('pre');
    pre.className = 'ascii-block';
    pre.textContent = l;
    term.appendChild(pre); scroll();
    await wait(30);
    pre.classList.add('show');
  }
}

async function tags(list) {
  const row = document.createElement('div');
  row.className = 'tag-wrap line';
  list.forEach(t => {
    const s = document.createElement('span');
    s.className = 'tag';
    s.textContent = t;
    row.appendChild(s);
  });
  term.appendChild(row); show(row); scroll();
}

async function linkRow(icon, label, url, handle) {
  const row = document.createElement('div');
  row.className = 'link-row line';
  row.innerHTML = `<span class="c-dim">${icon}</span><span class="c-violet" style="min-width:100px">${label}</span><span class="c-muted">→</span><a href="${url}" target="_blank">${handle}</a>`;
  term.appendChild(row); show(row); scroll();
}

function idle(path = '~') {
  const row = mkLine(); show(row);
  row.innerHTML = prompt(path);
  addCursor(row); scroll();
}
