export const jsData = [
  {
    id: 'variables-and-types',
    section: 'js',
    category: 'core',
    title: 'var / let / const, 데이터 타입, typeof, 형변환',
    description: '변수 선언 방식과 기본 데이터 타입, `typeof`, `Number()`, `String()`, `Boolean()` 같은 형변환을 함께 정리한 카드입니다.',
    code: `var legacy = 'var';
let score = 100;
const isOpen = true;

const valueMap = {
  string: '안녕하세요',
  number: 42,
  boolean: false,
  nullValue: null,
  undefinedValue: undefined,
  object: { name: '김' },
  array: [1, 2, 3],
};

console.log(typeof valueMap.string);
console.log(typeof valueMap.number);
console.log(typeof valueMap.boolean);
console.log(typeof valueMap.nullValue);
console.log(Array.isArray(valueMap.array));

console.log(Number('123'));
console.log(String(456));
console.log(Boolean('문자열'));`,
    runnable: true,
    runCode: `console.log(typeof '안녕하세요');
console.log(typeof 123);
console.log(Array.isArray([1, 2, 3]));
console.log(Number('12') + 3);
console.log(String(false));
console.log(Boolean(0), Boolean(1));`,
  },
  {
    id: 'operators-control-flow',
    section: 'js',
    category: 'core',
    title: '연산자, 조건문, 반복문',
    description: '산술, 비교, 논리, 삼항 연산자부터 `if`, `switch`, `for`, `while`, `for...of`, `for...in`까지 한 번에 훑어보는 카드입니다.',
    code: `const a = 10;
const b = '10';

console.log(a + 5, a - 3, a * 2, a / 2, a % 3);
console.log(a == b);
console.log(a === b);

const guestName = '' || '손님';
const theme = null ?? '다크';
let nickname;
nickname ??= '익명';
const sizeLabel = a > 5 ? '크다' : '작다';

if (a > 5) {
  console.log('if 블록 실행');
} else {
  console.log('else 블록 실행');
}

switch (sizeLabel) {
  case '크다':
    console.log('switch 조건 일치');
    break;
  default:
    console.log('기본값 실행');
}

for (let i = 0; i < 3; i++) console.log(i);

let count = 2;
while (count > 0) {
  console.log('while 반복', count);
  count--;
}

for (const value of ['가', '나']) console.log(value);
for (const key in { x: 1, y: 2 }) console.log(key);`,
    runnable: true,
    runCode: `const value = 0;
console.log(value || 100);
console.log(value ?? 100);
let nick;
nick ??= '손님';
console.log(nick);
console.log(10 == '10', 10 === '10');
for (const n of [1, 2, 3]) console.log('for...of 반복', n);
for (const key in { a: 1, b: 2 }) console.log('for...in 반복', key);`,
  },
  {
    id: 'functions-scope-this',
    section: 'js',
    category: 'core',
    title: '함수, 기본값, 스코프, 호이스팅, this, IIFE, strict mode',
    description: '함수 선언식과 표현식, 화살표 함수, 기본 매개변수, 블록 스코프, 호이스팅, `this`, 즉시 실행 함수, `"use strict"`를 함께 다룹니다.',
    code: `"use strict";

function add(a = 0, b = 0) {
  return a + b;
}

const multiply = function (a, b) {
  return a * b;
};

const divide = (a, b) => a / b;

console.log(add(2, 3));
console.log(multiply(2, 4));
console.log(divide(10, 2));

if (true) {
  let blockScoped = 'let';
  var functionScoped = 'var';
  console.log(blockScoped);
}
console.log(functionScoped);

sayHello();
function sayHello() {
  console.log('안녕하세요');
}

const user = {
  name: '이서준',
  say() {
    console.log(this.name);
  },
};
user.say();

(function () {
  console.log('즉시 실행 함수');
})();`,
    runnable: true,
    runCode: `"use strict";
function greet(name = '손님') {
  return '안녕하세요 ' + name;
}
const arrow = () => '화살표 함수';
console.log(greet());
console.log(greet('김민지'));
console.log(arrow());
(function () { console.log('즉시 실행 함수 실행'); })();`,
  },
  {
    id: 'destructuring-spread-optional',
    section: 'js',
    category: 'core',
    title: '구조분해할당, spread/rest, 템플릿 리터럴, optional chaining',
    description: '구조분해할당, 스프레드 문법, rest parameter, 템플릿 리터럴, optional chaining, nullish coalescing을 한 카드에 모았습니다.',
    code: `const user = {
  name: '김민지',
  age: 20,
  address: { city: '서울' },
};

const { name, age, address: { city } } = user;
const [first, second, ...rest] = [10, 20, 30, 40];

const cloned = { ...user, age: 21 };
const merged = [...rest, 50];

function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

const message = \`\${name} 님은 \${city}에 살고 있습니다.\`;
const postalCode = user?.address?.zip ?? '알 수 없음';

console.log(name, age, city);
console.log(first, second, rest);
console.log(cloned);
console.log(merged);
console.log(sum(1, 2, 3, 4));
console.log(message, postalCode);`,
    runnable: true,
    runCode: `const person = { name: '박지훈', address: null };
console.log(person?.address?.city ?? '도시 정보 없음');
console.log([1, 2, ...[3, 4]].join(','));
console.log((function (...nums) {
  return nums.reduce((a, b) => a + b, 0);
})(1, 2, 3));`,
  },
  {
    id: 'dom-selection-traversal',
    section: 'js',
    category: 'dom',
    title: 'document, window, DOM 선택과 탐색',
    description: '`querySelector`, `getElementById`, `closest`, `matches`, `children`, 형제 요소 탐색 등 DOM을 찾고 이동하는 메서드를 정리했습니다.',
    code: `const card = document.querySelector('.card');
const buttons = document.querySelectorAll('button');
const title = document.getElementById('title');
const items = document.getElementsByClassName('item');
const listItems = document.getElementsByTagName('li');

console.log(window.innerWidth);
console.log(document.title);
console.log(buttons.length, items.length, listItems.length);

console.log(card.parentNode);
console.log(card.parentElement);
console.log(card.children);
console.log(card.firstChild);
console.log(card.lastChild);
console.log(card.nextSibling);
console.log(card.previousSibling);
console.log(card.nextElementSibling);
console.log(card.previousElementSibling);

console.log(card.matches('.card.active'));
console.log(card.closest('.panel'));`,
    runnable: true,
    runCode: `const wrap = document.createElement('div');
wrap.innerHTML = '<section class="box"><p class="target">안녕하세요</p><span>다음 요소</span></section>';
const target = wrap.querySelector('.target');
console.log(target.parentElement.tagName);
console.log(target.closest('.box').className);
console.log(target.matches('.target'));`,
  },
  {
    id: 'dom-manipulation-content',
    section: 'js',
    category: 'dom',
    title: '내용 변경, 스타일, 클래스, 속성, 생성/삭제',
    description: '`textContent`, `innerHTML`, `value`, `classList`, 속성 제어, `createElement`, `append`, `remove`, `replaceWith` 같은 DOM 조작 기본기를 담았습니다.',
    code: `const input = document.querySelector('input');
const box = document.querySelector('.box');
const list = document.querySelector('.list');

box.textContent = '<b>텍스트만</b>';
box.innerText = '보이는 텍스트';
box.innerHTML = '<strong>HTML</strong>';
input.value = '안녕하세요';

box.style.color = 'tomato';
box.classList.add('active');
box.classList.remove('disabled');
box.classList.toggle('open');
console.log(box.classList.contains('active'));

box.setAttribute('data-id', '42');
console.log(box.getAttribute('data-id'));
box.removeAttribute('data-id');

const item = document.createElement('li');
item.textContent = '새 항목';
list.append(item);
list.appendChild(document.createElement('li'));
list.prepend(document.createElement('li'));

const replacement = document.createElement('div');
replacement.textContent = '대체 요소';
box.replaceWith(replacement);
item.remove();`,
    runnable: true,
    runCode: `const box = document.createElement('div');
box.textContent = '<b>안전</b>';
box.classList.add('card', 'active');
box.setAttribute('data-role', '예제');
console.log(box.textContent);
console.log(box.className);
console.log(box.getAttribute('data-role'));`,
  },
  {
    id: 'events-basics',
    section: 'js',
    category: 'event',
    title: '이벤트 등록과 이벤트 객체',
    description: '`addEventListener`, `removeEventListener`, `click`, `input`, `submit`, 키보드/마우스 이벤트와 `event.target`, `event.currentTarget`을 정리했습니다.',
    code: `const button = document.querySelector('#btn');
const input = document.querySelector('#search');
const form = document.querySelector('form');

function onClick(event) {
  console.log(event.type, event.target, event.currentTarget);
}

button.addEventListener('click', onClick);
button.removeEventListener('click', onClick);

input.addEventListener('input', event => console.log(event.target.value));
input.addEventListener('change', event => console.log('변경', event.target.value));
form.addEventListener('submit', event => console.log('제출', event));
document.addEventListener('keydown', event => console.log(event.key));
document.addEventListener('keyup', event => console.log(event.key));
button.addEventListener('mouseenter', () => console.log('마우스 진입'));
button.addEventListener('mouseleave', () => console.log('마우스 이탈'));
button.addEventListener('mouseover', () => console.log('마우스 올림'));
button.addEventListener('mouseout', () => console.log('마우스 나감'));
window.addEventListener('scroll', () => console.log('스크롤'));`,
    runnable: true,
    runCode: `const button = document.createElement('button');
button.addEventListener('click', event => {
  console.log(event.type, event.target.tagName, event.currentTarget.tagName);
});
button.click();`,
  },
  {
    id: 'event-flow-delegation',
    section: 'js',
    category: 'event',
    title: 'preventDefault, stopPropagation, 버블링, 캡처링, 위임, once/passive',
    description: '이벤트 흐름을 다루는 핵심 개념입니다. 기본 동작 막기, 전파 중단, 이벤트 위임, `once`, `passive` 옵션까지 포함합니다.',
    code: `form.addEventListener('submit', event => {
  event.preventDefault();
});

child.addEventListener('click', event => {
  event.stopPropagation();
});

parent.addEventListener('click', () => {
  console.log('버블링 단계');
});

parent.addEventListener('click', () => {
  console.log('캡처링 단계');
}, true);

list.addEventListener('click', event => {
  const item = event.target.closest('li');
  if (!item) return;
  console.log('이벤트 위임', item.dataset.id);
});

window.addEventListener('scroll', onScroll, { passive: true });
button.addEventListener('click', onFirstClick, { once: true });`,
    runnable: true,
    runCode: `const list = document.createElement('ul');
list.innerHTML = '<li data-id="1">가</li><li data-id="2">나</li>';
list.addEventListener('click', event => {
  const item = event.target.closest('li');
  if (item) console.log(item.dataset.id);
});
list.querySelector('[data-id="2"]').click();`,
  },
  {
    id: 'array-methods',
    section: 'js',
    category: 'array',
    title: '배열 메서드와 Array.isArray',
    description: '`push`, `splice`, `map`, `filter`, `reduce`, `some`, `every`, `flat`, `flatMap`, `Array.isArray`처럼 자주 쓰는 배열 메서드를 정리했습니다.',
    code: `const arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.shift();
arr.unshift(0);

const removed = arr.splice(1, 1, 99);
const copied = arr.slice();
const sorted = [3, 1, 2].sort((a, b) => a - b);
const reversed = [...sorted].reverse();

console.log(arr.includes(99));
console.log(arr.indexOf(99));
console.log(arr.find(n => n > 1));
console.log(arr.filter(n => n > 1));
console.log(arr.map(n => n * 2));
arr.forEach(n => console.log(n));
console.log(arr.reduce((sum, n) => sum + n, 0));
console.log(arr.some(n => n > 50));
console.log(arr.every(n => n >= 0));
console.log([1, [2, [3]]].flat(2));
console.log(['가 나', '다 라'].flatMap(v => v.split(' ')));
console.log(Array.isArray(arr));`,
    runnable: true,
    runCode: `const nums = [1, 2, 3, 4];
console.log(nums.map(n => n * 10));
console.log(nums.filter(n => n % 2 === 0));
console.log(nums.reduce((a, b) => a + b, 0));
console.log(Array.isArray(nums));`,
  },
  {
    id: 'object-copy-clone',
    section: 'js',
    category: 'array',
    title: 'Object.keys / values / entries / assign / 복사',
    description: '객체 순회 메서드와 얕은 복사, 깊은 복사, `structuredClone` 차이를 함께 정리한 카드입니다.',
    code: `const user = { name: '김민지', age: 20 };

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.assign({}, user, { age: 21 }));

const shallow = { nested: { x: 1 } };
const shallowCopy = { ...shallow };
const deepCopy = structuredClone(shallow);

shallowCopy.nested.x = 99;
console.log(shallow.nested.x);

deepCopy.nested.x = 1;
console.log(deepCopy.nested.x);`,
    runnable: true,
    runCode: `const data = { a: 1, b: 2 };
console.log(Object.keys(data).join(','));
console.log(Object.values(data).join(','));
console.log(Object.entries(data).length);`,
  },
  {
    id: 'async-basics',
    section: 'js',
    category: 'async',
    title: '동기 / 비동기, 콜백 함수, 타이머',
    description: '콜백 함수와 `setTimeout`, `setInterval`을 통해 동기 코드와 비동기 코드가 실행되는 흐름을 이해하는 카드입니다.',
    code: `console.log('동기 1');
setTimeout(() => console.log('비동기 콜백'), 0);
console.log('동기 2');

const timerId = setTimeout(() => {
  console.log('한 번 실행');
}, 1000);

clearTimeout(timerId);

const intervalId = setInterval(() => {
  console.log('반복 실행');
}, 500);

setTimeout(() => clearInterval(intervalId), 3000);`,
    runnable: true,
    runCode: `console.log('에이');
setTimeout(() => console.log('씨'), 0);
console.log('비');`,
  },
  {
    id: 'promise-fetch-json',
    section: 'js',
    category: 'async',
    title: 'Promise, async/await, Promise.all, Promise.race, fetch, JSON',
    description: 'Promise 체인, `async/await`, 병렬 처리, `fetch`, `JSON.stringify`, `JSON.parse`를 함께 보여주는 카드입니다.',
    code: `const promise = new Promise((resolve) => {
  resolve('완료');
});

promise
  .then(value => console.log(value))
  .catch(error => console.error(error))
  .finally(() => console.log('마지막 처리'));

async function loadUser(id) {
  const response = await fetch('/api/users/' + id);
  return response.json();
}

Promise.all([loadUser(1), loadUser(2)]).then(console.log);

Promise.race([
  fetch('/slow'),
  new Promise((_, reject) => setTimeout(() => reject(new Error('시간 초과')), 3000)),
]).catch(console.error);

const json = JSON.stringify({ ok: true });
const parsed = JSON.parse(json);`,
    runnable: true,
    runCode: `const p1 = Promise.resolve('첫 번째');
const p2 = new Promise(resolve => setTimeout(() => resolve('두 번째'), 10));
Promise.all([p1, p2]).then(values => console.log(values.join(',')));`,
  },
  {
    id: 'error-handling-storage',
    section: 'js',
    category: 'async',
    title: 'try...catch vs .catch, localStorage, sessionStorage',
    description: '에러 처리 방식 두 가지와 브라우저 저장소인 `localStorage`, `sessionStorage` 사용법을 함께 정리했습니다.',
    code: `async function loadData() {
  try {
    const response = await fetch('/api/data');
    return await response.json();
  } catch (error) {
    console.error('try...catch 오류', error);
  }
}

fetch('/api/data')
  .then(res => res.json())
  .catch(error => console.error('.catch 오류', error));

localStorage.setItem('theme', '다크');
sessionStorage.setItem('draft', JSON.stringify({ title: '메모' }));

console.log(localStorage.getItem('theme'));
console.log(JSON.parse(sessionStorage.getItem('draft')));`,
    runnable: true,
    runCode: `localStorage.setItem('demo', '확인');
sessionStorage.setItem('temp', '123');
console.log(localStorage.getItem('demo'));
console.log(sessionStorage.getItem('temp'));`,
  },
  {
    id: 'cookies-basics',
    section: 'js',
    category: 'concept',
    title: '쿠키, 세션, 로컬스토리지 비교',
    description: '브라우저 저장 방식의 차이를 이해하는 카드입니다. 쿠키는 요청과 함께 전송될 수 있고, 로컬스토리지는 브라우저에만 저장됩니다.',
    code: `document.cookie = 'theme=dark; path=/; max-age=3600';
console.log(document.cookie);

sessionStorage.setItem('draft', '안녕하세요');
localStorage.setItem('theme', '다크');

console.log(sessionStorage.getItem('draft'));
console.log(localStorage.getItem('theme'));

// Cookie: 서버 요청에 포함될 수 있음
// Session Storage: 탭이 닫히면 사라짐
// Local Storage: 브라우저에 더 오래 유지됨`,
    runnable: true,
    runCode: `document.cookie = 'demo=ok; path=/';
console.log(document.cookie.includes('demo=ok'));
sessionStorage.setItem('draft', '1');
localStorage.setItem('theme', '다크');
console.log(sessionStorage.getItem('draft'));
console.log(localStorage.getItem('theme'));`,
  },
  {
    id: 'browser-web-concepts',
    section: 'js',
    category: 'concept',
    title: '브라우저 / 웹 개념',
    description: 'DOM, BOM, 렌더링, 리플로우, 리페인트, 이벤트 루프, 저장소, CORS, URL, HTTP 상태코드, SPA/MPA, CSR/SSR 같은 핵심 웹 개념을 묶었습니다.',
    code: `console.log(document.title);
console.log(window.location.href);

// Reflow: 레이아웃을 다시 계산
// Repaint: 색상과 그림자만 다시 그림
// Event Loop: 콜스택이 비면 큐의 작업 실행
// Garbage Collection: 더 이상 참조되지 않는 메모리 정리

const absoluteUrl = 'https://example.com/users';
const relativeUrl = '/users/1';

const request = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

const response = {
  status: 200,
  body: { ok: true },
};

// SPA: 한 페이지 안에서 화면 전환
// MPA: 페이지 이동마다 새 문서 로드
// CSR: 브라우저에서 렌더링
// SSR: 서버에서 렌더링`,
    runnable: true,
    runCode: `console.log(location.protocol);
console.log(location.pathname);
console.log('상태코드:', 200, 404, 500);`,
  },
  {
    id: 'interaction-animation-performance',
    section: 'js',
    category: 'pattern',
    title: '애니메이션, 스크롤, UI 패턴, 성능',
    description: '탭, 아코디언, 드롭다운, 토글 메뉴, `requestAnimationFrame`, `scrollIntoView`, `IntersectionObserver`, throttle, debounce를 한 카드에 모았습니다.',
    code: `tabs.forEach(tab => {
  tab.addEventListener('click', () => activateTab(tab.dataset.target));
});

accordionButton.addEventListener('click', () => {
  panel.hidden = !panel.hidden;
});

dropdownButton.addEventListener('click', () => menu.classList.toggle('open'));
toggleButton.addEventListener('click', () => nav.classList.toggle('open'));

requestAnimationFrame(() => {
  box.style.transform = 'translateX(100px) scale(1.1) rotate(5deg)';
  box.style.opacity = '0.8';
});

section.scrollIntoView({ behavior: 'smooth' });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});

function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, delay = 200) {
  let locked = false;
  return (...args) => {
    if (locked) return;
    locked = true;
    fn(...args);
    setTimeout(() => { locked = false; }, delay);
  };
}`,
    runnable: true,
    runCode: `let count = 0;
function throttle(fn, delay = 20) {
  let locked = false;
  return () => {
    if (locked) return;
    locked = true;
    fn();
    setTimeout(() => { locked = false; }, delay);
  };
}
const run = throttle(() => {
  count += 1;
  console.log('실행', count);
}, 20);
run();
run();
setTimeout(run, 30);`,
  },
  {
    id: 'ui-patterns-modal-slider',
    section: 'js',
    category: 'pattern',
    title: 'UI 패턴: 모달, 슬라이더, 탭, 아코디언',
    description: '실무에서 자주 만드는 상호작용 UI 패턴을 모았습니다. 모달 열기/닫기, 슬라이더 이동, 탭 전환, 아코디언 토글 구조를 빠르게 훑을 수 있습니다.',
    code: `openButton.addEventListener('click', () => {
  modal.hidden = false;
});

closeButton.addEventListener('click', () => {
  modal.hidden = true;
});

prevButton.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  renderSlide(index);
});

nextButton.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  renderSlide(index);
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => activateTab(tab.dataset.target));
});

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    panel.hidden = !panel.hidden;
  });
});`,
    runnable: true,
    runCode: `let index = 0;
const slides = ['첫 번째', '두 번째', '세 번째'];
function next() {
  index = (index + 1) % slides.length;
  console.log('슬라이드', slides[index]);
}
const modal = { hidden: true };
modal.hidden = false;
console.log('모달 열림', !modal.hidden);
next();
next();`,
  },
  {
    id: 'debugging-devtools',
    section: 'js',
    category: 'debug',
    title: '디버깅 / 개발 도구',
    description: '`console.log`, `console.table`, `console.error`와 DevTools의 Elements, Network, Console 패널에서 무엇을 확인하는지 정리한 카드입니다.',
    code: `const users = [
  { id: 1, name: '김민지' },
  { id: 2, name: '이서준' },
];

console.log('기본 로그');
console.table(users);
console.error('예시 오류');

// Elements: DOM과 CSS 확인
// Console: 코드 실행, 에러 메시지 확인
// Network: 요청, 응답, 상태코드, payload 확인
// 이벤트 확인: Event Listeners 패널 또는 콘솔 로그 사용`,
    runnable: true,
    runCode: `console.log('안녕하세요');
console.table([{ id: 1, name: '가' }, { id: 2, name: '나' }]);
console.error('예시 오류');`,
  },
  {
    id: 'frequent-comparisons',
    section: 'js',
    category: 'compare',
    title: '자주 헷갈리는 비교',
    description: '`textContent` vs `innerText`, `querySelector` vs `querySelectorAll`, `forEach` vs `map`, `null` vs `undefined`, `==` vs `===`처럼 자주 헷갈리는 개념을 모았습니다.',
    code: `// textContent: 순수 텍스트 기준
// innerText: 화면에 보이는 텍스트 기준
// innerHTML: HTML 문자열을 해석

// querySelector: 첫 번째 요소 1개
// querySelectorAll: 일치하는 요소 전체(NodeList)

// forEach: 순회용, 반환값 없음
// map: 변환용, 새 배열 반환

// null: 의도적으로 비운 값
// undefined: 아직 값이 없음

// == : 느슨한 비교
// ===: 엄격한 비교

// absolute: 가장 가까운 positioned 조상 기준
// fixed: viewport 기준

// transition: 상태 변화에 반응
// animation: keyframes로 독립 실행

// display:none: 레이아웃에서도 사라짐
// visibility:hidden: 자리는 유지

// margin: 바깥 여백
// padding: 안쪽 여백`,
    runnable: true,
    runCode: `console.log([1, 2, 3].forEach(() => {}));
console.log([1, 2, 3].map(n => n * 2));
console.log(null == undefined, null === undefined);
console.log('display:none은 자리도 사라지고, visibility:hidden은 자리는 유지됩니다.');`,
  },
];
