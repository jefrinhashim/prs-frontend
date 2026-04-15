/* Arc animation */
          (function() {
            const fill = document.getElementById('ovArcFill');
            if (!fill) return;
            const total = 220, score = 78, offset = total - (score / 100) * total;
            setTimeout(() => { fill.style.strokeDashoffset = offset; }, 200);
          })();

          /* Bubble map */
          (function() {
            const canvas = document.getElementById('ovBubbleCanvas');
            if (!canvas) return;
            const bubbles = [
              { name:'Diacylglycerol', prs:'2.41', cls:'b-vh', size:68, x:3,  y:5  },
              { name:'Phosphatidylcholine', prs:'2.38', cls:'b-vh', size:65, x:16, y:38 },
              { name:'Intestinal Microbiota', prs:'2.53', cls:'b-vh', size:70, x:30, y:8  },
              { name:'% MUFA', prs:'2.01', cls:'b-h',  size:56, x:47, y:35 },
              { name:'Linoleic Acid', prs:'1.94', cls:'b-h',  size:54, x:44, y:2  },
              { name:'Large LP PL', prs:'1.88', cls:'b-h',  size:52, x:60, y:10 },
              { name:'DHA %', prs:'1.87', cls:'b-h',  size:52, x:72, y:36 },
              { name:'VLDL Phospholipids', prs:'1.84', cls:'b-h',  size:50, x:62, y:52 },
              { name:'CoQ10', prs:'1.76', cls:'b-h',  size:48, x:82, y:8  },
              { name:'Carnitine', prs:'1.73', cls:'b-h',  size:46, x:85, y:46 },
              { name:'Blautia', prs:'1.48', cls:'b-m',  size:40, x:28, y:52 },
              { name:'Manganese', prs:'1.39', cls:'b-m',  size:36, x:8,  y:58 },
              { name:'Citrulline', prs:'0.89', cls:'b-l',  size:32, x:48, y:62 },
            ];
            bubbles.forEach(b => {
              const el = document.createElement('div');
              el.className = `ov-bubble ${b.cls}`;
              el.style.cssText = `width:${b.size}px;height:${b.size}px;left:${b.x}%;top:${b.y}%;`;
              el.innerHTML = `<span class="ov-bubble-name">${b.name}</span><span class="ov-bubble-prs">${b.prs}</span>`;
              canvas.appendChild(el);
            });
          })();

          /* Routine */
          (function() {
            const morning = [
              'Omega-3 (2g EPA+DHA) with breakfast',
              '2+ high-fiber foods for gut diversity',
              'Vitamin D (2000–4000 IU) supplement',
              'Log fat intake — target ω6:ω3 < 4:1',
            ];
            const evening = [
              'Probiotic food (yogurt / kimchi)',
              'Review saturated fat — keep < 7% kcal',
              'CoQ10 if on statins (100–200mg)',
              'Magnesium glycinate (200mg)',
            ];
            const mList = document.getElementById('ov-morning-list');
            const eList = document.getElementById('ov-evening-list');
            const progFill = document.getElementById('ov-prog-fill');
            const progLabel = document.getElementById('ov-prog-label');
            if (!mList || !eList) return;

            const key = 'ov_routine:' + new Date().toISOString().slice(0,10);
            let state = { m: morning.map(()=>false), e: evening.map(()=>false) };
            try { const s = JSON.parse(localStorage.getItem(key)||'{}'); if(s.m) state.m=s.m; if(s.e) state.e=s.e; } catch(_){}

            function save(){ try{ localStorage.setItem(key,JSON.stringify(state)); }catch(_){} }
            function progress(){
              const done = state.m.filter(Boolean).length + state.e.filter(Boolean).length;
              const total = morning.length + evening.length;
              progFill.style.width = Math.round(done/total*100)+'%';
              progLabel.textContent = done+'/'+total+' today';
            }
            function render(el, arr, period) {
              el.innerHTML = arr.map((t,i) => `
                <li><div class="ov-ritem${state[period][i]?' done':''}" data-p="${period}" data-i="${i}">
                  <div class="ov-rcheck"></div>
                  <span class="ov-rtext">${t}</span>
                </div></li>`).join('');
            }
            function attach(el){
              el.querySelectorAll('.ov-ritem').forEach(row=>{
                row.addEventListener('click',()=>{
                  const p=row.dataset.p, i=Number(row.dataset.i);
                  state[p][i]=!state[p][i];
                  row.classList.toggle('done',state[p][i]);
                  save(); progress();
                });
              });
            }
            render(mList, morning, 'm');
            render(eList, evening, 'e');
            attach(mList); attach(eList);
            progress();
          })();

// ============================================================
// MOBILE SIDEBAR
// ============================================================
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const btn = document.getElementById('hamburger-btn');
  const isOpen = sidebar.classList.contains('mobile-open');
  if (isOpen) { closeSidebar(); } else {
    sidebar.classList.add('mobile-open');
    overlay.classList.add('active');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const btn = document.getElementById('hamburger-btn');
  sidebar.classList.remove('mobile-open');
  overlay.classList.remove('active');
  if (btn) btn.classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// NAVIGATION
// ============================================================
const viewMeta = {
  overview:        { title: 'Overview',                 subtitle: 'Genetic Nutrition Health Summary' },
  lipids:          { title: 'Fatty Acid Profile',       subtitle: '8 traits analyzed' },
  metabolic:       { title: 'Metabolic Efficiency',     subtitle: '7 traits analyzed' },
  vitamins:        { title: 'Vitamins & Micronutrients',subtitle: '7 traits analyzed' },
  cardio:          { title: 'Cardiovascular Markers',   subtitle: '7 traits analyzed' },
  protein:         { title: 'Protein Building Blocks',  subtitle: '7 traits analyzed' },
  recommendations: { title: 'Recommendations',          subtitle: 'Personalized nutrition action plan' },
};

function showDashboard() {
  document.getElementById('landing-page').classList.remove('active');
  document.getElementById('dashboard-page').classList.add('active');
  window.scrollTo(0, 0);
  setTimeout(initRingChart, 150);
}

function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('view-' + viewId)?.classList.add('active');
  document.querySelector(`.nav-item[data-view="${viewId}"]`)?.classList.add('active');
  const meta = viewMeta[viewId] || {};
  document.getElementById('page-title').textContent = meta.title || '';
  document.getElementById('page-subtitle').textContent = meta.subtitle || '';
  document.getElementById('risk-filter').value = 'all';
  const filterGroup = document.querySelector('.filter-group');
  if (filterGroup) filterGroup.style.display = viewId === 'overview' ? 'none' : 'flex';
  const mc = document.querySelector('.main-content');
  if (mc) mc.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.innerWidth <= 1024) closeSidebar();
}

function filterTraits(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.trait-card').forEach(card => {
    const name = card.querySelector('.trait-name')?.textContent.toLowerCase() || '';
    const desc = card.querySelector('.trait-desc')?.textContent.toLowerCase() || '';
    card.style.display = (name.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function filterByRisk(level) {
  document.querySelectorAll('.trait-card').forEach(card => {
    card.style.display = (level === 'all' || card.dataset.risk === level) ? '' : 'none';
  });
}

// ============================================================
// DIST2 ACCORDION
// ============================================================
function toggleDist2(row) {
  const traits = row.querySelector('.dist2-traits');
  const isOpen = row.classList.contains('dist2-open');
  document.querySelectorAll('.dist2-row').forEach(r => {
    r.classList.remove('dist2-open');
    r.querySelector('.dist2-traits').style.display = 'none';
  });
  if (!isOpen) { row.classList.add('dist2-open'); traits.style.display = 'flex'; }
}

// ============================================================
// RC ACCORDION
// ============================================================
const rcItems = [];

function initRcItems() {
  const items = Array.from(document.querySelectorAll('.rc-item'));
  items.forEach(item => {
    const body = item.querySelector('.rc-expand-body');
    if (body) { body.style.overflow = 'hidden'; body.style.transition = 'max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease'; body.style.maxHeight = '0'; body.style.opacity = '0'; }
    item.classList.remove('rc-expanded');
    const chevron = item.querySelector('.rc-chevron');
    if (chevron) chevron.style.transform = '';
    rcItems.push(item);
  });
}

function rcOpen(item) {
  item.classList.add('rc-expanded');
  const body = item.querySelector('.rc-expand-body');
  const chevron = item.querySelector('.rc-chevron');
  if (body) { requestAnimationFrame(() => { body.style.maxHeight = body.scrollHeight + 'px'; body.style.opacity = '1'; }); }
  if (chevron) chevron.style.transform = 'rotate(180deg)';
}
function rcClose(item) {
  item.classList.remove('rc-expanded');
  const body = item.querySelector('.rc-expand-body');
  const chevron = item.querySelector('.rc-chevron');
  if (body) { body.style.maxHeight = '0'; body.style.opacity = '0'; }
  if (chevron) chevron.style.transform = '';
}

let rcIndex = 0;

function toggleRcItem(item) {
  const isOpen = item.classList.contains('rc-expanded');
  rcItems.forEach(el => rcClose(el));
  if (!isOpen) {
    rcOpen(item);
    rcIndex = rcItems.indexOf(item);
  }
}

// ============================================================
// RING CHART
// ============================================================
let ringInited = false;
function initRingChart() {
  if (ringInited) return;
  ringInited = true;

  const ringData = [
    { label: 'Fatty Acids',    value: 8,  color: '#D4A853' },
    { label: 'Cardiovascular', value: 7,  color: '#C1634A' },
    { label: 'Metabolic',      value: 7,  color: '#7B9E87' },
    { label: 'Vitamins',       value: 7,  color: '#8B5E83' },
    { label: 'Protein',        value: 7,  color: '#6BAED6' },
  ];
  const total = ringData.reduce((s, d) => s + d.value, 0);
  const cx = 100, cy = 100, r = 78, strokeW = 16;
  const circ = 2 * Math.PI * r;
  const gap = 4;
  const segG = document.getElementById('ringSegments');
  const centreVal = document.getElementById('ringCentreVal');
  const centreLbl = document.getElementById('ringCentreLbl');
  if (!segG) return;

  let offset = 0;
  const paths = [];

  ringData.forEach((d, i) => {
    const frac = d.value / total;
    const segLen = frac * circ - gap;
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx); circle.setAttribute('cy', cy); circle.setAttribute('r', r);
    circle.setAttribute('fill', 'none'); circle.setAttribute('stroke', d.color);
    circle.setAttribute('stroke-width', strokeW); circle.setAttribute('stroke-linecap', 'round');
    circle.setAttribute('stroke-dasharray', `0 ${circ}`);
    circle.setAttribute('stroke-dashoffset', -offset);
    circle.setAttribute('transform', `rotate(-90 ${cx} ${cy})`);
    circle.style.cursor = 'pointer';
    circle.style.transition = 'stroke-dasharray 0.7s cubic-bezier(0.4,0,0.2,1), stroke-width 0.2s, opacity 0.2s';
    setTimeout(() => { circle.style.strokeDasharray = `${segLen} ${circ - segLen}`; }, 80 + i * 120);

    circle.addEventListener('mouseenter', () => {
      paths.forEach((p, j) => { p.style.opacity = j === i ? '1' : '0.3'; p.setAttribute('stroke-width', j === i ? strokeW + 5 : strokeW - 2); });
      centreVal.textContent = d.value; centreVal.setAttribute('fill', d.color);
      centreLbl.textContent = d.label.toLowerCase();
      document.querySelectorAll('.rl-item').forEach((el, j) => el.classList.toggle('rl-item--active', j === i));
    });
    circle.addEventListener('mouseleave', () => {
      paths.forEach(p => { p.style.opacity = '1'; p.setAttribute('stroke-width', strokeW); });
      centreVal.textContent = total; centreVal.setAttribute('fill', '#1E3A2F');
      centreLbl.textContent = 'traits';
      document.querySelectorAll('.rl-item').forEach(el => el.classList.remove('rl-item--active'));
    });

    segG.appendChild(circle);
    paths.push(circle);
    offset += frac * circ;
  });

  document.querySelectorAll('.rl-item').forEach((el, i) => {
    if (paths[i]) {
      el.addEventListener('mouseenter', () => paths[i].dispatchEvent(new MouseEvent('mouseenter')));
      el.addEventListener('mouseleave', () => paths[i].dispatchEvent(new MouseEvent('mouseleave')));
    }
  });
}

// ============================================================
// ROUTINE BUILDER
// ============================================================
function renderRoutineBuilder() {
  const morningItems = [
    'Take omega-3 (2g EPA+DHA) with breakfast to counter high phospholipid risk.',
    'Eat 2+ fiber-rich foods to nourish beneficial gut bacteria (Blautia support).',
    'Take vitamin D (2000–4000 IU) — your genetic binding protein profile warrants it.',
    'Log your breakfast macros to maintain omega-6:omega-3 ratio below 4:1.',
  ];
  const eveningItems = [
    'Take CoQ10 (100–200mg) if on statins — your high genetic CoQ10 warrants monitoring.',
    'Eat a probiotic food (yogurt, kefir, or kimchi) to support microbiome diversity.',
    'Review today\'s saturated fat intake — target below 7% of total daily calories.',
    'Take magnesium glycinate (200–400mg) to support insulin sensitivity overnight.',
  ];

  const morningList = document.getElementById('routine-morning-list');
  const nightList = document.getElementById('routine-night-list');
  const progressMeta = document.getElementById('routine-progress-meta');
  const progressFill = document.getElementById('routine-progress-fill');
  if (!morningList || !nightList) return;

  const state = { morning: morningItems.map(() => false), evening: eveningItems.map(() => false) };
  const storageKey = `routine_nutrition:${new Date().toISOString().slice(0,10)}`;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (Array.isArray(saved.morning) && saved.morning.length === morningItems.length) state.morning = saved.morning;
    if (Array.isArray(saved.evening) && saved.evening.length === eveningItems.length) state.evening = saved.evening;
  } catch(_) {}

  function saveState() { try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch(_) {} }
  function updateProgress() {
    const total = state.morning.length + state.evening.length;
    const done = state.morning.filter(Boolean).length + state.evening.filter(Boolean).length;
    progressMeta.textContent = `${done}/${total} completed today`;
    progressFill.style.width = `${Math.round((done/total)*100)}%`;
  }

  function renderList(el, period, items) {
    el.innerHTML = items.map((text, idx) => `
      <li><button type="button" class="routine-item-btn ${state[period][idx] ? 'checked' : ''}" data-period="${period}" data-index="${idx}">
        <span class="routine-check"></span>
        <span class="routine-item-text">${text}</span>
      </button></li>`).join('');
  }

  renderList(morningList, 'morning', morningItems);
  renderList(nightList, 'evening', eveningItems);
  updateProgress();

  document.getElementById('routine-builder-card').querySelectorAll('.routine-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const period = btn.dataset.period;
      const idx = Number(btn.dataset.index);
      state[period][idx] = !state[period][idx];
      btn.classList.toggle('checked', state[period][idx]);
      saveState(); updateProgress();
    });
  });
  document.getElementById('routine-footer-note').textContent = 'High-risk fatty acid & microbiome profile — supplement consistency is key.';
}

// ============================================================
// MODAL
// ============================================================
function closeModal(e) {
  if (!e || e.target === document.getElementById('trait-modal')) {
    document.getElementById('trait-modal').classList.remove('open');
  }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Make trait cards open modal with their content
function initTraitCards() {
  document.querySelectorAll('.trait-card').forEach(card => {
    card.addEventListener('click', () => {
      const name = card.querySelector('.trait-name')?.textContent || '';
      const desc = card.querySelector('.trait-desc')?.textContent || '';
      const risk = card.dataset.risk || 'medium';
      const prs = card.querySelector('.trait-prs')?.textContent?.replace('PRS: ', '') || '';
      const percentile = card.querySelector('.trait-pop')?.textContent || '';
      const category = card.dataset.category || '';
      const catLabels = { lipids: 'Fatty Acid Profile', metabolic: 'Metabolic Efficiency', vitamins: 'Vitamins & Micronutrients', cardio: 'Cardiovascular Markers', protein: 'Protein Building Blocks' };
      const riskLabels = { 'very-high': 'Very High', high: 'High', medium: 'Medium', low: 'Low', 'very-low': 'Very Low' };

      document.getElementById('modal-content').innerHTML = `
        <div class="modal-cat">${catLabels[category] || category}</div>
        <h2 class="modal-h2">${name}</h2>
        <div class="modal-risk-banner risk-${risk}">
          <div class="modal-prs-big">${prs}</div>
          <div class="modal-prs-meta">
            <span class="m-label">PRS Score</span>
            <span class="m-label" style="margin-top:8px">Population Percentile</span>
            <span class="m-val">${percentile}</span>
          </div>
          <div style="margin-left:auto;">
            <span class="risk-badge risk-${risk}" style="font-size:13px;padding:6px 14px;">${riskLabels[risk] || ''}</span>
          </div>
        </div>
        <p class="modal-desc">${desc}</p>
        <div class="modal-section-title">Recommended Actions</div>
        <div class="modal-recs">
          <div class="modal-rec-item"><div class="rec-dot"></div><span>Monitor this marker with regular blood panels and track dietary patterns that affect it.</span></div>
          <div class="modal-rec-item"><div class="rec-dot"></div><span>Consult a registered dietitian or nutritionist to tailor supplementation to your full genetic profile.</span></div>
          <div class="modal-rec-item"><div class="rec-dot"></div><span>Track your response to dietary and lifestyle interventions over 3-month intervals.</span></div>
        </div>
        <div class="modal-genes">Sample ID: P00026401WG · Report: NG-2024-0026 · Analyzed Feb 15, 2026</div>
      `;
      document.getElementById('trait-modal').classList.add('open');
    });
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initRcItems();
  initTraitCards();
  renderRoutineBuilder();

  const filterGroup = document.querySelector('.filter-group');
  if (filterGroup) filterGroup.style.display = 'none';

  if (document.getElementById('dashboard-page').classList.contains('active')) {
    setTimeout(initRingChart, 200);
  }
});