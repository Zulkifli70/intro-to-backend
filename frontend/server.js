import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.FRONTEND_PORT || 3000;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

const serveFile = (response, filePath) => {
  const extension = extname(filePath);
  response.writeHead(200, {
    "Content-Type": mimeTypes[extension] || "text/plain; charset=utf-8",
  });
  createReadStream(filePath).pipe(response);
};

createServer((request, response) => {
  const requestUrl = new URL(request.url || "/", `http://${request.headers.host}`);
  const requestPath = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const cleanPath = normalize(join(__dirname, requestPath));

  if (!cleanPath.startsWith(__dirname) || !existsSync(cleanPath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("File not found");
    return;
  }

  if (statSync(cleanPath).isDirectory()) {
    serveFile(response, join(cleanPath, "index.html"));
    return;
  }

  serveFile(response, cleanPath);
}).listen(PORT, () => {
  console.log(`Frontend ready at http://localhost:${PORT}`);
});
