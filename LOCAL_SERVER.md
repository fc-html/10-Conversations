Local development server commands
===============================

Use one of these simple commands from the project root (where `page3.html` lives) to serve files over HTTP. Serving over HTTP avoids fetch/CORS issues that can prevent the export/download flow from working.

Common quick commands (port 8000):

- Python 3 (recommended):

  python3 -m http.server 8000

- Python 3 (bind to all interfaces):

  python3 -m http.server 8000 --bind 0.0.0.0

- Python 2 (older systems):

  python -m SimpleHTTPServer 8000

- PHP built-in server:

  php -S localhost:8000

- Node (http-server):

  npx http-server . -p 8000

- Node (serve):

  npx serve . -l 8000

- live-reload during development (live-server):

  npx live-server --port=8000

How to use
----------
1. Open a terminal in the repository folder containing `page3.html`.
2. Run one of the commands above.
3. Open your browser to: http://localhost:8000/page3.html

Script helper
-------------
If you prefer a helper script, run `scripts/start-server.sh` (it will try Python 3, then Python, then npx http-server):

  bash scripts/start-server.sh 8000

Notes
-----
- If a browser blocks an automatic download, use the debug panel (bottom-right) to copy logs and try the fallback link opened in a new tab.
- Always run the server from the project root so relative asset paths resolve correctly.
