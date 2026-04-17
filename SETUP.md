# Local Setup (macOS / Linux)

This repository is a Vite + React portfolio. The project requires Node.js and npm.

Recommended approach: install Node using `nvm` (Node Version Manager).

Commands (copy/paste):

```bash
# Install nvm (if not installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Install and use Node version from .nvmrc
nvm install
nvm use

# Install dependencies
npm install

# Start development server
npm run dev
```

If you prefer Homebrew (macOS):

```bash
brew install node
npm install
npm run dev
```

Notes:
- If you want to run inside Docker instead of installing Node locally, I can add a Dockerfile and docker-compose setup.
- After starting the dev server, open `http://localhost:5173` (default Vite port).
