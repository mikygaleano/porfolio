#!/bin/bash

# Define variables
APP_NAME="porfolio"
BUILD_DIR="./build"
REMOTE_HOST="example.com"
REMOTE_DIR="/var/www/${APP_NAME}"
REPO_URL="git@github.com:mikygaleano/porfolio.git"

# Build production code
npm run build

# Add the CNAME file to the build directory
echo "example.com" > ${BUILD_DIR}/CNAME

# Deploy to GitHub Pages
npm run deploy


