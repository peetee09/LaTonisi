# 🚀 Quick Deployment to cPanel

**5-Minute Deployment Guide for www.latonisi.co.za**

---

## Step 1: Download the Required Files (1 minute)

You need to upload **ONLY** these files to cPanel:

### Required Files:
```
✅ index.html
✅ home.html
✅ services.html
✅ pricing.html
✅ founder.html
✅ enquiry.html
✅ email-test.html
✅ styles.css
✅ script.js
✅ .htaccess
✅ robots.txt
✅ sitemap.xml
✅ logo.png
✅ mzwakhe.jpg
✅ rebecca.jpeg
✅ office-team.jpeg
✅ office2-latonisi.jpeg
✅ .well-known/security.txt (create folder .well-known first)
```

### ❌ Do NOT Upload:
- node_modules/
- .git/
- *.md files (documentation)
- package.json
- UML diagrams
- Pictures and wording.zip

---

## Step 2: Upload to cPanel (2 minutes)

1. **Log in to cPanel**
2. **Open File Manager**
3. **Navigate to** `public_html` folder
4. **Upload all required files** (listed above)
5. **Create** `.well-known` folder (if it doesn't exist)
6. **Upload** `security.txt` into `.well-known/` folder

---

## Step 3: Install SSL Certificate (1 minute)

1. In cPanel, go to **SSL/TLS Status**
2. Click **Run AutoSSL** for `www.latonisi.co.za`
3. Wait for certificate to install (usually instant)

---

## Step 4: Enable HTTPS (30 seconds)

After SSL is installed, edit `.htaccess` and **uncomment** these lines:

Find this section:
```apache
# Force HTTPS redirect (uncomment after SSL certificate is installed)
# <IfModule mod_rewrite.c>
#     RewriteEngine On
#     RewriteCond %{HTTPS} off
#     RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
# </IfModule>
```

Change to:
```apache
# Force HTTPS redirect
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

And find this line:
```apache
# Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```

Change to:
```apache
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```

**Save the file.**

---

## Step 5: Verify Forms Work (1 minute)

**IMPORTANT:** FormSubmit requires one-time email verification!

1. Visit: `https://www.latonisi.co.za/email-test.html`
2. Fill out and submit the form
3. Check `info@latonisi.co.za` inbox
4. Click the activation link from FormSubmit
5. Test the forms again - they should work now!

---

## Step 6: Verify Everything Works (30 seconds)

Visit these URLs to confirm:
- ✅ https://www.latonisi.co.za/ (redirects to home)
- ✅ https://www.latonisi.co.za/home.html
- ✅ https://www.latonisi.co.za/enquiry.html (test the form!)
- ✅ https://www.latonisi.co.za/services.html
- ✅ https://www.latonisi.co.za/robots.txt
- ✅ https://www.latonisi.co.za/sitemap.xml

---

## ✅ Done!

Your website is now live at **https://www.latonisi.co.za**!

### Next Steps (Optional):
- Submit sitemap to Google Search Console
- Test on mobile devices
- Run PageSpeed Insights test
- Share on social media

---

## 🆘 Troubleshooting

### Forms not working?
→ Make sure you completed FormSubmit email verification (Step 5)

### 500 Error?
→ Check .htaccess file permissions (should be 644)
→ Contact hosting support to enable mod_headers

### Images not loading?
→ Check file names match exactly (case-sensitive)
→ Clear browser cache

### Need detailed help?
→ See **CPANEL_DEPLOYMENT_GUIDE.md** for full instructions
→ See **FILES_FOR_CPANEL_DEPLOYMENT.md** for file checklist

---

**Questions?** Email: info@latonisi.co.za

**Total Time:** ~5 minutes ⏱️  
**Difficulty:** Easy 🟢  
**Status:** Ready to Deploy ✅
