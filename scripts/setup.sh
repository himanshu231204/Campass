#!/bin/bash

# Campass - Developer Setup Script
# This script sets up the development environment for new contributors

set -e

echo "=================================="
echo "  Campass - Developer Setup"
echo "=================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
echo -e "${YELLOW}Checking Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js is not installed.${NC}"
    echo "Please install Node.js 20+ from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo -e "${RED}Error: Node.js 20+ is required. Current version: $(node -v)${NC}"
    echo "Please upgrade Node.js from https://nodejs.org/"
    exit 1
fi
echo -e "${GREEN}✓ Node.js $(node -v) installed${NC}"

# Check if npm is installed
echo -e "${YELLOW}Checking npm...${NC}"
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is not installed.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ npm $(npm -v) installed${NC}"

# Check if Git is installed
echo -e "${YELLOW}Checking Git...${NC}"
if ! command -v git &> /dev/null; then
    echo -e "${RED}Error: Git is not installed.${NC}"
    echo "Please install Git from https://git-scm.com/"
    exit 1
fi
echo -e "${GREEN}✓ Git $(git --version | cut -d' ' -f3) installed${NC}"

echo ""
echo "=================================="
echo "  Installing Dependencies"
echo "=================================="
echo ""

# Install npm dependencies
echo -e "${YELLOW}Installing npm packages...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"

echo ""
echo "=================================="
echo "  Setup Complete!"
echo "=================================="
echo ""
echo -e "${GREEN}Your development environment is ready!${NC}"
echo ""
echo "Available commands:"
echo "  npm start          - Start Expo dev server"
echo "  npm run android    - Run on Android"
echo "  npm run ios        - Run on iOS"
echo "  npm run web        - Run on Web"
echo "  npm run lint       - Run ESLint"
echo "  npm run typecheck  - Run TypeScript check"
echo "  npm test           - Run tests"
echo ""
echo "Happy coding! 🚀"
