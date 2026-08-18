#!/usr/bin/env bash
# Simple helper to start a local HTTP server for this project
PORT=${1:-8000}
ROOT_DIR="$(pwd)"

if command -v python3 >/dev/null 2>&1; then
  echo "Starting Python 3 http.server on port $PORT (root: $ROOT_DIR)"
  python3 -m http.server "$PORT"
  exit $?
fi

if command -v python >/dev/null 2>&1; then
  echo "Starting Python SimpleHTTPServer on port $PORT (root: $ROOT_DIR)"
  python -m SimpleHTTPServer "$PORT"
  exit $?
fi

if command -v npx >/dev/null 2>&1; then
  echo "Starting http-server via npx on port $PORT (root: $ROOT_DIR)"
  npx http-server . -p "$PORT"
  exit $?
fi

echo "No suitable server found. Install Python 3 or Node (npx)."
exit 1
