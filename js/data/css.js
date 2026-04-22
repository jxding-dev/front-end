const BASE = `*{box-sizing:border-box;margin:0;padding:0}body{background:#0d1117;color:#e6edf3;font-family:system-ui,sans-serif;padding:12px}`;

export const cssData = [
  {
    id: 'flexbox',
    section: 'css',
    category: 'layout',
    title: 'Flexbox',
    description: '가로 또는 세로 한 축 기준으로 요소를 정렬하고 간격을 나눌 때 사용합니다. `justify-content`, `align-items`, `flex-direction`, `flex-wrap`이 핵심입니다.',
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}`,
    effects: [
      {
        label: '가운데 정렬',
        code: `display: flex;\njustify-content: center;\nalign-items: center;\ngap: 8px;`,
        preview: `<style>${BASE}.box{width:44px;height:44px;background:#7c3aed;border-radius:8px}.c{display:flex;justify-content:center;align-items:center;gap:8px;height:100px;border:1px dashed #30363d;border-radius:8px}</style><div class="c"><div class="box"></div><div class="box" style="background:#a78bfa"></div><div class="box" style="background:#c4b5fd"></div></div>`,
      },
      {
        label: '양끝 정렬',
        code: `display: flex;\njustify-content: space-between;\nalign-items: center;`,
        preview: `<style>${BASE}.box{width:44px;height:44px;background:#7c3aed;border-radius:8px}.c{display:flex;justify-content:space-between;align-items:center;padding:16px;border:1px dashed #30363d;border-radius:8px}</style><div class="c"><div class="box"></div><div class="box" style="background:#a78bfa"></div><div class="box" style="background:#c4b5fd"></div></div>`,
      },
      {
        label: '세로 쌓기',
        code: `display: flex;\nflex-direction: column;\ngap: 8px;`,
        preview: `<style>${BASE}.box{height:28px;background:#7c3aed;border-radius:6px}.c{display:flex;flex-direction:column;gap:8px;padding:12px;border:1px dashed #30363d;border-radius:8px}</style><div class="c"><div class="box"></div><div class="box" style="background:#a78bfa;width:75%"></div><div class="box" style="background:#c4b5fd;width:55%"></div></div>`,
      },
      {
        label: '줄바꿈',
        code: `display: flex;\nflex-wrap: wrap;\ngap: 8px;`,
        preview: `<style>${BASE}.box{width:50px;height:50px;background:#7c3aed;border-radius:8px}.c{display:flex;flex-wrap:wrap;gap:8px;padding:12px;border:1px dashed #30363d;border-radius:8px;width:180px}</style><div class="c"><div class="box"></div><div class="box" style="background:#a78bfa"></div><div class="box" style="background:#c4b5fd"></div><div class="box" style="background:#8b5cf6"></div><div class="box" style="background:#6d28d9"></div></div>`,
      },
    ],
  },
  {
    id: 'grid',
    section: 'css',
    category: 'layout',
    title: 'CSS Grid',
    description: '행과 열을 동시에 다루는 2차원 레이아웃입니다. `repeat()`, `fr`, `minmax()`를 함께 사용하면 반응형 카드 레이아웃을 만들기 좋습니다.',
    code: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`,
    effects: [
      {
        label: '3열 그리드',
        code: `grid-template-columns: repeat(3, 1fr);\ngap: 8px;`,
        preview: `<style>${BASE}.c{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:10px;border:1px dashed #30363d;border-radius:8px}.box{height:40px;background:#264de4;border-radius:6px;opacity:0.8}</style><div class="c">${[1,2,3,4,5,6].map(()=>'<div class="box"></div>').join('')}</div>`,
      },
      {
        label: '사이드바 레이아웃',
        code: `grid-template-columns: 180px 1fr;`,
        preview: `<style>${BASE}.c{display:grid;grid-template-columns:80px 1fr;gap:8px;padding:10px;border:1px dashed #30363d;border-radius:8px;height:90px}.a{background:#264de4;border-radius:6px;opacity:0.9}.b{background:#7b9fff;border-radius:6px;opacity:0.6}</style><div class="c"><div class="a"></div><div class="b"></div></div>`,
      },
      {
        label: '자동 채우기',
        code: `grid-template-columns:\n  repeat(auto-fill, minmax(120px, 1fr));`,
        preview: `<style>${BASE}.c{display:grid;grid-template-columns:repeat(auto-fill,minmax(60px,1fr));gap:6px;padding:10px;border:1px dashed #30363d;border-radius:8px}.box{height:44px;background:#264de4;border-radius:6px;opacity:0.75}</style><div class="c">${[1,2,3,4,5].map(()=>'<div class="box"></div>').join('')}</div>`,
      },
      {
        label: '영역 병합',
        code: `.header { grid-column: 1 / -1; }\n.sidebar { grid-row: 2 / 4; }`,
        preview: `<style>${BASE}.c{display:grid;grid-template-columns:80px 1fr;grid-template-rows:36px 1fr;gap:6px;padding:10px;border:1px dashed #30363d;border-radius:8px;height:110px}.h{grid-column:1/-1;background:#264de4;border-radius:4px;opacity:0.9;display:flex;align-items:center;justify-content:center;font-size:10px;color:white}.s{background:#7b9fff;border-radius:4px;opacity:0.7}.m{background:#4f6ef7;border-radius:4px;opacity:0.6}</style><div class="c"><div class="h">header</div><div class="s"></div><div class="m"></div></div>`,
      },
    ],
  },
  {
    id: 'flex-growth-alignment',
    section: 'css',
    category: 'layout',
    title: 'flex-grow / shrink / basis / place-items / place-content',
    description: 'Flex 아이템이 남는 공간을 어떻게 나눌지와 기본 크기를 정하는 속성들입니다. Grid에서는 `place-items`, `place-content`로 정렬을 한 번에 지정할 수 있습니다.',
    code: `.item-a {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 120px;
}

.grid {
  display: grid;
  place-items: center;
  place-content: center;
}`,
    effects: [
      {
        label: 'grow 비율',
        code: `.a { flex-grow: 1; }\n.b { flex-grow: 2; }\n.c { flex-grow: 1; }`,
        preview: `<style>${BASE}.row{display:flex;gap:8px;padding:12px;border:1px dashed #30363d;border-radius:8px}.item{height:46px;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:12px;font-weight:700}.a{flex-grow:1;background:#7c3aed}.b{flex-grow:2;background:#a78bfa}.c{flex-grow:1;background:#264de4}</style><div class="row"><div class="item a">1</div><div class="item b">2</div><div class="item c">1</div></div>`,
      },
      {
        label: 'shrink / basis',
        code: `.item {\n  flex: 1 1 120px;\n}`,
        preview: `<style>${BASE}.row{display:flex;gap:8px;padding:12px;border:1px dashed #30363d;border-radius:8px;max-width:260px;overflow:hidden}.item{flex:1 1 120px;height:42px;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:11px}.i1{background:#7c3aed}.i2{background:#a78bfa}.i3{background:#264de4}</style><div class="row"><div class="item i1">120px</div><div class="item i2">120px</div><div class="item i3">120px</div></div>`,
      },
      {
        label: 'place-items',
        code: `display: grid;\nplace-items: center;`,
        preview: `<style>${BASE}.grid{display:grid;place-items:center;height:110px;border:1px dashed #30363d;border-radius:8px}.box{width:54px;height:54px;background:#7c3aed;border-radius:10px}</style><div class="grid"><div class="box"></div></div>`,
      },
      {
        label: 'place-content',
        code: `display: grid;\nplace-content: center;\ngap: 8px;`,
        preview: `<style>${BASE}.grid{display:grid;grid-template-columns:repeat(2,48px);grid-auto-rows:48px;place-content:center;gap:8px;height:140px;border:1px dashed #30363d;border-radius:8px}.box{background:#7c3aed;border-radius:10px}.box:nth-child(2){background:#a78bfa}.box:nth-child(3){background:#264de4}.box:nth-child(4){background:#58a6ff}</style><div class="grid"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div>`,
      },
    ],
  },
  {
    id: 'position',
    section: 'css',
    category: 'layout',
    title: 'position',
    description: '요소의 배치 기준을 정할 때 사용합니다. `relative`, `absolute`, `fixed`, `sticky`의 차이를 이해하면 UI 배치가 쉬워집니다.',
    code: `.parent { position: relative; }

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
}`,
    effects: [
      {
        label: 'absolute 뱃지',
        code: `.parent { position: relative; }\n.badge {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n}`,
        preview: `<style>${BASE}.p{position:relative;display:inline-block;padding:14px 20px;background:#1c2230;border-radius:10px;border:1px solid #30363d;margin:16px}.badge{position:absolute;top:-10px;right:-10px;width:22px;height:22px;background:#f85149;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:white}</style><div style="padding:10px"><div class="p"><span style="color:#7d8590;font-size:13px">알림 카드</span><div class="badge">3</div></div></div>`,
      },
      {
        label: 'sticky 헤더',
        code: `.header {\n  position: sticky;\n  top: 0;\n  background: #161b22;\n}`,
        preview: `<style>${BASE}.scroll-box{height:100px;overflow-y:auto;border-radius:8px;border:1px solid #30363d}.sticky-h{position:sticky;top:0;background:#264de4;padding:6px 12px;font-size:11px;color:white;font-weight:600}.row{padding:8px 12px;font-size:12px;color:#7d8590;border-bottom:1px solid #21262d}</style><div class="scroll-box"><div class="sticky-h">Sticky 헤더</div>${[1,2,3,4,5,6].map(i=>`<div class="row">스크롤 항목 ${i}</div>`).join('')}</div>`,
      },
    ],
  },
  {
    id: 'overflow',
    section: 'css',
    category: 'layout',
    title: 'overflow',
    description: '박스를 넘치는 콘텐츠를 어떻게 처리할지 정합니다. 말줄임, 스크롤 박스, 숨김 처리에서 자주 사용됩니다.',
    code: `.truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 200px;
}`,
    effects: [
      {
        label: '말줄임 처리',
        code: `overflow: hidden;\nwhite-space: nowrap;\ntext-overflow: ellipsis;`,
        preview: `<style>${BASE}.box{background:#1c2230;border-radius:8px;padding:10px 14px;border:1px solid #30363d;margin-bottom:8px;font-size:13px}.cut{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:220px;color:#e6edf3}.full{color:#7d8590;max-width:220px;word-break:break-all}</style><p style="font-size:11px;color:#6e7681;margin-bottom:6px">말줄임 적용</p><div class="box cut">이 텍스트는 너무 길어서 한 줄 안에 들어가지 못하면 말줄임표로 처리됩니다.</div><p style="font-size:11px;color:#6e7681;margin:8px 0 6px">기본 표시</p><div class="box full">이 텍스트는 너무 길어서 한 줄 안에 들어가지 못하면 말줄임표로 처리됩니다.</div>`,
      },
      {
        label: '스크롤 박스',
        code: `overflow-y: auto;\nmax-height: 120px;`,
        preview: `<style>${BASE}.scroll{max-height:100px;overflow-y:auto;background:#1c2230;border-radius:8px;border:1px solid #30363d;padding:8px 14px}.row{font-size:12px;color:#7d8590;padding:5px 0;border-bottom:1px solid #21262d}</style><div class="scroll">${[1,2,3,4,5,6,7].map(i=>`<div class="row">항목 ${i}</div>`).join('')}</div>`,
      },
    ],
  },
  {
    id: 'z-index',
    section: 'css',
    category: 'layout',
    title: 'z-index',
    description: '겹쳐지는 요소의 앞뒤 순서를 정합니다. `position`이 함께 있어야 의미가 있고, 같은 stacking context 안에서 비교됩니다.',
    code: `.modal   { position: fixed; z-index: 1000; }
.overlay { position: fixed; z-index: 999; }
.header  { position: sticky; z-index: 100; }`,
    effects: [
      {
        label: '레이어 순서',
        code: `z-index: 1;\nz-index: 2;\nz-index: 3;`,
        preview: `<style>${BASE}.wrap{position:relative;height:110px;margin:0 16px}.layer{position:absolute;width:80px;height:80px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:white}</style><div class="wrap"><div class="layer" style="left:0;top:5px;background:#e34c26;z-index:1">z:1</div><div class="layer" style="left:35px;top:15px;background:#7c3aed;z-index:2">z:2</div><div class="layer" style="left:70px;top:25px;background:#264de4;z-index:3">z:3</div></div>`,
      },
    ],
  },
  {
    id: 'border-radius',
    section: 'css',
    category: 'visual',
    title: 'border-radius',
    description: '모서리를 둥글게 만들 때 사용합니다. `50%`는 원형, `999px`는 pill 형태를 만들 때 자주 씁니다.',
    code: `.card   { border-radius: 12px; }
.circle { border-radius: 50%; }
.pill   { border-radius: 999px; }`,
    effects: [
      {
        label: '반경 비교',
        code: `border-radius: 0 / 8px / 16px / 50%`,
        preview: `<style>${BASE}.row{display:flex;gap:12px;flex-wrap:wrap;padding:12px;justify-content:center}.box{width:60px;height:60px;background:#7c3aed;display:flex;align-items:center;justify-content:center;font-size:10px;color:rgba(255,255,255,0.7)}</style><div class="row"><div class="box" style="border-radius:0">0</div><div class="box" style="border-radius:8px">8px</div><div class="box" style="border-radius:16px">16px</div><div class="box" style="border-radius:50%">50%</div></div>`,
      },
      {
        label: 'pill 버튼과 배지',
        code: `border-radius: 999px;`,
        preview: `<style>${BASE}.row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:14px;border:1px dashed #30363d;border-radius:8px}</style><div class="row"><button style="padding:9px 20px;background:#7c3aed;border:none;border-radius:999px;color:white;font-size:13px;cursor:pointer;font-weight:600">버튼</button><button style="padding:9px 20px;background:transparent;border:1px solid #7c3aed;border-radius:999px;color:#a78bfa;font-size:13px;cursor:pointer">아웃라인</button><span style="padding:4px 12px;background:rgba(124,58,237,0.2);border-radius:999px;color:#a78bfa;font-size:12px">배지</span><span style="padding:4px 12px;background:rgba(63,185,80,0.15);border-radius:999px;color:#3fb950;font-size:12px">성공</span></div>`,
      },
    ],
  },
  {
    id: 'box-shadow',
    section: 'css',
    category: 'visual',
    title: 'box-shadow',
    description: '카드 그림자, 글로우, inset 효과를 만들 때 사용합니다. 여러 그림자를 쉼표로 이어서 겹칠 수도 있습니다.',
    code: `.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.glow {
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
}`,
    effects: [
      {
        label: '깊이 비교',
        code: `box-shadow: 0 2px 6px rgba(0,0,0,0.3);\nbox-shadow: 0 8px 24px rgba(0,0,0,0.5);\nbox-shadow: 0 20px 48px rgba(0,0,0,0.7);`,
        preview: `<style>${BASE}.row{display:flex;gap:20px;justify-content:center;padding:24px;background:#080c12;border-radius:8px}.box{width:76px;height:76px;background:#161b22;border-radius:10px}</style><div class="row"><div class="box" style="box-shadow:0 2px 6px rgba(0,0,0,0.4)"></div><div class="box" style="box-shadow:0 8px 24px rgba(0,0,0,0.6)"></div><div class="box" style="box-shadow:0 20px 48px rgba(0,0,0,0.8)"></div></div>`,
      },
      {
        label: '컬러 글로우',
        code: `box-shadow: 0 0 20px rgba(124,58,237,0.5);`,
        preview: `<style>${BASE}.row{display:flex;gap:18px;justify-content:center;padding:20px;background:#080c12;border-radius:8px}.box{width:68px;height:68px;border-radius:10px}</style><div class="row"><div class="box" style="background:#7c3aed;box-shadow:0 0 20px rgba(124,58,237,0.6)"></div><div class="box" style="background:#e34c26;box-shadow:0 0 20px rgba(227,76,38,0.6)"></div><div class="box" style="background:#f0db4f;box-shadow:0 0 20px rgba(240,219,79,0.5)"></div><div class="box" style="background:#3fb950;box-shadow:0 0 20px rgba(63,185,80,0.5)"></div></div>`,
      },
      {
        label: '여러 그림자',
        code: `box-shadow:\n  0 1px 2px rgba(0,0,0,0.3),\n  0 6px 16px rgba(124,58,237,0.2),\n  0 0 0 1px rgba(124,58,237,0.1);`,
        preview: `<style>${BASE}.wrap{display:flex;justify-content:center;padding:28px;background:#080c12;border-radius:8px}</style><div class="wrap"><div style="width:130px;height:80px;background:#161b22;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.4),0 6px 16px rgba(124,58,237,0.25),0 0 0 1px rgba(124,58,237,0.15)"></div></div>`,
      },
    ],
  },
  {
    id: 'text-shadow',
    section: 'css',
    category: 'visual',
    title: 'text-shadow',
    description: '텍스트에 그림자나 네온 효과를 줄 때 사용합니다. 제목 강조, 대비 보완, 글로우 표현에 적합합니다.',
    code: `.title {
  color: white;
  text-shadow: 0 2px 12px rgba(124, 58, 237, 0.35);
}`,
    effects: [
      {
        label: '기본 그림자',
        code: `text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);`,
        preview: `<style>${BASE}.wrap{padding:24px;text-align:center;background:#111827;border-radius:10px}.t{font-size:28px;font-weight:800;color:white;text-shadow:0 2px 8px rgba(0,0,0,0.35)}</style><div class="wrap"><div class="t">Shadow Text</div></div>`,
      },
      {
        label: '네온 글로우',
        code: `text-shadow: 0 0 8px rgba(124,58,237,0.5), 0 0 24px rgba(124,58,237,0.35);`,
        preview: `<style>${BASE}.wrap{padding:24px;text-align:center;background:#090b12;border-radius:10px}.t{font-size:26px;font-weight:800;color:#e9ddff;text-shadow:0 0 8px rgba(124,58,237,0.5),0 0 24px rgba(124,58,237,0.35)}</style><div class="wrap"><div class="t">Neon Glow</div></div>`,
      },
    ],
  },
  {
    id: 'background',
    section: 'css',
    category: 'visual',
    title: 'background / gradient',
    description: '단색 배경뿐 아니라 선형, 원형, 다층 그라디언트를 만들 수 있습니다. 카드, 배너, 배경 장식에 자주 씁니다.',
    code: `background: linear-gradient(135deg, #7c3aed, #a78bfa);
background: radial-gradient(circle at 30% 30%, #a78bfa, #4c1d95);`,
    effects: [
      {
        label: '선형 그라디언트',
        code: `background: linear-gradient(135deg, #7c3aed, #a78bfa);`,
        preview: `<style>${BASE}.row{display:flex;flex-wrap:wrap;gap:10px;padding:12px;justify-content:center}.box{width:72px;height:72px;border-radius:10px}</style><div class="row"><div class="box" style="background:linear-gradient(135deg,#7c3aed,#a78bfa)"></div><div class="box" style="background:linear-gradient(135deg,#e34c26,#f0db4f)"></div><div class="box" style="background:linear-gradient(135deg,#0ea5e9,#7c3aed)"></div><div class="box" style="background:linear-gradient(180deg,#1c2230,#0d1117)"></div></div>`,
      },
      {
        label: '원형 그라디언트',
        code: `background: radial-gradient(circle at 30% 30%, #a78bfa, #4c1d95);`,
        preview: `<style>${BASE}.row{display:flex;gap:14px;padding:14px;justify-content:center;flex-wrap:wrap}.box{width:78px;height:78px;border-radius:10px}</style><div class="row"><div class="box" style="background:radial-gradient(circle,#a78bfa,#4c1d95)"></div><div class="box" style="border-radius:50%;background:radial-gradient(circle at 30% 30%,#c4b5fd,#5b21b6)"></div><div class="box" style="background:radial-gradient(ellipse at 50% 0%,#58a6ff,#0d1117)"></div></div>`,
      },
      {
        label: '다층 배경',
        code: `background:\n  radial-gradient(at 20% 30%, #7c3aed 0%, transparent 50%),\n  radial-gradient(at 80% 70%, #e34c26 0%, transparent 50%),\n  #0d1117;`,
        preview: `<style>${BASE}</style><div style="height:100px;border-radius:10px;background:radial-gradient(at 20% 30%,rgba(124,58,237,0.7) 0%,transparent 55%),radial-gradient(at 80% 70%,rgba(227,76,38,0.6) 0%,transparent 55%),#0d1117"></div>`,
      },
    ],
  },
  {
    id: 'transform',
    section: 'css',
    category: 'visual',
    title: 'transform',
    description: '이동, 회전, 크기 조절, 기울이기를 처리합니다. hover 인터랙션과 애니메이션 기본 재료로 많이 쓰입니다.',
    code: `.card:hover {
  transform: translateY(-4px) scale(1.03);
}

.icon {
  transform: rotate(12deg);
}`,
    effects: [
      {
        label: '회전',
        code: `transform: rotate(0deg / 30deg / 90deg);`,
        preview: `<style>${BASE}.row{display:flex;gap:16px;justify-content:center;align-items:center;padding:24px;flex-wrap:wrap}.box{width:52px;height:52px;background:#7c3aed;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:10px;color:rgba(255,255,255,0.8)}</style><div class="row"><div class="box">0deg</div><div class="box" style="transform:rotate(30deg)">30</div><div class="box" style="transform:rotate(90deg)">90</div></div>`,
      },
      {
        label: '이동과 확대',
        code: `transform: translateX(20px) scale(1.08);`,
        preview: `<style>${BASE}.wrap{display:flex;justify-content:center;padding:20px}.box{width:64px;height:64px;background:#7c3aed;border-radius:10px}.moved{transform:translateX(20px) scale(1.08);background:#a78bfa}</style><div class="wrap"><div class="box"></div><div class="box moved"></div></div>`,
      },
      {
        label: '기울이기',
        code: `transform: skew(-10deg);`,
        preview: `<style>${BASE}.wrap{display:flex;justify-content:center;padding:22px}.box{width:78px;height:54px;background:#7c3aed;border-radius:8px;transform:skew(-10deg)}</style><div class="wrap"><div class="box"></div></div>`,
      },
    ],
  },
  {
    id: 'filter',
    section: 'css',
    category: 'visual',
    title: 'filter / backdrop-filter',
    description: '흐림, 밝기, 대비, 그레이스케일 같은 시각 효과를 적용합니다. `backdrop-filter`는 뒤 배경에 유리 효과를 줄 때 유용합니다.',
    code: `.thumb { filter: grayscale(100%); }
.dimmed { filter: brightness(0.6); }
.glass {
  backdrop-filter: blur(12px);
}`,
    effects: [
      {
        label: '필터 갤러리',
        code: `filter: blur / grayscale / brightness / contrast / hue-rotate`,
        preview: `<style>${BASE}.row{display:flex;flex-wrap:wrap;gap:10px;padding:12px;justify-content:center}.item{text-align:center}.box{width:54px;height:54px;background:#7c3aed;border-radius:8px;margin:0 auto 5px}.lbl{font-size:9px;color:#6e7681}</style><div class="row">${[['none','기본'],['blur(3px)','blur'],['grayscale(100%)','gray'],['brightness(1.8)','bright'],['contrast(2)','contrast'],['hue-rotate(90deg)','hue']].map(([f,l])=>`<div class="item"><div class="box" style="filter:${f}"></div><div class="lbl">${l}</div></div>`).join('')}</div>`,
      },
      {
        label: '유리 효과',
        code: `.glass {\n  backdrop-filter: blur(12px);\n  background: rgba(255,255,255,0.08);\n  border: 1px solid rgba(255,255,255,0.18);\n}`,
        preview: `<style>${BASE}.wrap{position:relative;height:100px;border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#7c3aed,#e34c26,#f0db4f)}.glass{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);padding:8px 20px;border-radius:10px;backdrop-filter:blur(12px);background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:white;font-size:12px;font-weight:600;white-space:nowrap}</style><div class="wrap"><div class="glass">Glass Morphism</div></div>`,
      },
    ],
  },
  {
    id: 'pseudo',
    section: 'css',
    category: 'visual',
    title: '::before / ::after',
    description: 'HTML을 추가하지 않고 장식 요소를 붙일 수 있습니다. 밑줄, 따옴표, 배지, 아이콘 장식에 자주 사용합니다.',
    code: `.title::after {
  content: "";
  display: block;
  width: 40px;
  height: 3px;
  background: #7c3aed;
}`,
    effects: [
      {
        label: '제목 장식',
        code: `.title::after { content:""; display:block; width:40px; height:3px; background:#7c3aed; }`,
        preview: `<style>${BASE}.t{position:relative;font-size:16px;font-weight:700;color:#e6edf3;padding-bottom:10px;display:inline-block}.t::after{content:"";display:block;width:42px;height:3px;background:linear-gradient(90deg,#7c3aed,#a78bfa);border-radius:2px;position:absolute;bottom:0;left:0}.q::before{content:'"';font-size:36px;color:#7c3aed;line-height:0;vertical-align:-12px;margin-right:3px}</style><div style="padding:14px"><h3 class="t">제목 스타일</h3><p class="q" style="margin-top:16px;font-size:13px;color:#7d8590;font-style:italic">인용문 스타일 예제입니다.</p></div>`,
      },
    ],
  },
  {
    id: 'transition',
    section: 'css',
    category: 'animation',
    title: 'transition',
    description: '상태가 바뀔 때 부드럽게 이어지는 전환 효과입니다. hover, focus, active 상태를 자연스럽게 보이게 할 때 가장 많이 씁니다.',
    code: `.btn {
  transition: background 0.3s ease,
              transform 0.2s ease,
              box-shadow 0.3s ease;
}`,
    effects: [
      {
        label: '버튼 hover',
        code: `transition: all 0.25s ease;`,
        preview: `<style>${BASE}.btn{padding:11px 24px;background:#7c3aed;color:white;border:none;border-radius:8px;font-size:13px;cursor:pointer;font-weight:600;transition:all 0.25s ease}.btn:hover{background:#6d28d9;transform:translateY(-2px);box-shadow:0 8px 20px rgba(124,58,237,0.4)}</style><div style="display:flex;justify-content:center;padding:24px"><button class="btn">마우스를 올려보세요</button></div>`,
      },
      {
        label: 'easing 비교',
        code: `transition: transform 0.6s linear;\ntransition: transform 0.6s ease;\ntransition: transform 0.6s ease-in-out;`,
        preview: `<style>${BASE}.wrap{padding:10px;background:#0d1117;border-radius:8px}.row{display:flex;align-items:center;gap:8px;margin:5px 0;cursor:pointer}.lbl{width:70px;font-size:10px;color:#6e7681;flex-shrink:0}.track{flex:1;height:22px;display:flex;align-items:center;border-radius:4px;background:#161b22}.dot{width:18px;height:18px;background:#7c3aed;border-radius:50%;flex-shrink:0}.wrap:hover .e1{transform:translateX(180px)}.wrap:hover .e2{transform:translateX(180px)}.wrap:hover .e3{transform:translateX(180px)}.e1{transition:transform 0.7s linear}.e2{transition:transform 0.7s ease}.e3{transition:transform 0.7s ease-in-out}</style><div class="wrap" title="마우스를 올려보세요"><div style="font-size:10px;color:#6e7681;margin-bottom:8px">마우스를 올려보세요</div><div class="row"><span class="lbl">linear</span><div class="track"><div class="dot e1"></div></div></div><div class="row"><span class="lbl">ease</span><div class="track"><div class="dot e2"></div></div></div><div class="row"><span class="lbl">ease-in-out</span><div class="track"><div class="dot e3"></div></div></div></div>`,
      },
    ],
  },
  {
    id: 'delay-and-fill-mode',
    section: 'css',
    category: 'animation',
    title: 'transition-delay / animation-delay / animation-fill-mode',
    description: '효과가 시작되는 시점을 늦추거나, 애니메이션 전후 상태를 유지할지 제어할 때 사용하는 속성들입니다.',
    code: `.card {
  transition: transform 0.3s ease;
  transition-delay: 0.1s;
}

.badge {
  animation: fadeUp 0.5s ease;
  animation-delay: 0.2s;
  animation-fill-mode: both;
}`,
    effects: [
      {
        label: 'transition-delay',
        code: `transition: transform 0.3s ease;\ntransition-delay: 0.12s;`,
        preview: `<style>${BASE}.wrap{display:flex;justify-content:center;padding:22px}.btn{padding:12px 22px;border:none;border-radius:10px;background:#7c3aed;color:white;font-size:13px;font-weight:700;cursor:pointer;transition:transform 0.3s ease, background 0.3s ease;transition-delay:0.12s}.btn:hover{transform:translateY(-4px);background:#6d28d9}</style><div class="wrap"><button class="btn">조금 늦게 반응</button></div>`,
      },
      {
        label: 'animation-delay',
        code: `animation: fadeUp 0.5s ease;\nanimation-delay: 0.25s;`,
        preview: `<style>${BASE}@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}.wrap{display:flex;justify-content:center;padding:24px}.card{padding:14px 20px;border-radius:12px;background:#161b22;border:1px solid #30363d;animation:fadeUp 0.7s ease infinite alternate;animation-delay:0.25s}</style><div class="wrap"><div class="card">delay 적용</div></div>`,
      },
      {
        label: 'fill-mode both',
        code: `animation-fill-mode: both;`,
        preview: `<style>${BASE}@keyframes slideIn{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}.wrap{display:flex;justify-content:center;padding:24px}.chip{padding:10px 16px;border-radius:999px;background:#7c3aed;color:white;font-size:12px;font-weight:700;animation:slideIn 1.2s ease infinite alternate;animation-fill-mode:both}</style><div class="wrap"><div class="chip">both 유지</div></div>`,
      },
    ],
  },
  {
    id: 'animation',
    section: 'css',
    category: 'animation',
    title: '@keyframes / animation',
    description: '여러 단계의 움직임을 정의할 때 사용합니다. 로딩 스피너, 등장 효과, 떠다니는 오브젝트 같은 반복 애니메이션에 적합합니다.',
    code: `@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.element {
  animation: fadeIn 0.4s ease forwards;
}`,
    effects: [
      {
        label: 'fade in',
        code: `@keyframes fadeIn {\n  from { opacity:0; transform:translateY(12px); }\n  to   { opacity:1; transform:translateY(0); }\n}\nanimation: fadeIn 1.2s ease infinite alternate;`,
        preview: `<style>${BASE}@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.el{animation:fadeIn 1.4s ease infinite alternate}</style><div style="display:flex;justify-content:center;padding:22px"><div class="el" style="padding:12px 26px;background:linear-gradient(135deg,#7c3aed,#a78bfa);border-radius:10px;color:white;font-size:13px;font-weight:700">Fade In</div></div>`,
      },
      {
        label: '로딩 스피너',
        code: `@keyframes spin { to { transform: rotate(360deg); } }\n.spinner { animation: spin 1s linear infinite; }`,
        preview: `<style>${BASE}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(0.75);opacity:0.5}}@keyframes bar{0%,100%{transform:scaleY(0.4)}50%{transform:scaleY(1)}}</style><div style="display:flex;gap:24px;justify-content:center;align-items:center;padding:22px"><div style="width:32px;height:32px;border-radius:50%;border:3px solid rgba(124,58,237,0.2);border-top-color:#7c3aed;animation:spin 0.9s linear infinite"></div><div style="width:28px;height:28px;border-radius:50%;background:#7c3aed;animation:pulse 1.4s ease infinite"></div><div style="display:flex;gap:3px;align-items:center"><div style="width:4px;height:24px;background:#7c3aed;border-radius:2px;animation:bar 1s ease infinite"></div><div style="width:4px;height:24px;background:#a78bfa;border-radius:2px;animation:bar 1s ease 0.15s infinite"></div><div style="width:4px;height:24px;background:#c4b5fd;border-radius:2px;animation:bar 1s ease 0.3s infinite"></div></div></div>`,
      },
      {
        label: '둥둥 떠오르기',
        code: `@keyframes float {\n  0%,100% { transform: translateY(0); }\n  50%     { transform: translateY(-12px); }\n}\nanimation: float 2.5s ease-in-out infinite;`,
        preview: `<style>${BASE}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}</style><div style="display:flex;justify-content:center;align-items:center;height:110px"><div style="width:54px;height:54px;background:linear-gradient(135deg,#7c3aed,#a78bfa);border-radius:14px;animation:float 2.5s ease-in-out infinite;box-shadow:0 10px 24px rgba(124,58,237,0.4)"></div></div>`,
      },
      {
        label: '타이핑 효과',
        code: `@keyframes typing {\n  from { width: 0; }\n  to   { width: 100%; }\n}\n.text {\n  overflow: hidden;\n  white-space: nowrap;\n  border-right: 2px solid #7c3aed;\n  animation: typing 2s steps(20) infinite;\n}`,
        preview: `<style>${BASE}@keyframes typing{from{width:0}to{width:100%}}@keyframes blink{0%,100%{border-color:#7c3aed}50%{border-color:transparent}}.type{overflow:hidden;white-space:nowrap;border-right:2px solid #7c3aed;width:0;animation:typing 2.2s steps(18) infinite alternate,blink 0.7s step-end infinite;font-size:14px;font-family:monospace;color:#e6edf3;padding:2px}</style><div style="padding:20px;display:flex;justify-content:center"><div class="type">console.log("Hello!")</div></div>`,
      },
    ],
  },
  {
    id: 'variables',
    section: 'css',
    category: 'visual',
    title: 'CSS 변수 (Custom Properties)',
    description: '`--변수명` 형태로 값을 저장하고 `var()`로 재사용합니다. 색상, 여백, 반경을 공통화할 때 매우 유용합니다.',
    code: `:root {
  --color-primary: #7c3aed;
  --radius: 10px;
  --spacing: 16px;
}

.card {
  border-radius: var(--radius);
  padding: var(--spacing);
  background: var(--color-primary);
}`,
    effects: [
      {
        label: '테마 바꾸기',
        code: `[data-theme="dark"]  { --bg: #0d1117; --text: #e6edf3; }\n[data-theme="light"] { --bg: #ffffff; --text: #0d1117; }`,
        preview: `<style>${BASE}.theme-wrap{display:flex;gap:10px;padding:10px;flex-wrap:wrap}.card{padding:14px 18px;border-radius:10px;font-size:13px;font-weight:600;min-width:100px;text-align:center}.dark{background:#161b22;color:#e6edf3;border:1px solid #30363d}.light{background:#f0f6fc;color:#0d1117;border:1px solid #d0d7de}.purple{background:#7c3aed;color:white}.green{background:#1a4731;color:#3fb950;border:1px solid #3fb950}</style><div class="theme-wrap"><div class="card dark">다크 테마</div><div class="card light">라이트 테마</div><div class="card purple">기본 색상</div><div class="card green">상태 색상</div></div>`,
      },
    ],
  },
  {
    id: 'display-box-model-layout',
    section: 'css',
    category: 'layout',
    title: 'display, box model, position, 정렬',
    description: '`display`, `box-sizing`, `width`, `height`, `margin`, `padding`, `gap`, `align-items`, `justify-content`처럼 레이아웃 기본기를 묶어 보는 카드입니다.',
    code: `.card {
  display: inline-block;
  box-sizing: border-box;
  width: 240px;
  max-width: 100%;
  min-height: 120px;
  margin: 16px;
  padding: 20px;
  border: 1px solid #30363d;
  border-radius: 16px;
}`,
    effects: [
      {
        label: 'block / inline / inline-block',
        code: `display: block;\ndisplay: inline;\ndisplay: inline-block;`,
        preview: `<style>${BASE}.wrap{display:flex;flex-direction:column;gap:10px;padding:12px}.row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.box{padding:10px 14px;background:#161b22;border:1px solid #30363d;border-radius:8px;font-size:12px}.inline span{background:#7c3aed;color:white;padding:6px 10px;border-radius:6px}</style><div class="wrap"><div class="row"><div class="box" style="display:block;width:100%">block</div></div><div class="row inline"><span>inline</span><span>inline</span><span>inline</span></div><div class="row"><div class="box" style="display:inline-block">inline-block</div><div class="box" style="display:inline-block">inline-block</div></div></div>`,
      },
    ],
  },
  {
    id: 'responsive-media-units',
    section: 'css',
    category: 'responsive',
    title: 'media query, mobile first, 단위, calc/clamp',
    description: '반응형에서는 `px`, `rem`, `%`, `vw`, `vh`, `clamp()`, `calc()`를 상황에 맞게 섞어 써야 합니다. 모바일 우선 접근과 함께 보면 이해가 쉽습니다.',
    code: `.title {
  font-size: clamp(1.25rem, 2vw + 1rem, 2.5rem);
  padding: calc(1rem + 1vw);
}

@media (min-width: 768px) {
  .layout {
    display: grid;
    grid-template-columns: 240px 1fr;
  }
}`,
    effects: [
      {
        label: 'mobile first',
        code: `@media (min-width: 768px) { ... }`,
        preview: `<style>${BASE}.wrap{padding:12px}.card{padding:16px;border-radius:12px;background:#161b22;border:1px solid #30363d}.badge{display:inline-block;padding:4px 8px;border-radius:999px;background:#7c3aed;color:white;font-size:11px;margin-bottom:10px}.title{font-size:clamp(18px,2vw+12px,32px);font-weight:700}.desc{font-size:12px;color:#9aa4b2;margin-top:8px}</style><div class="wrap"><div class="card"><div class="badge">mobile first</div><div class="title">clamp() 반응형 텍스트</div><div class="desc">화면이 커질수록 글자 크기가 부드럽게 커집니다.</div></div></div>`,
      },
    ],
  },
  {
    id: 'responsive-images-text',
    section: 'css',
    category: 'responsive',
    title: '이미지, aspect-ratio, object-fit, 텍스트 처리',
    description: '반응형 이미지와 긴 텍스트 처리에 필요한 속성을 묶었습니다. 말줄임, 줄바꿈, 접근성용 숨김 처리까지 함께 자주 사용합니다.',
    code: `.media {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}`,
    effects: [
      {
        label: 'text overflow',
        code: `text-overflow: ellipsis;\n-webkit-line-clamp: 2;`,
        preview: `<style>${BASE}.wrap{display:grid;gap:10px;padding:12px}.box{padding:12px;background:#161b22;border:1px solid #30363d;border-radius:10px;font-size:12px}.one{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.two{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.5;max-width:240px}.break{word-break:break-all;overflow-wrap:anywhere;color:#9aa4b2}</style><div class="wrap"><div class="box one">아주 긴 한 줄 텍스트는 말줄임표로 깔끔하게 처리할 수 있습니다.</div><div class="box two">두 줄 이상 길어지는 설명 텍스트는 line-clamp로 잘라서 카드 높이를 안정적으로 유지할 수 있습니다.</div><div class="box break">really-long-email-address-or-url-example@example-super-long-domain.com</div></div>`,
      },
    ],
  },
  {
    id: 'advanced-effects',
    section: 'css',
    category: 'visual',
    title: '고급 효과와 상태 스타일',
    description: '`text-shadow`, `transition-delay`, `focus`, `pointer-events`, `mix-blend-mode`, `clip-path`, `glassmorphism`, `neumorphism` 같은 고급 표현을 정리한 카드입니다.',
    code: `.title {
  text-shadow: 0 2px 12px rgba(124, 58, 237, 0.35);
}

.button:focus {
  outline: 2px solid #a78bfa;
}

.decor {
  pointer-events: none;
  mix-blend-mode: screen;
}`,
    effects: [
      {
        label: 'glass / neumorphism',
        code: `backdrop-filter: blur(12px);\nbox-shadow: 8px 8px 16px #0b0f14, -8px -8px 16px #1d2530;`,
        preview: `<style>${BASE}.wrap{display:flex;gap:16px;justify-content:center;align-items:center;padding:18px;flex-wrap:wrap;background:linear-gradient(135deg,#0d1117,#1b1035)}.glass{padding:16px 22px;border-radius:16px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.16);backdrop-filter:blur(12px);color:white}.neo{padding:16px 22px;border-radius:18px;background:#151b23;box-shadow:8px 8px 16px rgba(5,8,12,0.9),-8px -8px 16px rgba(34,42,54,0.55);color:#dbe4ee}</style><div class="wrap"><div class="glass">glassmorphism</div><div class="neo">neumorphism</div></div>`,
      },
    ],
  },
];
