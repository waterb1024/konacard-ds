// KONA Nest 배포용 정적 서버 — storybook-static 을 서빙한다 (의존성 없음).
//
// `serve` 대신 직접 둔 이유:
//   - serve 는 기본으로 iframe.html → /iframe 301 리다이렉트를 하며 ?id= 를 버린다.
//     v0.1.0 에서 이 301 을 받은 브라우저는 그것을 영구 기억하므로, /iframe 으로 와도
//     iframe.html 을 돌려줘야 본문이 뜬다 (serve 의 rewrite 는 .html 대상에서 동작하지 않음).
//   - /health 에 X-App-Commit 헤더를 실어 배포 버전 대조가 되게 한다.
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "storybook-static");
const PORT = process.env.PORT || 3000;
const COMMIT = process.env.APP_COMMIT || "";

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".map": "application/json; charset=utf-8",
};

const ASSETS = path.join(ROOT, "assets") + path.sep;

function send(res, file) {
  const ext = path.extname(file);
  res.writeHead(200, {
    "Content-Type": TYPES[ext] || "application/octet-stream",
    // 이름에 해시가 붙는 assets/ 만 길게 캐시. index.json(메뉴 목록)·html·로고 등은
    // 이름이 고정이라 매번 확인해야 재배포가 바로 보인다
    "Cache-Control": file.startsWith(ASSETS) ? "public, max-age=31536000, immutable" : "no-cache",
  });
  fs.createReadStream(file).pipe(res);
}

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);

    if (urlPath === "/health") {
      res.writeHead(200, COMMIT ? { "X-App-Commit": COMMIT } : {});
      return res.end("ok");
    }

    // 옛 301 을 기억한 브라우저는 ?id= 없이 /iframe 으로 온다 → 상위(manager) 주소의 ?path= 로
    // 보여 줄 문서를 복원하고, 그 301 이 기억되지 않은 새 주소(r=1 추가)로 넘긴다
    if (urlPath === "/iframe") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
      return res.end(`<!doctype html><script>
var q = "viewMode=docs&id=introduction--docs&"; // ?path= 가 없는 첫 화면(루트) 기본값
try {
  var p = new URLSearchParams(parent.location.search).get("path") || "";
  var m = p.match(/^\\/(docs|story)\\/(.+)$/);
  if (m) q = "viewMode=" + m[1] + "&id=" + encodeURIComponent(m[2]) + "&";
} catch (e) {}
location.replace("/iframe.html?" + q + "r=1");
</script>`);
    }

    const file = path.normalize(path.join(ROOT, urlPath));
    if (!file.startsWith(ROOT)) {
      res.writeHead(403);
      return res.end();
    }
    fs.stat(file, (err, st) => {
      if (!err && st.isFile()) return send(res, file);
      send(res, path.join(ROOT, "index.html"));
    });
  })
  .listen(PORT, () => console.log("listening on " + PORT));
