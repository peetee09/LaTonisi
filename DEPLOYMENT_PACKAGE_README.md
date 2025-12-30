# cPanel Deployment Package Generator

This script creates a deployment-ready ZIP file for uploading to cPanel hosting.

## Why This Script?

When creating ZIP files manually, it's easy to accidentally include a parent folder, which causes cPanel to create a nested directory structure when extracting:

❌ **Wrong:** 
```
public_html/
  └── LaTonisi/          ← Extra nested folder created!
      ├── index.html
      ├── home.html
      └── ...
```

✅ **Correct:**
```
public_html/
  ├── index.html
  ├── home.html
  └── ...
```

This script ensures files are packaged correctly at the root level of the ZIP.

## Usage

### Generate New Deployment Package

```bash
./create-cpanel-deployment.sh
```

This will:
1. Create a temporary staging directory
2. Copy all required production files
3. Create `latonisi-cpanel-deployment.zip` with files at root level
4. Show package contents for verification
5. Clean up temporary files

### Deploy to cPanel

1. **Download** the generated `latonisi-cpanel-deployment.zip`
2. **Log in** to cPanel File Manager
3. **Navigate** to `public_html` directory
4. **Upload** the ZIP file
5. **Right-click** the ZIP file and select "Extract"
6. **Verify** files are in `public_html` (not in a subfolder)
7. **Delete** the ZIP file to save space

## What's Included

The deployment package includes:

### HTML Files
- index.html, home.html, services.html, pricing.html
- founder.html, enquiry.html, email-test.html

### Assets
- styles.css, script.js
- logo.png, mzwakhe.jpg, rebecca.jpeg
- office-team.jpeg, office2-latonisi.jpeg

### Configuration
- .htaccess (with security headers)
- robots.txt, sitemap.xml
- .well-known/security.txt

## What's Excluded

The script automatically excludes:
- Development files (package.json, node_modules)
- Documentation (.md files)
- Git files (.git, .gitignore)
- Deployment configs (railway.toml)
- UML diagrams
- Source materials (Pictures and wording folder)

## Troubleshooting

### "Permission denied" Error
Make the script executable:
```bash
chmod +x create-cpanel-deployment.sh
```

### Files Missing After Extraction
Verify ZIP contents before uploading:
```bash
unzip -l latonisi-cpanel-deployment.zip
```

All files should be listed at root level (no parent folder).

### ZIP Too Large
The deployment package should be ~1.4 MB. If larger:
- Ensure you're using the generated ZIP, not manually created
- Check that large files aren't accidentally included

## Manual ZIP Creation (Not Recommended)

If you need to create a deployment ZIP manually:

```bash
# Navigate to repository root
cd /path/to/LaTonisi

# Create ZIP with files at root level
zip latonisi-cpanel-deployment.zip \
  index.html home.html services.html pricing.html founder.html enquiry.html email-test.html \
  styles.css script.js \
  logo.png mzwakhe.jpg rebecca.jpeg office-team.jpeg office2-latonisi.jpeg \
  .htaccess robots.txt sitemap.xml

# Add .well-known directory
zip -r latonisi-cpanel-deployment.zip .well-known/
```

However, using the script is **strongly recommended** to avoid mistakes.

## Version Information

- **Script Version:** 1.0
- **Last Updated:** 2025-12-30
- **Package Size:** ~1.4 MB (compressed)
- **Extracted Size:** ~1.5 MB

## Support

For deployment issues, see:
- `CPANEL_DEPLOYMENT_GUIDE.md` - Complete deployment instructions
- `FILES_FOR_CPANEL_DEPLOYMENT.md` - File checklist
