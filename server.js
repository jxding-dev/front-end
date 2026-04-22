const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT) || 3456;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
};

function send(res, status, body, contentType = 'text/plain; charset=utf-8') {
  res.writeHead(status, {
    'Content-Type': contentType,
    'Cache-Control': 'public, max-age=0, must-revalidate',
  });

  res.end(body);
}

function resolvePath(urlPath) {
  const cleanPath = decodeURIComponent((urlPath || '/').split('?')[0]);
  const relativePath = cleanPath === '/' ? '/index.html' : cleanPath;
  const fullPath = path.normalize(path.join(ROOT, relativePath));

  if (!fullPath.startsWith(ROOT)) {
    return null;
  }

  return fullPath;
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url);

  if (!filePath) {
    send(res, 403, 'Forbidden');
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      send(res, 404, 'Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readError, data) => {
      if (readError) {
        send(res, 500, 'Server error');
        return;
      }

      send(res, 200, data, contentType);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Frontend Reference server running at http://localhost:${PORT}`);
});
