# cPanel Deployment Guide for LaTonisi Business Consultants

This guide provides step-by-step instructions for deploying the LaTonisi website to www.latonisi.co.za via cPanel file manager.

## Prerequisites

- Access to cPanel for www.latonisi.co.za
- All files from this repository
- SSL certificate installed (recommended for HTTPS)

## Deployment Steps

### 1. Prepare Files for Upload

Ensure you have all these files ready:
- HTML files: `index.html`, `home.html`, `services.html`, `pricing.html`, `founder.html`, `enquiry.html`, `email-test.html`
- CSS: `styles.css`
- JavaScript: `script.js`
- Images: `logo.png`, `mzwakhe.jpg`, `rebecca.jpeg`, `office-team.jpeg`, `office2-latonisi.jpeg`, `LaTonisi Final Logo.png`
- Configuration: `.htaccess`, `robots.txt`, `sitemap.xml`
- Security: `.well-known/security.txt`

**DO NOT upload:**
- `node_modules/` (if present)
- `.git/` directory
- `.gitignore`
- `package.json`, `package-lock.json`
- `railway.toml`
- Documentation files (*.md files)
- UML diagram images
- `Pictures and wording.zip`

### 2. Access cPanel File Manager

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to the `public_html` directory (this is your website's root directory)

### 3. Upload Files

#### Option A: Upload via File Manager (Recommended for First Time)
1. In File Manager, click **Upload** button
2. Select and upload all required files listed above
3. Make sure to maintain the directory structure:
   - Create `.well-known/` folder and upload `security.txt` inside it
   - All other files go in the root `public_html` directory

#### Option B: Upload via FTP
1. Use an FTP client like FileZilla
2. Connect to your hosting account
3. Navigate to `public_html`
4. Upload all files maintaining the directory structure

### 4. Verify .htaccess Configuration

1. In File Manager, locate `.htaccess` file
2. Click **Edit** to verify it contains all security headers
3. **Important:** The .htaccess file includes commented-out HTTPS redirect
4. After SSL certificate is installed, uncomment these lines:

```apache
# Force HTTPS redirect (uncomment after SSL certificate is installed)
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

### 5. Set File Permissions

Ensure proper file permissions:
- **Directories:** 755 (including `.well-known`)
- **Files:** 644 (including `.htaccess`, HTML, CSS, JS, images)

To set permissions in cPanel File Manager:
1. Right-click on a file or folder
2. Select **Change Permissions**
3. Set appropriate values

### 6. Enable SSL Certificate (If Not Already Enabled)

1. In cPanel, go to **SSL/TLS Status**
2. Select your domain `www.latonisi.co.za`
3. Click **Run AutoSSL** to get a free SSL certificate
4. Wait for the certificate to be issued (usually takes a few minutes)

### 7. After SSL is Enabled

1. Edit `.htaccess` file
2. Uncomment the HTTPS redirect section (lines mentioned in step 4)
3. Uncomment the HSTS header in the security headers section:
```apache
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```
4. Save the file

### 8. Test the Website

1. Visit `https://www.latonisi.co.za` in your browser
2. Check that it redirects to the home page
3. Verify all pages load correctly:
   - Home: `https://www.latonisi.co.za/home.html`
   - Services: `https://www.latonisi.co.za/services.html`
   - Pricing: `https://www.latonisi.co.za/pricing.html`
   - Founder: `https://www.latonisi.co.za/founder.html`
   - Enquiry: `https://www.latonisi.co.za/enquiry.html`
4. Test the forms:
   - Quick enquiry form on home page
   - Full enquiry form on enquiry page
5. Verify images load correctly
6. Check mobile responsiveness

### 9. Verify Email Form Functionality

**IMPORTANT:** FormSubmit.co requires email verification

1. Visit `https://www.latonisi.co.za/email-test.html`
2. Fill out and submit the test form
3. Check the `info@latonisi.co.za` inbox
4. Click the activation link from FormSubmit
5. After verification, test the main forms again

This is a **one-time setup** and is crucial for the contact forms to work.

### 10. SEO Verification

1. Submit sitemap to Google Search Console:
   - Sitemap URL: `https://www.latonisi.co.za/sitemap.xml`
2. Verify robots.txt is accessible:
   - URL: `https://www.latonisi.co.za/robots.txt`
3. Check security.txt:
   - URL: `https://www.latonisi.co.za/.well-known/security.txt`

### 11. Performance Testing

1. Run Google PageSpeed Insights: https://pagespeed.web.dev/
2. Check GTmetrix: https://gtmetrix.com/
3. Verify all optimizations are working:
   - GZIP compression enabled
   - Browser caching working
   - Images optimized
   - Security headers present

## Troubleshooting

### Forms Not Working
- Verify FormSubmit email activation (see step 9)
- Check browser console for JavaScript errors
- Ensure FormSubmit.co is not blocked by firewall

### .htaccess Errors (500 Internal Server Error)
- Check if mod_headers is enabled on your server
- Comment out sections one by one to identify the problematic directive
- Contact hosting support to enable required Apache modules

### Images Not Loading
- Verify file names match exactly (case-sensitive)
- Check file permissions (should be 644)
- Clear browser cache

### HTTPS Redirect Not Working
- Verify SSL certificate is installed
- Check if mod_rewrite is enabled
- Ensure .htaccess redirect rules are uncommented

### Security Headers Not Applied
- Verify mod_headers is enabled on your server
- Check .htaccess syntax
- Use online header checker: https://securityheaders.com/

## Post-Deployment Checklist

- [ ] All pages load without errors
- [ ] HTTPS is working (green padlock in browser)
- [ ] Forms are functional and verified with FormSubmit
- [ ] Email notifications are received at info@latonisi.co.za
- [ ] Auto-responses are sent to form submitters
- [ ] Images display correctly on all pages
- [ ] Mobile responsiveness works
- [ ] Security headers are present (check with securityheaders.com)
- [ ] Sitemap submitted to Google Search Console
- [ ] Performance scores are good (90+ on PageSpeed Insights)

## Maintenance

### Regular Tasks
1. **Monthly:** Check form submissions are being received
2. **Quarterly:** Run security scans
3. **Annually:** Update SSL certificate (if not auto-renewed)
4. **As needed:** Update content and images

### Backup Recommendations
- Enable automatic backups in cPanel
- Keep a local copy of all files
- Export database regularly (if applicable in future)

## Security Best Practices

1. Keep cPanel password secure and complex
2. Enable two-factor authentication on cPanel if available
3. Regularly monitor security.txt for vulnerability reports
4. Keep file permissions strict (755 for directories, 644 for files)
5. Never upload sensitive files (credentials, API keys, etc.)

## Support Contacts

- **Hosting Support:** Contact your cPanel hosting provider
- **FormSubmit Issues:** https://formsubmit.co/
- **Technical Issues:** info@latonisi.co.za

## Additional Resources

- [cPanel File Manager Documentation](https://docs.cpanel.net/cpanel/files/file-manager/)
- [Apache .htaccess Guide](https://httpd.apache.org/docs/current/howto/htaccess.html)
- [FormSubmit Documentation](https://formsubmit.co/)
- [Google Search Console](https://search.google.com/search-console)

---

**Last Updated:** 2025-12-30  
**Version:** 1.0  
**Deployment Status:** Ready for Production ✅
