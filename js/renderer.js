const PREVIEW_BASE_STYLE = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0d1117;
    color: #e6edf3;
    font-family: system-ui, -apple-system, sans-serif;
    padding: 4px;
    line-height: 1.6;
  }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-thumb { background: #30363d; border-radius: 4px; }
`;

const PREVIEW_MESSAGE_TYPE = 'frontend-ref-preview-height';
let previewListenerAttached = false;

const CATEGORY_CHIPS = {
  all: '전체',
  text: '텍스트',
  form: '폼',
  media: '미디어',
  semantic: '시맨틱',
  layout: '레이아웃',
  visual: '시각 효과',
  animation: '애니메이션',
  responsive: '반응형',
  core: '기본 문법',
  dom: 'DOM',
  event: '이벤트',
  array: '배열/객체',
  async: '비동기',
  concept: '웹 개념',
  pattern: 'UI 패턴',
  debug: '디버깅',
  compare: '비교',
};

function highlight(code, section) {
  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  if (section === 'html') return highlightHTML(escaped);
  if (section === 'css') return highlightCSS(escaped);
  return highlightJS(escaped);
}

function highlightHTML(code) {
  const comments = [];
  const withPlaceholders = code.replace(/(&lt;!--[\s\S]*?--&gt;)/g, match => {
    comments.push(match);
    return `__HTML_COMMENT_${comments.length - 1}__`;
  });

  const highlighted = withPlaceholders.replace(
    /(&lt;\/?)([\w-]+)([\s\S]*?)(&gt;)/g,
    (_, open, tagName, attrText, close) => {
      const formattedAttrs = attrText
        .replace(
          /(\s+)([\w:-]+)(\s*=\s*)("[^"]*"|'[^']*')/g,
          '$1<span class="t-attr">$2</span>$3<span class="t-str">$4</span>'
        )
        .replace(
          /(\s+)([\w:-]+)(?=(\s|\/|$))/g,
          '$1<span class="t-attr">$2</span>'
        );

      return `${open}<span class="t-tag">${tagName}</span>${formattedAttrs}${close}`;
    }
  );

  return highlighted.replace(/__HTML_COMMENT_(\d+)__/g, (_, index) => {
    return `<span class="t-comment">${comments[Number(index)]}</span>`;
  });
}

function highlightCSS(code) {
  return code
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="t-comment">$1</span>')
    .replace(/([.#]?[\w-]+)(\s*\{)/g, '<span class="t-sel">$1</span>$2')
    .replace(/([\w-]+)(\s*:)(?!\s*:)/g, '<span class="t-prop">$1</span>$2')
    .replace(/:\s*([^;{\n]+)/g, (_, value) => `: <span class="t-val">${value}</span>`);
}

function highlightJS(code) {
  return code.replace(
    /(\/\/[^\n]*)|(\/\*[\s\S]*?\*\/)|(`[\s\S]*?`)|('(?:[^'\n\\]|\\.)*')|("(?:[^"\n\\]|\\.)*")|\b(\d+\.?\d*)\b|\b(const|let|var|function|async|await|return|if|else|for|while|new|class|import|export|default|try|catch|throw|typeof|instanceof|true|false|null|undefined)\b|([\w$]+)(?=\s*\()/g,
    (match, lineComment, blockComment, backtick, singleQuote, doubleQuote, number, keyword, fn) => {
      if (lineComment != null) return `<span class="t-comment">${lineComment}</span>`;
      if (blockComment != null) return `<span class="t-comment">${blockComment}</span>`;
      if (backtick != null) return `<span class="t-str">${backtick}</span>`;
      if (singleQuote != null) return `<span class="t-str">${singleQuote}</span>`;
      if (doubleQuote != null) return `<span class="t-str">${doubleQuote}</span>`;
      if (number != null) return `<span class="t-num">${number}</span>`;
      if (keyword != null) return `<span class="t-kw">${keyword}</span>`;
      if (fn != null) return `<span class="t-fn">${fn}</span>`;
      return match;
    }
  );
}

function ensurePreviewHeightListener() {
  if (previewListenerAttached) return;

  window.addEventListener('message', event => {
    const data = event.data;
    if (!data || data.type !== PREVIEW_MESSAGE_TYPE || !data.previewId) return;

    const frame = document.querySelector(`iframe[data-preview-id="${data.previewId}"]`);
    if (!frame) return;

    const nextHeight = Number(data.height);
    if (!Number.isFinite(nextHeight)) return;

    frame.style.height = `${Math.max(96, nextHeight + 12)}px`;
  });

  previewListenerAttached = true;
}

function makePreviewFrame(htmlContent) {
  ensurePreviewHeightListener();

  const frame = document.createElement('iframe');
  const previewId = `preview-${Math.random().toString(36).slice(2, 10)}`;
  frame.title = '예제 미리보기';
  frame.setAttribute('sandbox', 'allow-scripts');
  frame.setAttribute('scrolling', 'auto');
  frame.dataset.previewId = previewId;
  frame.style.cssText = 'width:100%;border:none;display:block;min-height:96px;overflow:auto;';

  frame.srcdoc = `<!DOCTYPE html><html><head>
    <meta charset="UTF-8">
    <style>${PREVIEW_BASE_STYLE}</style>
    <script>
      const previewId = ${JSON.stringify(previewId)};
      const messageType = ${JSON.stringify(PREVIEW_MESSAGE_TYPE)};

      function sendHeight() {
        const body = document.body;
        const root = document.documentElement;
        const height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          root.scrollHeight,
          root.offsetHeight
        );

        parent.postMessage({ type: messageType, previewId, height }, '*');
      }

      window.addEventListener('load', () => {
        sendHeight();
        requestAnimationFrame(sendHeight);
        setTimeout(sendHeight, 80);
        setTimeout(sendHeight, 180);
      });

      window.addEventListener('resize', sendHeight);

      if ('ResizeObserver' in window) {
        const observer = new ResizeObserver(() => sendHeight());
        observer.observe(document.documentElement);
        observer.observe(document.body);
      } else {
        setInterval(sendHeight, 250);
      }
    <\/script>
  </head><body>${htmlContent}</body></html>`;

  return frame;
}

function getKeywordChips(item) {
  const rawParts = item.title
    .split(/[,:()]/)
    .flatMap(part => part.split('/'))
    .flatMap(part => part.split(/\s+\|\s+|\s+vs\s+/i))
    .map(part => part.trim())
    .filter(Boolean);

  const normalized = rawParts
    .map(part => part.replace(/\s{2,}/g, ' '))
    .filter(part => part.length >= 2 && part.length <= 24);

  const chips = [];
  const seen = new Set();

  const pushChip = value => {
    if (!value) return;
    const key = value.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      chips.push(value);
    }
  };

  pushChip(CATEGORY_CHIPS[item.category] || item.category);
  normalized.forEach(pushChip);

  return chips.slice(0, 4);
}

function buildCard(item) {
  const card = document.createElement('article');
  card.className = 'card';
  card.id = `card-${item.id}`;

  const getActiveCode = () => {
    const effectIndex = getActiveEffectIndex(card);
    return item.effects?.[effectIndex]?.code || item.effects?.[0]?.code || item.code;
  };

  const header = document.createElement('div');
  header.className = 'card-header';
  header.innerHTML = `
    <div class="card-title">${escapeHTML(item.title)}</div>
    <span class="card-badge badge-${item.section}">
      ${item.section.toUpperCase()}
    </span>`;

  const desc = document.createElement('p');
  desc.className = 'card-desc';
  desc.textContent = item.description;

  const descToggle = document.createElement('button');
  descToggle.className = 'card-desc-toggle';
  descToggle.type = 'button';
  descToggle.setAttribute('aria-expanded', 'false');
  descToggle.textContent = '더보기';
  descToggle.hidden = true;
  descToggle.addEventListener('click', () => {
    const expanded = card.classList.toggle('desc-expanded');
    descToggle.setAttribute('aria-expanded', String(expanded));
    descToggle.textContent = expanded ? '접기' : '더보기';
  });

  const chips = getKeywordChips(item);
  if (chips.length) {
    const chipsWrap = document.createElement('div');
    chipsWrap.className = 'card-keywords';
    chipsWrap.innerHTML = chips
      .map(chip => `<span class="card-keyword">${escapeHTML(chip)}</span>`)
      .join('');
    card.append(header, chipsWrap, desc, descToggle);
  } else {
    card.append(header, desc, descToggle);
  }

  requestAnimationFrame(() => {
    const isClamped = desc.scrollHeight > desc.clientHeight + 2;
    descToggle.hidden = !isClamped;
  });

  let currentPreviewHTML = null;

  if (item.effects?.length) {
    const bar = document.createElement('div');
    bar.className = 'effects-bar';

    item.effects.forEach((effect, index) => {
      const btn = document.createElement('button');
      btn.className = 'effect-btn' + (index === 0 ? ' active' : '');
      btn.type = 'button';
      btn.textContent = effect.label;
      btn.addEventListener('click', () => {
        bar.querySelectorAll('.effect-btn').forEach(button => {
          button.classList.remove('active');
          button.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        currentPreviewHTML = effect.preview;
        updateActiveTab(card, 'preview');
        renderPreview(card, effect.preview, effect.code);
      });
      btn.setAttribute('aria-pressed', String(index === 0));
      bar.appendChild(btn);
    });

    card.appendChild(bar);
    currentPreviewHTML = item.effects[0].preview;
  } else if (item.preview) {
    currentPreviewHTML = item.preview;
  }

  const tabs = document.createElement('div');
  tabs.className = 'card-tabs';

  const codeTab = makeTabBtn('코드', 'code', true);
  const previewTab = makeTabBtn('미리보기', 'preview', false);
  tabs.append(codeTab, previewTab);
  card.appendChild(tabs);

  const codeWrap = document.createElement('div');
  codeWrap.className = 'card-code-wrap active';
  codeWrap.id = `${item.id}-code-panel`;

  const codeEl = document.createElement('pre');
  codeEl.className = 'card-code';
  codeEl.innerHTML = highlight(getActiveCode(), item.section);

  const copyBtn = document.createElement('button');
  copyBtn.className = 'copy-btn';
  copyBtn.type = 'button';
  copyBtn.setAttribute('aria-label', `${item.title} 코드 복사`);
  copyBtn.textContent = '복사';
  copyBtn.addEventListener('click', () => copyCode(copyBtn, getActiveCode()));

  codeWrap.append(codeEl, copyBtn);
  card.appendChild(codeWrap);

  const previewWrap = document.createElement('div');
  previewWrap.className = 'card-preview-wrap';
  previewWrap.id = `${item.id}-preview-panel`;
  card.appendChild(previewWrap);

  if (item.runnable && item.runCode) {
    const runBar = document.createElement('div');
    runBar.className = 'card-run-bar';

    const runBtn = document.createElement('button');
    runBtn.className = 'run-btn';
    runBtn.type = 'button';
    runBtn.textContent = '실행';

    const output = document.createElement('span');
    output.className = 'run-output';
    output.setAttribute('aria-live', 'polite');

    runBtn.addEventListener('click', () => {
      void runJS(item.runCode, output);
    });

    runBar.append(runBtn, output);
    card.appendChild(runBar);
  }

  codeTab.addEventListener('click', () => {
    updateActiveTab(card, 'code');
    codeEl.innerHTML = highlight(getActiveCode(), item.section);
    codeWrap.classList.add('active');
    previewWrap.classList.remove('active');
  });

  previewTab.addEventListener('click', () => {
    updateActiveTab(card, 'preview');
    codeWrap.classList.remove('active');
    previewWrap.classList.add('active');
    if (!previewWrap.hasChildNodes() && currentPreviewHTML) {
      renderPreview(card, currentPreviewHTML, null);
    }
  });

  return card;
}

function makeTabBtn(label, type, active) {
  const btn = document.createElement('button');
  btn.className = 'tab-btn' + (active ? ' active' : '');
  btn.dataset.tab = type;
  btn.type = 'button';
  btn.setAttribute('aria-pressed', String(active));
  btn.textContent = label;
  return btn;
}

function updateActiveTab(card, activeType) {
  card.querySelectorAll('.tab-btn').forEach(button => {
    const isActive = button.dataset.tab === activeType;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function getActiveEffectIndex(card) {
  const buttons = [...card.querySelectorAll('.effect-btn')];
  return buttons.findIndex(button => button.classList.contains('active'));
}

function renderPreview(card, htmlContent, codeForUpdate) {
  const wrap = card.querySelector('.card-preview-wrap');
  wrap.innerHTML = '';
  wrap.appendChild(makePreviewFrame(htmlContent));

  if (codeForUpdate !== null) {
    const codeEl = card.querySelector('.card-code');
    if (codeEl) {
      const section = card.querySelector('.card-badge').textContent.trim().toLowerCase();
      codeEl.innerHTML = highlight(codeForUpdate, section);
    }
  }
}

async function runJS(code, outputEl) {
  const logs = [];
  const activeTimeouts = new Set();
  const activeIntervals = new Set();
  const startedAt = Date.now();
  let lastUpdateAt = startedAt;
  const IDLE_WAIT_MS = 120;
  const MAX_RUN_MS = 2000;

  const serialize = value => {
    if (typeof value === 'object' && value !== null) {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }

    return String(value);
  };

  const renderLogs = () => {
    outputEl.textContent = logs.join(' | ') || '실행 완료';
    outputEl.className = 'run-output visible';
  };

  const pushLog = (...args) => {
    lastUpdateAt = Date.now();
    logs.push(args.map(serialize).join(' '));
    renderLogs();
  };

  const fakeConsole = {
    log: (...args) => pushLog(...args),
    error: (...args) => pushLog(...args),
    table: (...args) => pushLog(...args),
  };

  const wrappedSetTimeout = (callback, delay = 0, ...args) => {
    const id = window.setTimeout(() => {
      activeTimeouts.delete(id);
      try {
        callback(...args);
      } catch (error) {
        pushLog('오류:', error.message);
      }
    }, delay);

    activeTimeouts.add(id);
    return id;
  };

  const wrappedClearTimeout = id => {
    activeTimeouts.delete(id);
    window.clearTimeout(id);
  };

  const wrappedSetInterval = (callback, delay = 0, ...args) => {
    const id = window.setInterval(() => {
      try {
        callback(...args);
      } catch (error) {
        pushLog('오류:', error.message);
      }
    }, delay);

    activeIntervals.add(id);
    return id;
  };

  const wrappedClearInterval = id => {
    activeIntervals.delete(id);
    window.clearInterval(id);
  };

  try {
    outputEl.textContent = '실행 중...';
    outputEl.className = 'run-output visible';

    const runner = new Function(
      'console',
      'setTimeout',
      'clearTimeout',
      'setInterval',
      'clearInterval',
      `return (async () => { ${code} })();`
    );

    await runner(
      fakeConsole,
      wrappedSetTimeout,
      wrappedClearTimeout,
      wrappedSetInterval,
      wrappedClearInterval
    );

    while (Date.now() - startedAt < MAX_RUN_MS) {
      const isIdle = Date.now() - lastUpdateAt >= IDLE_WAIT_MS;

      if (isIdle && activeTimeouts.size === 0 && activeIntervals.size === 0) {
        break;
      }

      await new Promise(resolve => window.setTimeout(resolve, 25));
    }

    renderLogs();
  } catch (error) {
    outputEl.textContent = '오류: ' + error.message;
    outputEl.className = 'run-output visible error';
  } finally {
    activeTimeouts.forEach(id => window.clearTimeout(id));
    activeIntervals.forEach(id => window.clearInterval(id));
  }
}

async function copyCode(btn, code) {
  try {
    await navigator.clipboard.writeText(code);
    btn.textContent = '복사됨';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '복사';
      btn.classList.remove('copied');
    }, 1800);
  } catch {
    btn.textContent = '실패';
  }
}

export function renderCards(items, container) {
  container.innerHTML = '';

  if (!items.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">⌕</div>
        <h3>검색 결과가 없습니다</h3>
        <p>다른 검색어로 다시 찾아보세요.</p>
      </div>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  items.forEach(item => fragment.appendChild(buildCard(item)));
  container.appendChild(fragment);
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
