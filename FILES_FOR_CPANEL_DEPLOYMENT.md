# Files for cPanel Deployment

This is a comprehensive list of files that should and should not be uploaded to cPanel.

## ✅ UPLOAD THESE FILES

### HTML Files (Required)
- [x] index.html
- [x] home.html
- [x] services.html
- [x] pricing.html
- [x] founder.html
- [x] enquiry.html
- [x] email-test.html

### CSS & JavaScript (Required)
- [x] styles.css
- [x] script.js

### Images (Required)
- [x] logo.png
- [x] mzwakhe.jpg
- [x] rebecca.jpeg
- [x] office-team.jpeg
- [x] office2-latonisi.jpeg

### Configuration Files (Required)
- [x] .htaccess
- [x] robots.txt
- [x] sitemap.xml
- [x] _headers (optional - for Netlify/Cloudflare, not needed for cPanel)

### Security (Required)
- [x] .well-known/security.txt

## ❌ DO NOT UPLOAD THESE FILES

### Development Files
- [ ] node_modules/ (directory)
- [ ] package.json
- [ ] package-lock.json
- [ ] .git/ (directory)
- [ ] .gitignore

### Deployment Configuration (Not for cPanel)
- [ ] railway.toml

### Documentation Files (Not needed on production)
- [ ] README.md
- [ ] START_HERE.md
- [ ] CPANEL_DEPLOYMENT_GUIDE.md
- [ ] FILES_FOR_CPANEL_DEPLOYMENT.md
- [ ] EMAIL_VERIFICATION_GUIDE.md
- [ ] PERFORMANCE_OPTIMIZATIONS.md
- [ ] TESTING_SUMMARY.md
- [ ] VISUAL_FLOW_GUIDE.md

### Design Files (Not needed on production)
- [ ] ACTIVITY DIAGRAM.png
- [ ] CLASS DIAGRAM.png
- [ ] Desktop User Conversion Sequence.png
- [ ] LaTonisi Final Logo.png (this is a larger version, logo.png is sufficient)
- [ ] Mobile User Navigation Sequence.png
- [ ] STATE MACHINE DIAGRAM.png
- [ ] USE CASE DIAGRAM.png
- [ ] Pictures and wording/ (directory)
- [ ] Pictures and wording.zip

## 📋 Quick Deployment Checklist

1. **Create a deployment folder** on your computer
2. **Copy only the files marked with ✅** above into this folder
3. **Maintain directory structure:**
   - Create `.well-known/` folder
   - Put `security.txt` inside `.well-known/`
   - All other files go in the root
4. **Upload to cPanel:**
   - Navigate to `public_html` in File Manager
   - Upload all files from your deployment folder
5. **Verify upload:**
   - Check all HTML files are present
   - Verify `.htaccess` is uploaded (it may be hidden)
   - Confirm `.well-known/security.txt` exists

## 🔍 Verification Commands

After uploading to cPanel, verify these URLs:

### Main Pages
```
https://www.latonisi.co.za/
https://www.latonisi.co.za/home.html
https://www.latonisi.co.za/services.html
https://www.latonisi.co.za/pricing.html
https://www.latonisi.co.za/founder.html
https://www.latonisi.co.za/enquiry.html
```

### Configuration & Security
```
https://www.latonisi.co.za/robots.txt
https://www.latonisi.co.za/sitemap.xml
https://www.latonisi.co.za/.well-known/security.txt
```

### Test Forms
```
https://www.latonisi.co.za/email-test.html
```

## 📊 Total File Count

- **Required files to upload:** ~20 files
- **Total repository files:** ~40+ files
- **Files to exclude:** ~20 files

## 💾 Estimated Upload Size

- **HTML/CSS/JS:** ~100 KB
- **Images:** ~800 KB (optimized)
- **Configuration:** ~10 KB
- **Total:** ~910 KB (under 1 MB - very lightweight!)

## ⚠️ Important Notes

1. **Hidden Files:** `.htaccess` and `.well-known` start with a dot (.), which makes them hidden on some systems. Make sure to:
   - Enable "Show hidden files" in cPanel File Manager
   - Verify they uploaded successfully

2. **File Permissions:**
   - Directories: 755
   - Files: 644

3. **Case Sensitivity:** Linux servers are case-sensitive. Make sure file names match exactly.

4. **SSL/HTTPS:** Some .htaccess directives are commented out until SSL is configured. See CPANEL_DEPLOYMENT_GUIDE.md for details.

---

## 📦 Pre-packaged Deployment ZIP (Recommended)

**File:** `latonisi-cpanel-deployment.zip`

This is a ready-to-deploy ZIP file that includes all required files and:
- ✅ Extracts files directly to the current directory (no nested folder)
- ✅ Maintains proper directory structure (.well-known folder)
- ✅ Includes all required production files
- ✅ Excludes development and documentation files

### How to Use:
1. Download `latonisi-cpanel-deployment.zip` from the repository
2. Upload to cPanel File Manager in `public_html`
3. Right-click the ZIP file and select "Extract"
4. Files will be placed directly in `public_html` without creating an extra folder
5. Delete the ZIP file after extraction

### Regenerating the Deployment ZIP:
If you make changes to the website, you can regenerate the deployment ZIP by running:
```bash
./create-cpanel-deployment.sh
```

This script ensures the ZIP is created correctly without nested folder structure.

---

## 🚨 Common ZIP File Issues

**Problem:** When creating your own ZIP file, extraction creates a nested folder (e.g., "LaTonisi/index.html" instead of "index.html")

**Cause:** The ZIP archive includes a parent folder structure.

**Solution:** 
- Use the provided `latonisi-cpanel-deployment.zip`
- Or run `./create-cpanel-deployment.sh` to create a new one
- Or when creating manually, ensure files are at the root level of the ZIP, not inside a folder

---

**Last Updated:** 2025-12-30
