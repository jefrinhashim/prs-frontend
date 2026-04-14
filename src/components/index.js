// ============================================================
// MOBILE SIDEBAR
// ============================================================
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const btn = document.getElementById('hamburger-btn');
  const isOpen = sidebar.classList.contains('mobile-open');
  if (isOpen) {
    closeSidebar();
  } else {
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
  btn.classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// NAVIGATION & VIEW SYSTEM
// ============================================================
function showDashboard() {
  document.getElementById('landing-page').classList.remove('active');
  document.getElementById('dashboard-page').classList.add('active');
  window.scrollTo(0, 0);
  setTimeout(initCharts, 150);
}

const viewMeta = {
  overview:         { title: 'Overview',               subtitle: 'Genetic Skin Health Summary' },
  allergies:        { title: 'Allergies',               subtitle: '4 traits analyzed' },
  dermatological:   { title: 'Dermatological Diseases', subtitle: '15 traits analyzed' },
  aesthetics:       { title: 'Skin Aesthetics',         subtitle: '8 traits analyzed' },
  markers:          { title: 'Skin Health Markers',     subtitle: '2 biomarkers analyzed' },
  lipids:           { title: 'Fatty Acid Profile',      subtitle: '8 traits analyzed' },
  metabolic:        { title: 'Metabolic Efficiency',    subtitle: '7 traits analyzed' },
  vitamins:         { title: 'Vitamins & Micronutrients', subtitle: '7 traits analyzed' },
  cardio:           { title: 'Cardiovascular Markers',  subtitle: '7 traits analyzed' },
  protein:          { title: 'Protein Building Blocks', subtitle: '7 traits analyzed' },
  recommendations:  { title: 'Recommendations',         subtitle: 'Personalized action plan' },
};

function updateTopbarFilterVisibility(viewId) {
  const filterGroup = document.querySelector('.filter-group');
  if (!filterGroup) return;
  filterGroup.style.display = (viewId === 'overview') ? 'none' : 'flex';
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
  updateTopbarFilterVisibility(viewId);
  if (viewId === 'overview') setTimeout(initCharts, 50);
  const searchInput = document.getElementById('trait-search');
  if (searchInput) filterTraits(searchInput.value || '');

  // Sync mobile bottom nav
  document.querySelectorAll('.mbn-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewId);
  });

  // Close sidebar on mobile after navigation
  if (window.innerWidth <= 1024) closeSidebar();

  // Scroll main content to top
  const mc = document.querySelector('.main-content');
  if (mc) mc.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterTraits(query) {
  const q = query.toLowerCase().trim();

  document.querySelectorAll('.trait-card').forEach(card => {
    const name = card.querySelector('.trait-name')?.textContent.toLowerCase() || '';
    const desc = card.querySelector('.trait-desc')?.textContent.toLowerCase() || '';
    card.style.display = (name.includes(q) || desc.includes(q)) ? '' : 'none';
  });

  const activeViewId = document.querySelector('.view.active')?.id?.replace('view-', '');
  if (activeViewId === 'overview' && q) {
    const searchableViews = ['allergies', 'dermatological', 'aesthetics', 'markers', 'lipids', 'metabolic', 'vitamins', 'cardio', 'protein'];
    const targetView = searchableViews.find((viewId) => {
      const viewEl = document.getElementById(`view-${viewId}`);
      if (!viewEl) return false;
      return Array.from(viewEl.querySelectorAll('.trait-card')).some((card) => {
        const name = card.querySelector('.trait-name')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('.trait-desc')?.textContent.toLowerCase() || '';
        return name.includes(q) || desc.includes(q);
      });
    });
    if (targetView) showView(targetView);
  }
}

function filterByRisk(level) {
  document.querySelectorAll('.trait-card').forEach(card => {
    card.style.display = (level === 'all' || card.dataset.risk === level) ? '' : 'none';
  });
}

function sortTraitCardsByRisk() {
  const riskOrder = {
    'very-high': 0,
    'high': 1,
    'medium': 2,
    'low': 3,
    'very-low': 4
  };

  document.querySelectorAll('.traits-grid').forEach(grid => {
    const cards = Array.from(grid.querySelectorAll('.trait-card'));
    cards
      .sort((a, b) => (riskOrder[a.dataset.risk] ?? 99) - (riskOrder[b.dataset.risk] ?? 99))
      .forEach(card => grid.appendChild(card));
  });
}

function getRoutineProfileKey() {
  const cards = Array.from(document.querySelectorAll('.trait-card[data-risk]'));
  if (!cards.length) return 'medium';

  const riskWeights = { 'very-high': 5, 'high': 4, 'medium': 3, 'low': 2, 'very-low': 1 };
  const counts = { 'very-high': 0, 'high': 0, 'medium': 0, 'low': 0, 'very-low': 0 };
  let weightedSum = 0;

  cards.forEach(card => {
    const risk = card.dataset.risk;
    if (!(risk in riskWeights)) return;
    counts[risk] += 1;
    weightedSum += riskWeights[risk];
  });

  const avg = weightedSum / cards.length;
  let profile = 'very-low';
  if (avg >= 4.2) profile = 'very-high';
  else if (avg >= 3.5) profile = 'high';
  else if (avg >= 2.6) profile = 'medium';
  else if (avg >= 1.8) profile = 'low';

  // Escalate one level for concentrated high-severity outliers.
  if (counts['very-high'] >= 2) {
    if (profile === 'medium') profile = 'high';
    if (profile === 'high') profile = 'very-high';
  }
  return profile;
}

function renderRoutineBuilder() {
  const card = document.getElementById('routine-builder-card');
  const morningList = document.getElementById('routine-morning-list');
  const nightList = document.getElementById('routine-night-list');
  const badge = document.getElementById('routine-profile-badge');
  const subtitle = document.getElementById('routine-sub');
  const footer = document.getElementById('routine-footer-note');
  const progressMeta = document.getElementById('routine-progress-meta');
  const progressFill = document.getElementById('routine-progress-fill');

  if (!card || !morningList || !nightList || !badge || !subtitle || !footer || !progressMeta || !progressFill) return;

  const routineProfiles = {
    'very-high': {
      label: 'Very High Focus',
      subtitle: 'Your routine prioritizes UV protection, inflammation control, and skin-monitoring habits.',
      morning: [
        'Apply broad-spectrum mineral SPF 50+ before sun exposure.',
        'Use antioxidant serum (Vitamin C or niacinamide) to reduce oxidative stress.',
        'Wear UV-protective clothing or hat if outdoors >15 minutes.',
        'Photograph any evolving lesion or unusual irritation once weekly.'
      ],
      night: [
        'Double cleanse gently to remove UV filters and pollutants.',
        'Apply barrier-repair moisturizer with ceramides and panthenol.',
        'Do a 60-second skin check for new/changing spots (ABCDE).',
        'Log today\'s trigger events (heat, friction, allergens, stress).'
      ],
      note: 'High-risk profile: consistency matters more than product count.'
    },
    'high': {
      label: 'High Focus',
      subtitle: 'This routine emphasizes prevention and calm-skin maintenance across high-risk traits.',
      morning: [
        'Use a low-irritant cleanser and apply SPF 50.',
        'Add a calming active (niacinamide 4-5% or azelaic acid).',
        'Reapply sunscreen around midday when outdoors.',
        'Avoid known irritants (fragrance, harsh exfoliants).'
      ],
      night: [
        'Cleanse gently and avoid over-scrubbing.',
        'Use ceramide-rich moisturizer to support barrier recovery.',
        'Apply anti-inflammatory serum if redness or itching appears.',
        'Track skin response and flare frequency in your log.'
      ],
      note: 'High-risk profile: prevention reduces cumulative flare burden.'
    },
    'medium': {
      label: 'Balanced Focus',
      subtitle: 'A steady preventive routine keeps medium-risk traits stable over time.',
      morning: [
        'Cleanse gently and apply daily SPF 30+.',
        'Use hydrating serum to maintain barrier resilience.',
        'Keep UV and heat exposure moderate during peak hours.',
        'Stay hydrated and watch for new irritation patterns.'
      ],
      night: [
        'Remove sunscreen and makeup fully before sleep.',
        'Apply moisturizer with humectants + lipids.',
        'Use active treatment 2-3 nights/week only if tolerated.',
        'Note skin comfort score (1-5) in your checklist.'
      ],
      note: 'Balanced profile: a simple routine with high adherence works best.'
    },
    'low': {
      label: 'Low-Risk Maintenance',
      subtitle: 'Focus on protecting your baseline skin health and preserving long-term resilience.',
      morning: [
        'Use lightweight cleanser and SPF 30+.',
        'Apply moisturizer to prevent barrier dehydration.',
        'Avoid unnecessary product switching.',
        'Limit direct midday UV when possible.'
      ],
      night: [
        'Cleanse and moisturize consistently.',
        'Use gentle active care (retinoid/AHA) only as needed.',
        'Spot-check for dryness or irritation.',
        'Keep a weekly skin photo for trend tracking.'
      ],
      note: 'Low-risk profile: maintain habits to preserve protective advantages.'
    },
    'very-low': {
      label: 'Protective Profile',
      subtitle: 'You have a favorable genetic baseline; keep routines consistent and minimal.',
      morning: [
        'Cleanse lightly and apply SPF 30.',
        'Use basic moisturizer to lock hydration.',
        'Keep routine minimal to avoid unnecessary irritation.',
        'Support skin health with hydration and sleep.'
      ],
      night: [
        'Gentle cleanse before bed.',
        'Apply nourishing moisturizer or overnight barrier cream.',
        'Use actives sparingly and only when needed.',
        'Review weekly routine completion for consistency.'
      ],
      note: 'Protective profile: consistency and prevention sustain low risk.'
    }
  };

  const profileKey = getRoutineProfileKey();
  const profile = routineProfiles[profileKey] || routineProfiles.medium;
  const dayKey = new Date().toISOString().slice(0, 10);
  const storageKey = `routine_builder:${profileKey}:${dayKey}`;

  let state = { morning: profile.morning.map(() => false), night: profile.night.map(() => false) };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (Array.isArray(saved.morning) && saved.morning.length === profile.morning.length) state.morning = saved.morning;
    if (Array.isArray(saved.night) && saved.night.length === profile.night.length) state.night = saved.night;
  } catch (_) {}

  badge.textContent = `Profile: ${profile.label}`;
  subtitle.textContent = profile.subtitle;
  footer.textContent = profile.note;
  badge.classList.remove('risk-very-high', 'risk-high', 'risk-medium', 'risk-low', 'risk-very-low');
  badge.classList.add(`risk-${profileKey}`);

  function saveState() {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (_) {}
  }

  function updateProgress() {
    const total = state.morning.length + state.night.length;
    const completed = state.morning.filter(Boolean).length + state.night.filter(Boolean).length;
    const pct = total ? Math.round((completed / total) * 100) : 0;
    progressMeta.textContent = `${completed}/${total} completed today`;
    progressFill.style.width = `${pct}%`
  }

  function renderList(targetEl, period, items) {
    targetEl.innerHTML = items.map((text, idx) => `
      <li>
        <button type="button" class="routine-item-btn ${state[period][idx] ? 'checked' : ''}" data-period="${period}" data-index="${idx}">
          <span class="routine-check" aria-hidden="true"></span>
          <span class="routine-item-text">${text}</span>
        </button>
      </li>
    `).join('');
  }

  renderList(morningList, 'morning', profile.morning);
  renderList(nightList, 'night', profile.night);
  updateProgress();

  card.querySelectorAll('.routine-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const period = btn.dataset.period;
      const index = Number(btn.dataset.index);
      if (!state[period] || Number.isNaN(index) || index < 0 || index >= state[period].length) return;
      state[period][index] = !state[period][index];
      btn.classList.toggle('checked', state[period][index]);
      saveState();
      updateProgress();
    });
  });
}

function triggerDownload() {
  const fileName = 'report_PRS_skin (1).pdf';
  const link = document.createElement('a');
  link.href = encodeURI(fileName);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

// ============================================================
// CHARTS
// ============================================================
let scoreChartInst, polarChartInst, bioChartInst;
let chartsInitialized = false;

function initCharts() {
  if (chartsInitialized) return;
  chartsInitialized = true;

  // Score donut
  const scoreCtx = document.getElementById('scoreChart')?.getContext('2d');
  if (scoreCtx) {
    scoreChartInst = new Chart(scoreCtx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [74, 26],
          backgroundColor: ['#D4A853', '#EFE9DF'],
          borderWidth: 0,
          borderRadius: 6,
        }]
      },
      options: {
        cutout: '72%',
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        animation: { duration: 1200, easing: 'easeInOutQuart' }
      }
    });
  }

  // Category Risk Profile — SVG ring chart
  (function initRingChart() {
    const ringData = [
      { label: 'Dermatological', value: 15, color: '#C1634A' },
      { label: 'Aesthetics',     value: 8,  color: '#D4A853' },
      { label: 'Allergies',      value: 4,  color: '#7B9E87' },
      { label: 'Markers',        value: 2,  color: '#6BAED6' },
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
      circle.setAttribute('cx', cx);
      circle.setAttribute('cy', cy);
      circle.setAttribute('r', r);
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', d.color);
      circle.setAttribute('stroke-width', strokeW);
      circle.setAttribute('stroke-linecap', 'round');
      circle.setAttribute('stroke-dasharray', `${segLen} ${circ - segLen}`);
      circle.setAttribute('stroke-dashoffset', -offset);
      circle.setAttribute('transform', `rotate(-90 ${cx} ${cy})`);
      circle.style.cursor = 'pointer';
      circle.style.transition = 'stroke-width 0.2s, opacity 0.2s';
      // animate in
      circle.style.strokeDasharray = `0 ${circ}`;
      circle.style.transition = 'stroke-dasharray 0.7s cubic-bezier(0.4,0,0.2,1), stroke-width 0.2s, opacity 0.2s';
      setTimeout(() => {
        circle.style.strokeDasharray = `${segLen} ${circ - segLen}`;
      }, 80 + i * 120);

      circle.addEventListener('mouseenter', () => {
        paths.forEach((p, j) => { p.style.opacity = j === i ? '1' : '0.3'; p.setAttribute('stroke-width', j === i ? strokeW + 5 : strokeW - 2); });
        centreVal.textContent = d.value;
        centreVal.setAttribute('fill', d.color);
        centreLbl.textContent = d.label.toLowerCase();
        document.querySelectorAll('.rl-item').forEach((el, j) => el.classList.toggle('rl-item--active', j === i));
      });
      circle.addEventListener('mouseleave', () => {
        paths.forEach(p => { p.style.opacity = '1'; p.setAttribute('stroke-width', strokeW); });
        centreVal.textContent = total;
        centreVal.setAttribute('fill', '#1E3A2F');
        centreLbl.textContent = 'traits';
        document.querySelectorAll('.rl-item').forEach(el => el.classList.remove('rl-item--active'));
      });

      segG.appendChild(circle);
      paths.push(circle);
      offset += frac * circ;
    });

    // Legend hover ? highlight segment
    document.querySelectorAll('.rl-item').forEach((el, i) => {
      el.addEventListener('mouseenter', () => paths[i].dispatchEvent(new MouseEvent('mouseenter')));
      el.addEventListener('mouseleave', () => paths[i].dispatchEvent(new MouseEvent('mouseleave')));
    });
  })();
}

function initBiomarkerChart() {
  if (bioChartInst) return;
  const ctx = document.getElementById('biomarkerChart')?.getContext('2d');
  if (!ctx) return;
  bioChartInst = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Kallikrein-7', 'Ceramide'],
      datasets: [{
        label: 'Your Genetic Set Point',
        data: [83, 10],
        backgroundColor: ['rgba(212,168,83,0.7)', 'rgba(74,112,85,0.7)'],
        borderColor: ['#D4A853', '#4A7055'],
        borderWidth: 1.5, borderRadius: 8,
      }, {
        label: 'Population Average (50th percentile)',
        data: [50, 50],
        backgroundColor: ['rgba(0,0,0,0.06)', 'rgba(0,0,0,0.06)'],
        borderColor: ['rgba(0,0,0,0.15)', 'rgba(0,0,0,0.15)'],
        borderWidth: 1, borderRadius: 8,
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        legend: { labels: { font: { family: 'Outfit', size: 12 }, color: '#6B6357' } }
      },
      scales: {
        x: {
          max: 100, grid: { color: '#EFE9DF' },
          ticks: { font: { family: 'Outfit', size: 11 }, color: '#9E9589', callback: v => v + 'th %ile' }
        },
        y: { ticks: { font: { family: 'Outfit', size: 13 }, color: '#1A1A1A' }, grid: { display: false } }
      },
      animation: { duration: 900 }
    }
  });
}

// Override showView for markers to init biomarker chart
const _origShowView = showView;
window.showView = function(id) {
  _origShowView(id);
  if (id === 'markers') setTimeout(initBiomarkerChart, 100);
};

// ============================================================
// TRAIT MODAL DATA
// ============================================================
const traitData = {
  mosquito: {
    name: 'Mosquito Bite Sensitivity', category: 'Allergies', risk: 'high',
    prs: '1.88', percentile: '81st',
    description: 'IL-4 and IgE pathway variants indicate an elevated immune response to mosquito salivary antigens, predicting increased whealing and pruritus following bites. This reflects a Th2-skewed immune phenotype with heightened mast cell degranulation.',  
    genes: 'IL4 · FCER1A rs2298805 · IL13 rs1800925'
  },
  keratinocyte: {
    name: 'Keratinocyte Cancer', category: 'Dermatological Diseases', risk: 'very-high',
    prs: '2.31', percentile: '92nd',
    description: 'Multiple GWAS risk loci in keratinocyte-differentiation genes converge on very high lifetime risk for squamous cell carcinoma of the skin. This finding warrants immediate clinical attention and regular dermatological monitoring.',   
    genes: 'KRT5 rs11170164 · TP53 rs1042522 · CDKN2A ?16bp'
  },
  nonmelanoma: {
    name: 'Non-Melanoma Skin Cancer', category: 'Dermatological Diseases', risk: 'very-high',
    prs: '2.47', percentile: '95th',
    description: 'MC1R, PTCH1, and TP53 variants converge to significantly elevate squamous and basal cell carcinoma risk. Your PRS places you in the top 5% of the population for this trait.',   
    genes: 'MC1R p.R160W · PTCH1 rs357564 · OCA2 rs1800407'
  },
  psoriasis: {
    name: 'Psoriasis', category: 'Dermatological Diseases', risk: 'high',
    prs: '1.94', percentile: '85th',
    description: 'HLA-C*06:02 and IL-23/IL-17 pathway variants significantly increase psoriasis susceptibility. This combination is the most important genetic risk factor for plaque psoriasis.',  
    genes: 'HLA-C*06:02 · IL23R rs11209026 · CARD14 rs11652075'
  },
  rosacea: {
    name: 'Rosacea', category: 'Dermatological Diseases', risk: 'high',
    prs: '1.78', percentile: '80th',
    description: 'Cathelicidin (LL-37) and inflammatory vascular response gene variants show elevated rosacea predisposition. VEGF-related and TLR2 variants amplify facial inflammatory responses to triggers.',
    genes: 'BTNL2 rs2395185 · HLA-DRA rs763802 · TLR2 rs3804100'
  },
  kallikrein: {
    name: 'Kallikrein-7 Levels', category: 'Skin Health Markers', risk: 'high',
    prs: '1.82', percentile: '83rd',
    description: 'Kallikrein-7 (KLK7) is a serine protease critical for skin desquamation. Elevated genetic levels can over-digest the corneal layer, leading to barrier compromise, sensitivity, and inflammatory skin conditions.',  
    genes: 'KLK7 promoter · SPINK5 rs2303064 · CST9 rs2070219'
  },
  ceramide: {
    name: 'Ceramide Levels', category: 'Skin Health Markers', risk: 'very-low',
    prs: '0.41', percentile: '10th',
    description: 'Ceramides are essential lipids that form the skin\'s waterproof barrier. Your CERS2 and SMPD1 variant profile predicts excellent ceramide synthesis, contributing to robust barrier function across your lifetime.',
    genes: 'CERS2 rs267606587 · SMPD1 rs1050239 · ASAH1 rs6428711'
  },
  sunburn: {
    name: 'Sunburn Sensitivity', category: 'Skin Aesthetics', risk: 'high',
    prs: '1.96', percentile: '86th',
    description: 'MC1R loss-of-function variants and minimal melanin buffering increase UV erythema response substantially. You are genetically predisposed to burn quickly and significantly in unprotected sun exposure.',  
    genes: 'MC1R p.V60L · MC1R p.R151C · TYR rs1393350'
  },
};

const riskLabels = { 'very-high':'Very High','high':'High','medium':'Medium','low':'Low','very-low':'Very Low' };
const categoryLabels = {
  allergies: 'Allergies',
  dermatological: 'Dermatological Diseases',
  aesthetics: 'Skin Aesthetics',
  markers: 'Skin Health Markers',
  lipids: 'Fatty Acid Profile (Lipids)',
  metabolic: 'Metabolic Efficiency',
  vitamins: 'Vitamins & Micronutrients',
  cardio: 'Cardiovascular Markers',
  protein: 'Protein Building Blocks'
};

function extractTraitIdFromCard(card) {
  const onclick = card.getAttribute('onclick') || '';
  const match = onclick.match(/showTrait\('([^']+)'\)/);
  return match ? match[1] : null;
}

function normalizePercentile(raw) {
  if (!raw) return '';
  return raw.replace(/percentile/i, '').trim();
}

function hydrateTraitDataFromCards() {
  document.querySelectorAll('.trait-card').forEach(card => {
    const id = extractTraitIdFromCard(card);
    if (!id || traitData[id]) return;

    const categoryKey = card.dataset.category || '';
    const name = card.querySelector('.trait-name')?.textContent?.trim() || '';
    const risk = card.dataset.risk || 'medium';
    const prs = (card.querySelector('.trait-prs')?.textContent || '').replace('PRS:', '').trim();
    const percentile = normalizePercentile(card.querySelector('.trait-pop')?.textContent || '');
    const description = card.querySelector('.trait-desc')?.textContent?.trim() || '';

    traitData[id] = {
      name,
      category: categoryLabels[categoryKey] || categoryKey,
      risk,
      prs,
      percentile,
      description,
      recs: ['Follow your dermatologist-guided routine and monitor symptoms over time.'],
      genes: 'Not specified'
    };
  });
}

function renderTraitCardsFromData() {
  document.querySelectorAll('.trait-card').forEach(card => {
    const id = extractTraitIdFromCard(card);
    if (!id || !traitData[id]) return;

    const d = traitData[id];
    const percentileNum = parseInt(d.percentile, 10);
    const width = Number.isFinite(percentileNum) ? Math.max(0, Math.min(100, percentileNum)) : 50;

    card.dataset.risk = d.risk;
    const riskFill = card.querySelector('.risk-fill');
    if (riskFill) {
      riskFill.className = `risk-fill risk-${d.risk}`;
      riskFill.style.width = `${width}%`;
    }

    const nameEl = card.querySelector('.trait-name');
    if (nameEl) nameEl.textContent = d.name;

    const badgeEl = card.querySelector('.risk-badge');
    if (badgeEl) {
      badgeEl.className = `risk-badge risk-${d.risk}`;
      badgeEl.textContent = riskLabels[d.risk] || 'Medium';
    }

    const descEl = card.querySelector('.trait-desc');
    if (descEl) descEl.textContent = d.description;

    const prsEl = card.querySelector('.trait-prs');
    if (prsEl) prsEl.textContent = `PRS: ${d.prs}`;

    const popEl = card.querySelector('.trait-pop');
    if (popEl) popEl.textContent = `${d.percentile} percentile`;
  });
}

function showTrait(id) {
  const d = traitData[id];
  if (!d) return;
  const baseRecs = Array.isArray(d.recs) ? d.recs : [];
  const extraRecs = [
    'Track flare-ups or skin changes weekly to identify long-term patterns..',
    'Pair active ingredients with barrier-repair products to improve tolerance.',
    'Reassess this trait profile with your clinician at regular follow-ups.'
  ];
  const allRecs = [...baseRecs, ...extraRecs];
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-cat">${d.category}</div>
    <h2 class="modal-h2">${d.name}</h2>
    <div class="modal-risk-banner risk-${d.risk}">
      <div class="modal-prs-big">${d.prs}</div>
      <div class="modal-prs-meta">
        <span class="m-label">PRS Score</span>
        <span class="m-label" style="margin-top:8px">Population Percentile</span>
        <span class="m-val">${d.percentile}</span>
      </div>
      <div style="margin-left:auto;">
        <span class="risk-badge risk-${d.risk}" style="font-size:13px;padding:6px 14px;">${riskLabels[d.risk]}</span>
      </div>
    </div>
    <p class="modal-desc">${d.description}</p>
    <div class="modal-section-title">Personalized Recommendations</div>
    <div class="modal-recs">
      ${allRecs.map(r => `<div class="modal-rec-item"><div class="rec-dot"></div><span>${r}</span></div>`).join('')}
    </div>
    <div class="modal-gene-table-wrap">
      <table class="modal-gene-table">
        <thead>
          <tr>
            <th>chromosome</th>
            <th>position</th>
            <th>reference allele</th>
            <th>effect allelle</th>
            <th>genotype</th>
            <th>gene</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>22</td><td>37251028</td><td>C</td><td>T</td><td>CC</td><td>RAC2</td></tr>
          <tr><td>11</td><td>81190800</td><td>A</td><td>C</td><td>AA</td><td>near COX6A1P4</td></tr>
          <tr><td>2</td><td>47971006</td><td>C</td><td>T</td><td>CC</td><td>near VN1R18P</td></tr>
          <tr><td>2</td><td>48191180</td><td>A</td><td>G</td><td>AA</td><td>near RN7SKP224</td></tr>
          <tr><td>4</td><td>122806140</td><td>G</td><td>T</td><td>GG</td><td>near FGF2</td></tr>
          <tr><td>1</td><td>152206676</td><td>C</td><td>T</td><td>CC</td><td>CCDST</td></tr>
          <tr><td>3</td><td>106156699</td><td>A</td><td>C</td><td>AA</td><td>near CBLB</td></tr>
          <tr><td>13</td><td>67122540</td><td>C</td><td>T</td><td>CC</td><td>PCDH9</td></tr>
          <tr><td>4</td><td>122690387</td><td>G</td><td>T</td><td>TT</td><td>near IL21-AS1</td></tr>
          <tr><td>5</td><td>132295159</td><td>A</td><td>C</td><td>CA</td><td>P4HA2, SLC22A4</td></tr>
        </tbody>
      </table>
    </div>
    <div class="modal-genes">Key Variants: ${d.genes}</div>
  `;
  document.getElementById('trait-modal').classList.add('open');
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('trait-modal')) {
    document.getElementById('trait-modal').classList.remove('open');
  }
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Initialize charts if dashboard is default active
document.addEventListener('DOMContentLoaded', () => {
  hydrateTraitDataFromCards();
  renderTraitCardsFromData();
  sortTraitCardsByRisk();
  renderRoutineBuilder();

  const activeViewEl = document.querySelector('.view.active');
  const activeViewId = activeViewEl?.id?.replace('view-', '') || 'overview';
  updateTopbarFilterVisibility(activeViewId);

  if (document.getElementById('dashboard-page').classList.contains('active')) {
    setTimeout(initCharts, 200);
  }
});




