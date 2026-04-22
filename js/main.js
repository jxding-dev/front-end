import { htmlData } from './data/html.js';
import { cssData } from './data/css.js';
import { jsData } from './data/javascript.js';
import { renderCards } from './renderer.js';
import { filterItems } from './search.js';

const DATA = {
  html: htmlData,
  css: cssData,
  js: jsData,
};

const SECTION_META = {
  html: {
    title: 'HTML',
    desc: 'HTML 태그, 속성, 예제 코드, 미리보기를 정리한 레퍼런스입니다.',
  },
  css: {
    title: 'CSS',
    desc: 'CSS 속성, 레이아웃 패턴, 시각 효과 예제를 모아둔 레퍼런스입니다.',
  },
  js: {
    title: 'JavaScript',
    desc: '실행 가능한 예제와 핵심 개념을 함께 정리한 JavaScript 레퍼런스입니다.',
  },
};

const CATEGORY_LABELS = {
  all: '전체',
  text: '텍스트',
  form: '폼 / 입력',
  media: '미디어',
  semantic: '시맨틱',
  layout: '레이아웃',
  visual: '시각 효과',
  animation: '애니메이션',
  responsive: '반응형',
  core: '기본 문법',
  dom: 'DOM',
  event: '이벤트',
  array: '배열 / 객체',
  async: '비동기',
  concept: '개념',
  pattern: 'UI 패턴',
  debug: '디버깅',
  compare: '비교',
};

const DEFAULT_STATE = {
  section: 'html',
  category: 'all',
  query: '',
};

let state = { ...DEFAULT_STATE };

const grid = document.getElementById('cardsGrid');
const titleEl = document.getElementById('contentTitle');
const descEl = document.getElementById('contentDesc');
const statsEl = document.getElementById('contentStats');
const searchInput = document.getElementById('searchInput');
const mobileBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const localFileNotice = document.getElementById('localFileNotice');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function showFatalError(error) {
  const message = error instanceof Error ? error.message : String(error);

  if (grid) {
    grid.innerHTML = `
      <div class="empty-state" role="status">
        <div class="empty-state-icon" aria-hidden="true">!</div>
        <h3>화면을 불러오지 못했습니다</h3>
        <p>${escapeHtml(message)}</p>
      </div>`;
  }

  if (statsEl) {
    statsEl.textContent = '콘텐츠를 불러오는 중 오류가 발생했습니다.';
  }
}

function parseHash() {
  const hash = location.hash.slice(1).trim();

  if (!hash) {
    state = { ...DEFAULT_STATE };
    return;
  }

  const [section, category = 'all'] = hash.split('-');

  if (!DATA[section]) {
    state = { ...DEFAULT_STATE };
    return;
  }

  const hasCategory = category === 'all' || DATA[section].some(item => item.category === category);

  state.section = section;
  state.category = hasCategory ? category : 'all';
}

function pushHash() {
  const categoryPart = state.category === 'all' ? '' : `-${state.category}`;
  const nextHash = `${state.section}${categoryPart}`;

  if (location.hash.slice(1) !== nextHash) {
    location.hash = nextHash;
  }
}

function updateStats(result, total) {
  const categoryLabel = CATEGORY_LABELS[state.category] || state.category;
  statsEl.textContent = state.query
    ? `"${state.query}" 검색 결과 ${result.length}개`
    : `${categoryLabel} ${result.length} / ${total}`;
}

function render() {
  const all = DATA[state.section] || [];
  const filtered = state.category === 'all'
    ? all
    : all.filter(item => item.category === state.category);
  const result = filterItems(filtered, state.query);

  const meta = SECTION_META[state.section];
  titleEl.textContent = meta.title;
  descEl.textContent = meta.desc;
  updateStats(result, all.length);

  if (mainContent) {
    mainContent.dataset.section = state.section;
  }

  renderCards(result, grid);
}

function safeRender() {
  try {
    render();
  } catch (error) {
    console.error(error);
    showFatalError(error);
  }
}

function syncSidebarActive() {
  document.querySelectorAll('.nav-section-title').forEach(button => {
    const isActive = button.dataset.section === state.section;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-expanded', String(isActive));

    const chevron = button.querySelector('.nav-chevron');
    if (chevron) {
      chevron.textContent = isActive ? '▾' : '▸';
    }
  });

  document.querySelectorAll('.nav-sub-list').forEach(list => {
    const section = list.id.replace('-subnav', '');
    const isActiveSection = section === state.section;
    list.classList.toggle('collapsed', !isActiveSection);
  });

  document.querySelectorAll('.nav-sub-item').forEach(button => {
    const isActive =
      button.dataset.section === state.section &&
      button.dataset.category === state.category;

    button.classList.toggle('active', isActive);

    if (isActive) {
      button.setAttribute('aria-current', 'page');
    } else {
      button.removeAttribute('aria-current');
    }
  });
}

function openMobileSidebar() {
  sidebar.classList.add('open');
  mobileBtn.setAttribute('aria-expanded', 'true');
  document.body.classList.add('nav-open');
}

function closeMobileSidebar() {
  sidebar.classList.remove('open');
  mobileBtn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
}

function toggleMobileSidebar() {
  const isOpen = sidebar.classList.contains('open');
  if (isOpen) {
    closeMobileSidebar();
  } else {
    openMobileSidebar();
  }
}

function resetSearch() {
  state.query = '';
  searchInput.value = '';
}

function focusMainHeading() {
  if (!mainContent) return;
  mainContent.focus({ preventScroll: true });
}

function applySectionChange(section, category = 'all') {
  state.section = section;
  state.category = category;
  resetSearch();
  pushHash();
  syncSidebarActive();
  safeRender();
  closeMobileSidebar();
  focusMainHeading();
}

function bindEvents() {
  document.querySelectorAll('.nav-section-title').forEach(button => {
    button.addEventListener('click', () => {
      applySectionChange(button.dataset.section, 'all');
    });
  });

  document.querySelectorAll('.nav-sub-item').forEach(button => {
    button.addEventListener('click', () => {
      applySectionChange(button.dataset.section, button.dataset.category);
    });
  });

  let searchTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = searchInput.value.trim();
      safeRender();
    }, 150);
  });

  window.addEventListener('hashchange', () => {
    parseHash();
    syncSidebarActive();
    safeRender();
  });

  mobileBtn.addEventListener('click', toggleMobileSidebar);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMobileSidebar();
    }
  });

  document.addEventListener('click', event => {
    if (
      sidebar.classList.contains('open') &&
      !sidebar.contains(event.target) &&
      event.target !== mobileBtn
    ) {
      closeMobileSidebar();
    }
  });
}

function init() {
  try {
    parseHash();
    bindEvents();
    syncSidebarActive();
    safeRender();

    if (location.protocol === 'file:' && localFileNotice) {
      localFileNotice.hidden = false;
    }
  } catch (error) {
    console.error(error);
    showFatalError(error);
  }
}

init();
