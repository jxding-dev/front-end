const BASE = `*{box-sizing:border-box;margin:0;padding:0}body{background:#0d1117;color:#e6edf3;font-family:system-ui,sans-serif;padding:12px}`;

export const htmlData = [
  {
    id: 'headings',
    section: 'html',
    category: 'text',
    title: '제목 태그 h1 ~ h6',
    description: '제목 태그는 문서의 구조를 표현할 때 사용합니다. h1은 페이지의 핵심 제목으로 한 번만 쓰고, 아래로 내려가며 계층을 나누는 것이 좋습니다.',
    code: `<h1>페이지의 메인 제목</h1>
<h2>섹션 제목</h2>
<h3>하위 섹션 제목</h3>
<h4>상세 제목</h4>
<h5>작은 제목</h5>
<h6>가장 작은 제목</h6>`,
    preview: `<style>${BASE}h1{font-size:24px;font-weight:800}h2{font-size:20px;font-weight:700}h3{font-size:17px;font-weight:700}h4{font-size:14px;font-weight:600}h5{font-size:12px;font-weight:600}h6{font-size:11px;font-weight:600;color:#7d8590}h1,h2,h3,h4,h5,h6{padding:4px 0;border-bottom:1px solid #21262d}</style><h1>페이지의 메인 제목</h1><h2>섹션 제목</h2><h3>하위 섹션 제목</h3><h4>상세 제목</h4><h5>작은 제목</h5><h6>가장 작은 제목</h6>`,
  },
  {
    id: 'text-inline',
    section: 'html',
    category: 'text',
    title: '문단과 인라인 태그',
    description: 'p, strong, em, span, mark, code, del, ins 같은 태그는 텍스트의 의미를 더 분명하게 표현할 때 사용합니다. 단순한 스타일보다 의미 전달에 맞게 쓰는 것이 좋습니다.',
    code: `<p>이것은 일반 문단입니다.</p>
<p><strong>중요한 내용</strong>은 strong으로 강조합니다.</p>
<p><em>강조하고 싶은 표현</em>은 em으로 표시합니다.</p>
<p><mark>형광펜처럼 보이는 부분</mark>은 mark를 사용합니다.</p>
<p>인라인 코드: <code>console.log("hello")</code></p>
<p><del>삭제된 내용</del>과 <ins>추가된 내용</ins></p>`,
    preview: `<style>${BASE}p{margin-bottom:8px;font-size:13px;line-height:1.7}code{background:#1c2230;padding:1px 6px;border-radius:4px;font-family:monospace;font-size:12px;color:#a78bfa}mark{background:rgba(240,219,79,0.25);color:#f0db4f;padding:1px 3px;border-radius:2px}del{color:#7d8590}ins{color:#3fb950;text-decoration:underline}strong{color:#e6edf3;font-weight:700}em{color:#a78bfa}</style><p>이것은 일반 문단입니다.</p><p><strong>중요한 내용</strong>은 strong으로 강조합니다.</p><p><em>강조하고 싶은 표현</em>은 em으로 표시합니다.</p><p><mark>형광펜처럼 보이는 부분</mark>은 mark를 사용합니다.</p><p>인라인 코드: <code>console.log("hello")</code></p><p><del>삭제된 내용</del>과 <ins>추가된 내용</ins></p>`,
  },
  {
    id: 'links',
    section: 'html',
    category: 'text',
    title: '링크와 a 태그',
    description: 'href로 이동할 주소를 지정합니다. 새 탭으로 여는 외부 링크는 target="_blank"와 rel="noopener noreferrer"를 함께 쓰는 것이 안전합니다.',
    code: `<!-- 기본 링크 -->
<a href="https://example.com">example.com 방문하기</a>

<!-- 새 탭에서 열기 -->
<a href="https://example.com"
   target="_blank"
   rel="noopener noreferrer">
  외부 페이지 열기
</a>

<!-- 같은 페이지 안에서 이동 -->
<a href="#section-id">섹션으로 이동</a>

<!-- 이메일 링크 -->
<a href="mailto:me@example.com">이메일 보내기</a>`,
    preview: `<style>${BASE}a{color:#58a6ff;text-decoration:none;font-size:13px;display:block;margin-bottom:10px;padding:8px 12px;background:#1c2230;border-radius:6px;border:1px solid #30363d;transition:background 0.15s}a:hover{background:#21262d}a::before{content:attr(data-type);font-size:10px;color:#7d8590;display:block;margin-bottom:2px}</style><a href="#" data-type="기본 링크">example.com 방문하기</a><a href="#" data-type="외부 링크">외부 페이지 열기</a><a href="#section-id" data-type="해시 링크">섹션으로 이동</a><a href="mailto:me@example.com" data-type="이메일 링크">이메일 보내기</a>`,
  },
  {
    id: 'lists',
    section: 'html',
    category: 'text',
    title: '목록 ul / ol / dl',
    description: '순서 없는 목록은 ul, 순서 있는 목록은 ol, 용어와 설명 쌍은 dl을 사용합니다. 정보 구조에 따라 알맞은 목록 태그를 선택하면 읽기와 접근성이 좋아집니다.',
    code: `<!-- 순서 없는 목록 -->
<ul>
  <li>항목 A</li>
  <li>항목 B
    <ul>
      <li>중첩 항목</li>
    </ul>
  </li>
</ul>

<!-- 순서 있는 목록 -->
<ol>
  <li>첫 번째 단계</li>
  <li>두 번째 단계</li>
</ol>

<!-- 설명 목록 -->
<dl>
  <dt>HTML</dt>
  <dd>문서의 구조를 정의합니다.</dd>
</dl>`,
    preview: `<style>${BASE}.row{display:flex;gap:16px;flex-wrap:wrap}ul,ol{padding-left:18px;font-size:13px;line-height:2;color:#e6edf3}ul li::marker{color:#7c3aed}ol li::marker{color:#3fb950}dt{font-weight:700;color:#a78bfa;font-size:13px;margin-top:6px}dd{font-size:12px;color:#7d8590;margin-left:12px}.lbl{font-size:10px;color:#6e7681;margin-bottom:4px}</style><div class="row"><div><div class="lbl">ul</div><ul><li>항목 A</li><li>항목 B<ul><li>중첩 항목</li></ul></li><li>항목 C</li></ul></div><div><div class="lbl">ol</div><ol><li>첫 번째 단계</li><li>두 번째 단계</li><li>세 번째 단계</li></ol></div><div><div class="lbl">dl</div><dl><dt>HTML</dt><dd>문서 구조</dd><dt>CSS</dt><dd>화면 표현</dd></dl></div></div>`,
  },
  {
    id: 'table',
    section: 'html',
    category: 'text',
    title: '표 table',
    description: '표는 thead, tbody, tfoot으로 구조를 나누고, 제목 셀은 th, 일반 데이터 셀은 td에 넣습니다. 행과 열로 정리된 정보를 표현할 때 적합합니다.',
    code: `<table>
  <thead>
    <tr>
      <th>이름</th>
      <th>역할</th>
      <th>레벨</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>민지</td>
      <td>프론트엔드</td>
      <td>시니어</td>
    </tr>
    <tr>
      <td>도윤</td>
      <td>백엔드</td>
      <td>미들</td>
    </tr>
  </tbody>
</table>`,
    preview: `<style>${BASE}table{width:100%;border-collapse:collapse;font-size:12px}th{background:#1c2230;color:#a78bfa;font-weight:600;padding:8px 12px;text-align:left;border-bottom:2px solid #30363d}td{padding:8px 12px;border-bottom:1px solid #21262d;color:#e6edf3}tr:hover td{background:#161b22}</style><table><thead><tr><th>이름</th><th>역할</th><th>레벨</th></tr></thead><tbody><tr><td>민지</td><td>프론트엔드</td><td>시니어</td></tr><tr><td>도윤</td><td>백엔드</td><td>미들</td></tr><tr><td>서윤</td><td>디자이너</td><td>주니어</td></tr></tbody></table>`,
  },
  {
    id: 'input',
    section: 'html',
    category: 'form',
    title: 'input 타입',
    description: 'input의 type 속성은 입력 방식과 검증 방식을 바꿉니다. text, email, password, number, date, range, checkbox, color 같은 타입을 자주 사용합니다.',
    code: `<input type="text" placeholder="이름을 입력하세요">
<input type="email" placeholder="name@example.com">
<input type="password" placeholder="비밀번호">
<input type="number" min="0" max="100">
<input type="range" min="0" max="100" value="50">
<input type="date">
<input type="color" value="#7c3aed">
<input type="checkbox" id="agree">
<label for="agree">동의합니다</label>`,
    preview: `<style>${BASE}*{box-sizing:border-box}label{font-size:11px;color:#7d8590;display:block;margin-bottom:3px}input{width:100%;padding:7px 10px;background:#1c2230;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:12px;margin-bottom:10px;outline:none}input[type=checkbox]{width:auto;margin-right:6px}input[type=range]{padding:4px 0;cursor:pointer}input[type=color]{height:32px;cursor:pointer;padding:2px}input:focus{border-color:#7c3aed}.row{display:flex;align-items:center;gap:4px;margin-bottom:8px}.row label{margin:0}</style><label>text</label><input type="text" placeholder="이름 입력"><label>email</label><input type="email" placeholder="email@example.com"><label>range</label><input type="range" min="0" max="100" value="60"><label>color</label><input type="color" value="#7c3aed"><div class="row"><input type="checkbox" id="agree-preview" checked><label for="agree-preview">동의합니다</label></div>`,
  },
  {
    id: 'form-elements',
    section: 'html',
    category: 'form',
    title: 'select / textarea / button',
    description: 'select는 옵션 목록, textarea는 여러 줄 입력, button은 제출이나 취소 같은 액션에 사용합니다. 폼을 구성할 때 함께 자주 등장하는 요소들입니다.',
    code: `<select name="language">
  <option value="">하나를 선택하세요</option>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
</select>

<textarea rows="3" placeholder="간단한 메모를 입력하세요"></textarea>

<button type="submit">제출</button>
<button type="button">취소</button>`,
    preview: `<style>${BASE}*{box-sizing:border-box}label{font-size:11px;color:#7d8590;display:block;margin-bottom:4px}select,textarea{width:100%;padding:8px 10px;background:#1c2230;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:12px;margin-bottom:10px;outline:none}select:focus,textarea:focus{border-color:#7c3aed}textarea{resize:vertical;min-height:60px}.btns{display:flex;gap:8px}.btn{padding:8px 16px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer}.primary{background:#7c3aed;color:white;border:none}.secondary{background:transparent;color:#a78bfa;border:1px solid #7c3aed}</style><label>select</label><select><option value="">하나를 선택하세요</option><option>HTML</option><option>CSS</option><option>JavaScript</option></select><label>textarea</label><textarea placeholder="간단한 메모를 입력하세요"></textarea><label>button</label><div class="btns"><button class="btn primary" type="button">제출</button><button class="btn secondary" type="button">취소</button></div>`,
  },
  {
    id: 'form-label',
    section: 'html',
    category: 'form',
    title: 'form / label / fieldset',
    description: 'label의 for와 input의 id를 연결하면 라벨을 눌러도 입력창에 초점을 줄 수 있습니다. fieldset과 legend는 관련된 폼 요소를 묶을 때 유용합니다.',
    code: `<form action="/submit" method="post">
  <fieldset>
    <legend>회원 정보</legend>

    <label for="username">사용자 이름</label>
    <input
      type="text"
      id="username"
      name="username"
      required
      placeholder="honggildong">

    <label for="email">이메일</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      placeholder="hong@example.com">

    <button type="submit">계정 만들기</button>
  </fieldset>
</form>`,
    preview: `<style>${BASE}*{box-sizing:border-box}fieldset{border:1px solid #30363d;border-radius:8px;padding:14px}legend{color:#a78bfa;font-size:12px;font-weight:600;padding:0 6px}label{font-size:11px;color:#7d8590;display:block;margin:8px 0 3px}input{width:100%;padding:7px 10px;background:#1c2230;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:12px;outline:none}input:focus{border-color:#7c3aed}button{margin-top:10px;width:100%;padding:9px;background:#7c3aed;color:white;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer}</style><form><fieldset><legend>회원 정보</legend><label for="user-preview">사용자 이름</label><input type="text" id="user-preview" placeholder="honggildong"><label for="email-preview">이메일</label><input type="email" id="email-preview" placeholder="hong@example.com"><button type="button">계정 만들기</button></fieldset></form>`,
  },
  {
    id: 'img',
    section: 'html',
    category: 'media',
    title: '이미지 img',
    description: 'src에는 이미지 경로를, alt에는 이미지를 대신 설명할 텍스트를 넣습니다. loading="lazy"를 사용하면 화면 밖 이미지를 늦게 불러올 수 있습니다.',
    code: `<!-- 기본 이미지 -->
<img src="photo.jpg" alt="다리 위에 서 있는 사람">

<!-- 지연 로딩 -->
<img src="photo.jpg" alt="산 풍경" loading="lazy">

<!-- 고해상도 대응 -->
<img
  src="photo.jpg"
  srcset="photo@2x.jpg 2x, photo@3x.jpg 3x"
  alt="상품 사진">

<!-- object-fit 사용 -->
<img
  src="photo.jpg"
  alt="잘라낸 커버 이미지"
  style="width: 200px; height: 120px; object-fit: cover;">`,
    preview: `<style>${BASE}.row{display:flex;gap:12px;flex-wrap:wrap}.item{text-align:center}.img{width:80px;height:80px;border-radius:8px;object-fit:cover;border:1px solid #30363d}.lbl{font-size:10px;color:#6e7681;margin-top:5px}</style><div class="row"><div class="item"><img class="img" style="object-fit:cover" src="https://picsum.photos/seed/a/80" alt="cover"><div class="lbl">object-fit: cover</div></div><div class="item"><img class="img" style="object-fit:contain;background:#1c2230" src="https://picsum.photos/seed/a/80" alt="contain"><div class="lbl">object-fit: contain</div></div><div class="item"><img class="img" style="border-radius:50%" src="https://picsum.photos/seed/b/80" alt="circle"><div class="lbl">border-radius: 50%</div></div></div>`,
  },
  {
    id: 'video',
    section: 'html',
    category: 'media',
    title: '비디오와 오디오',
    description: 'video와 audio는 source 태그와 함께 사용하면 브라우저가 지원하는 형식을 선택할 수 있습니다. controls를 넣으면 기본 재생 UI가 표시됩니다.',
    code: `<video controls width="100%" poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  브라우저가 video 태그를 지원하지 않습니다.
</video>

<!-- 배경 영상 -->
<video autoplay muted loop playsinline>
  <source src="bg.mp4" type="video/mp4">
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>`,
    preview: `<style>${BASE}.box{background:#1c2230;border:1px solid #30363d;border-radius:8px;padding:14px;margin-bottom:10px}.icon{font-size:28px;margin-bottom:8px}.title{font-size:12px;font-weight:600;color:#e6edf3;margin-bottom:4px}.attrs{display:flex;flex-wrap:wrap;gap:4px;margin-top:8px}.attr{font-size:10px;padding:2px 7px;background:rgba(124,58,237,0.15);color:#a78bfa;border-radius:4px}</style><div class="box"><div class="icon">비디오</div><div class="title">&lt;video&gt; 주요 속성</div><div class="attrs"><span class="attr">controls</span><span class="attr">autoplay</span><span class="attr">muted</span><span class="attr">loop</span><span class="attr">poster</span><span class="attr">width/height</span><span class="attr">preload</span></div></div><div class="box"><div class="icon">오디오</div><div class="title">&lt;audio&gt; 주요 속성</div><div class="attrs"><span class="attr">controls</span><span class="attr">autoplay</span><span class="attr">loop</span><span class="attr">muted</span><span class="attr">src</span></div></div>`,
  },
  {
    id: 'semantic',
    section: 'html',
    category: 'semantic',
    title: '시맨틱 레이아웃 태그',
    description: 'header, nav, main, article, section, aside, footer 같은 시맨틱 태그를 사용하면 구조의 의미가 분명해지고 접근성과 SEO에도 도움이 됩니다.',
    code: `<body>
  <header>
    <nav>주요 내비게이션</nav>
  </header>

  <main>
    <article>
      <h1>게시글 제목</h1>
      <section>게시글 내용 섹션</section>
    </article>
    <aside>사이드바</aside>
  </main>

  <footer>푸터</footer>
</body>`,
    preview: `<style>${BASE}*{box-sizing:border-box;font-size:10px;text-align:center}.layout{display:grid;grid-template-rows:auto 1fr auto;gap:4px;height:160px}.header{background:#264de4;border-radius:5px;padding:6px;color:white;font-weight:700}.nav{background:rgba(255,255,255,0.15);border-radius:3px;padding:3px;margin-top:3px}.body{display:grid;grid-template-columns:1fr 60px;gap:4px}.main{background:#1c2230;border-radius:5px;padding:8px;display:flex;flex-direction:column;gap:4px}.article{background:#21262d;border-radius:4px;padding:6px;flex:1}.section{background:#2d333b;border-radius:3px;padding:4px;margin-top:4px;font-size:9px;color:#7d8590}.aside{background:#1c2230;border-radius:5px;padding:8px;font-size:9px;color:#7d8590}.footer{background:#30363d;border-radius:5px;padding:6px;color:#7d8590}</style><div class="layout"><div class="header">header<div class="nav">nav</div></div><div class="body"><div class="main"><div class="article">article<div class="section">section</div></div></div><div class="aside">aside</div></div><div class="footer">footer</div></div>`,
  },
  {
    id: 'meta',
    section: 'html',
    category: 'semantic',
    title: 'head와 meta 태그',
    description: '문서 메타데이터는 head 안에 넣습니다. charset, viewport, description, Open Graph 메타 태그는 실무에서 자주 사용됩니다.',
    code: `<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0">
  <meta
    name="description"
    content="검색 결과에 노출될 짧은 설명">
  <meta property="og:title" content="프론트엔드 레퍼런스">
  <meta property="og:description" content="HTML, CSS, JavaScript 학습 가이드">
  <meta property="og:image" content="thumbnail.jpg">
  <title>페이지 제목</title>
</head>`,
    preview: `<style>${BASE}.card{background:#1c2230;border:1px solid #30363d;border-radius:8px;overflow:hidden;max-width:280px}.og-thumb{height:60px;background:linear-gradient(135deg,#7c3aed,#a78bfa);display:flex;align-items:center;justify-content:center;font-size:22px}.og-body{padding:10px 12px}.og-title{font-size:12px;font-weight:700;color:#e6edf3;margin-bottom:3px}.og-desc{font-size:11px;color:#7d8590;line-height:1.4}.og-url{font-size:10px;color:#6e7681;margin-top:4px}.tags{display:flex;flex-wrap:wrap;gap:4px;margin-top:10px}.tag{font-size:10px;padding:2px 7px;background:#21262d;color:#7d8590;border-radius:4px;border:1px solid #30363d}</style><p style="font-size:10px;color:#6e7681;margin-bottom:8px">Open Graph 미리보기</p><div class="card"><div class="og-thumb">OG</div><div class="og-body"><div class="og-title">프론트엔드 레퍼런스</div><div class="og-desc">HTML, CSS, JavaScript 예제와 미리보기를 제공하는 학습 가이드</div><div class="og-url">example.com</div></div></div><div class="tags" style="margin-top:10px"><span class="tag">charset</span><span class="tag">viewport</span><span class="tag">description</span><span class="tag">og:title</span><span class="tag">og:image</span></div>`,
  },
  {
    id: 'data-attributes',
    section: 'html',
    category: 'semantic',
    title: 'data-* 커스텀 속성',
    description: 'data-* 속성은 HTML 요소에 작은 메타데이터를 저장할 때 유용합니다. JavaScript에서는 dataset API로 읽고 쓸 수 있습니다.',
    code: `<!-- HTML에 커스텀 값 저장 -->
<button
  data-action="delete"
  data-id="42"
  data-confirm="정말 삭제할까요?">
  삭제
</button>

<!-- JavaScript에서 읽기 -->
<script>
  const button = document.querySelector('button');
  console.log(button.dataset.action);  // "delete"
  console.log(button.dataset.id);      // "42"
  console.log(button.dataset.confirm); // "정말 삭제할까요?"

  button.dataset.status = 'loading';
</script>`,
    preview: `<style>${BASE}button{padding:8px 14px;background:#7c3aed;color:white;border:none;border-radius:6px;font-size:12px;cursor:pointer;margin-bottom:10px}pre{background:#1c2230;border-radius:6px;padding:10px 12px;font-size:11px;color:#a78bfa;font-family:monospace;line-height:1.7;border:1px solid #30363d}span.key{color:#79c0ff}span.val{color:#a8d8a8}</style><button data-action="delete" data-id="42" onclick="document.getElementById('out').textContent='action: '+this.dataset.action+', id: '+this.dataset.id">dataset 값 읽기</button><pre><span class="key">dataset.action</span> = "<span class="val">delete</span>"\n<span class="key">dataset.id</span> = "<span class="val">42</span>"\n\n결과: <span id="out" style="color:#f0db4f">버튼을 클릭해 보세요</span></pre>`,
  },
];
