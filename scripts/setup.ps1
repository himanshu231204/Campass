# Campass - Developer Setup Script (Windows)
# This script sets up the development environment for new contributors

$ErrorActionPreference = "Stop"

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Campass - Developer Setup" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node -v
    $majorVersion = [int]($nodeVersion -replace 'v', '' -split '\.')[0]
    if ($majorVersion -lt 20) {
        Write-Host "Error: Node.js 20+ is required. Current version: $nodeVersion" -ForegroundColor Red
        Write-Host "Please upgrade Node.js from https://nodejs.org/"
        exit 1
    }
    Write-Host "✓ Node.js $nodeVersion installed" -ForegroundColor Green
} catch {
    Write-Host "Error: Node.js is not installed." -ForegroundColor Red
    Write-Host "Please install Node.js 20+ from https://nodejs.org/"
    exit 1
}

# Check if npm is installed
Write-Host "Checking npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm -v
    Write-Host "✓ npm $npmVersion installed" -ForegroundColor Green
} catch {
    Write-Host "Error: npm is not installed." -ForegroundColor Red
    exit 1
}

# Check if Git is installed
Write-Host "Checking Git..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✓ $gitVersion installed" -ForegroundColor Green
} catch {
    Write-Host "Error: Git is not installed." -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com/"
    exit 1
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Installing Dependencies" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Install npm dependencies
Write-Host "Installing npm packages..." -ForegroundColor Yellow
npm install
Write-Host "✓ Dependencies installed" -ForegroundColor Green

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Setup Complete!" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Your development environment is ready!" -ForegroundColor Green
Write-Host ""
Write-Host "Available commands:"
Write-Host "  npm start          - Start Expo dev server"
Write-Host "  npm run android    - Run on Android"
Write-Host "  npm run ios        - Run on iOS"
Write-Host "  npm run web        - Run on Web"
Write-Host "  npm run lint       - Run ESLint"
Write-Host "  npm run typecheck  - Run TypeScript check"
Write-Host "  npm test           - Run tests"
Write-Host ""
Write-Host "Happy coding!" -ForegroundColor Green
