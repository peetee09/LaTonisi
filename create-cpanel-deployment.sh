#!/bin/bash

# Script to create a deployment-ready ZIP file for cPanel
# This ZIP will extract files directly to the current directory without creating a nested folder

echo "Creating cPanel deployment package..."

# Remove old deployment ZIP if it exists
rm -f latonisi-cpanel-deployment.zip

# Create ZIP file with files at root level (no nested folder)
# The -j flag tells zip to store files without directory structure
# However, we need to preserve the .well-known directory structure

# First, create a temporary directory for staging
TEMP_DIR=$(mktemp -d)
echo "Using temporary directory: $TEMP_DIR"

# Copy files to temp directory maintaining only necessary structure
echo "Copying files..."

# HTML files
cp index.html "$TEMP_DIR/"
cp home.html "$TEMP_DIR/"
cp services.html "$TEMP_DIR/"
cp pricing.html "$TEMP_DIR/"
cp founder.html "$TEMP_DIR/"
cp enquiry.html "$TEMP_DIR/"
cp email-test.html "$TEMP_DIR/"

# CSS and JavaScript
cp styles.css "$TEMP_DIR/"
cp script.js "$TEMP_DIR/"

# Images
cp logo.png "$TEMP_DIR/"
cp mzwakhe.jpg "$TEMP_DIR/"
cp rebecca.jpeg "$TEMP_DIR/"
cp office-team.jpeg "$TEMP_DIR/"
cp office2-latonisi.jpeg "$TEMP_DIR/"

# Configuration files
cp .htaccess "$TEMP_DIR/"
cp robots.txt "$TEMP_DIR/"
cp sitemap.xml "$TEMP_DIR/"

# Security directory structure
mkdir -p "$TEMP_DIR/.well-known"
cp .well-known/security.txt "$TEMP_DIR/.well-known/"

# Create ZIP from temp directory
echo "Creating ZIP archive..."
cd "$TEMP_DIR"
zip -r latonisi-cpanel-deployment.zip .
cd - > /dev/null

# Move ZIP to repository root
mv "$TEMP_DIR/latonisi-cpanel-deployment.zip" .

# Clean up temp directory
rm -rf "$TEMP_DIR"

echo ""
echo "✅ Deployment package created: latonisi-cpanel-deployment.zip"
echo ""
echo "📦 Package contents:"
unzip -l latonisi-cpanel-deployment.zip
echo ""
echo "📝 Next steps:"
echo "1. Download latonisi-cpanel-deployment.zip"
echo "2. Upload to cPanel File Manager"
echo "3. Navigate to public_html directory"
echo "4. Click 'Extract' on the ZIP file"
echo "5. Files will be extracted directly to public_html (no nested folder)"
echo ""
