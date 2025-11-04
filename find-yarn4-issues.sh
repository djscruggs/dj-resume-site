#!/bin/bash
# Script to find all Yarn 4 resolution issues

echo "Attempting yarn install to find all missing packages..."
rm -f yarn.lock 2>/dev/null

# Try to install and capture all errors
yarn install 2>&1 | grep "No candidates found" | grep -oP "│ \K[^:]+(?=:)" | while read package; do
  echo "Missing: $package"
  # Get the latest version
  version=$(npm view "${package%@npm}" version 2>/dev/null)
  if [ -n "$version" ]; then
    echo "  Latest version: $version"
  fi
done
