#!/usr/bin/env bash
# Setup helper for Portfolio project (macOS / Linux)
# Usage: bash setup.sh

set -e

echo "1) Ensure you have a Node version manager (nvm)"
if command -v nvm >/dev/null 2>&1; then
  echo "nvm is installed"
else
  echo "nvm not found. Installing nvm..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
fi

# Use .nvmrc if present
if [ -f .nvmrc ]; then
  NODE_VERSION=$(cat .nvmrc)
  echo "Using node version from .nvmrc: $NODE_VERSION"
  nvm install $NODE_VERSION
  nvm use $NODE_VERSION
else
  echo ".nvmrc not found. Install any stable Node (>=18 LTS) and re-run."
fi

echo "2) Install dependencies"
if command -v npm >/dev/null 2>&1; then
  npm install
else
  echo "npm not found after nvm install. Ensure your shell has nvm loaded, then re-run this script."
  exit 1
fi

echo "3) Start dev server"
echo "Run: npm run dev"

cat <<'USAGE'

Quick commands to run now (copy/paste):

# Use nvm (if not already in your shell)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Install & use node from .nvmrc
nvm install
nvm use

# Install deps
npm install

# Start dev server
npm run dev

USAGE
