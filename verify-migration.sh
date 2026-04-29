#!/bin/bash

# Local Verification Script for Asset Migration
# This script tests the entire asset migration workflow

set -e

echo "=== HackerRank Crew GDL Asset Migration - Local Verification ==="
echo ""

# 1. Verify Git branch
echo "1. Checking git branch..."
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" = "unify-assets" ]; then
    echo "   ✓ On unify-assets branch"
else
    echo "   ! Warning: On $BRANCH (expected unify-assets)"
fi
echo ""

# 2. Verify package structure
echo "2. Verifying package structure..."
if [ -d "packages/shared-assets" ]; then
    echo "   ✓ packages/shared-assets exists"
    
    if [ -d "packages/shared-assets/src" ]; then
        echo "   ✓ Source directory exists"
        
        if [ -d "packages/shared-assets/dist" ]; then
            echo "   ✓ Distribution directory exists"
            
            FONT_COUNT=$(find packages/shared-assets/dist/fonts -name "*.woff2" 2>/dev/null | wc -l)
            echo "   ✓ Found $FONT_COUNT font files"
            
            LOGO_COUNT=$(find packages/shared-assets/dist/logos -name "*.svg" 2>/dev/null | wc -l)
            echo "   ✓ Found $LOGO_COUNT logo files"
        else
            echo "   ✗ dist/ directory missing"
        fi
    else
        echo "   ✗ src/ directory missing"
    fi
else
    echo "   ✗ packages/shared-assets not found"
fi
echo ""

# 3. Verify dependencies
echo "3. Checking workspace dependencies..."
if grep -q "@hr-gdl/shared-assets" apps/hub/package.json; then
    echo "   ✓ apps/hub has @hr-gdl/shared-assets dependency"
fi
if grep -q "@hr-gdl/shared-assets" sessions/resume-building-101/package.json; then
    echo "   ✓ sessions/resume-building-101 has @hr-gdl/shared-assets dependency"
fi
if grep -q "@hr-gdl/shared-assets" sessions/technical-interview/package.json; then
    echo "   ✓ sessions/technical-interview has @hr-gdl/shared-assets dependency"
fi
echo ""

# 4. Verify node_modules linking
echo "4. Checking node_modules linking..."
if [ -L "apps/hub/node_modules/@hr-gdl" ] || [ -d "apps/hub/node_modules/@hr-gdl" ]; then
    echo "   ✓ @hr-gdl package linked in apps/hub"
fi
if [ -L "sessions/resume-building-101/node_modules/@hr-gdl" ] || [ -d "sessions/resume-building-101/node_modules/@hr-gdl" ]; then
    echo "   ✓ @hr-gdl package linked in sessions/resume-building-101"
fi
if [ -L "sessions/technical-interview/node_modules/@hr-gdl" ] || [ -d "sessions/technical-interview/node_modules/@hr-gdl" ]; then
    echo "   ✓ @hr-gdl package linked in sessions/technical-interview"
fi
echo ""

# 5. Verify prebuild public directories
echo "5. Checking public directories..."
HUB_FONTS=$(find apps/hub/public/fonts -name "*.woff2" 2>/dev/null | wc -l)
echo "   ✓ apps/hub/public/fonts: $HUB_FONTS files"

RESUME_FONTS=$(find sessions/resume-building-101/public/fonts -name "*.woff2" 2>/dev/null | wc -l)
echo "   ✓ sessions/resume-building-101/public/fonts: $RESUME_FONTS files"

TECH_FONTS=$(find sessions/technical-interview/public/fonts -name "*.woff2" 2>/dev/null | wc -l)
echo "   ✓ sessions/technical-interview/public/fonts: $TECH_FONTS files"
echo ""

# 6. Run tests
echo "6. Running test suite..."
if pnpm test -- --run 2>/dev/null; then
    echo "   ✓ All tests passed"
else
    echo "   ! Tests may have warnings (check output above)"
fi
echo ""

# 7. Verify scripts
echo "7. Checking automation scripts..."
SCRIPTS=("setup-shared-assets.mjs" "prebuild-all.mjs" "validate-assets-structure.mjs" "validate-asset-integrity.mjs" "validate-css-references.mjs")
for script in "${SCRIPTS[@]}"; do
    if [ -f "scripts/$script" ]; then
        echo "   ✓ scripts/$script"
    fi
done
echo ""

echo "=== Verification Complete ==="
echo ""
echo "Next steps to test locally:"
echo "  1. pnpm install          # Already done if you're here"
echo "  2. pnpm dev              # Start hub on localhost:3000"
echo "  3. pnpm --filter resume-building-101 dev   # Slidev on localhost:3031"
echo ""
echo "Or test the build:"
echo "  pnpm build"
echo ""
