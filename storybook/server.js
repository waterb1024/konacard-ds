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

function send(res, file) {
  const ext = path.extname(file);
  res.writeHead(200, {
    "Content-Type": TYPES[ext] || "application/octet-stream",
    // html 은 매번 새로 받게 해 재배포가 바로 보이게 한다. 해시 붙은 assets 는 길게 캐시
    "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
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

    if (urlPath === "/iframe") return send(res, path.join(ROOT, "iframe.html"));

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
