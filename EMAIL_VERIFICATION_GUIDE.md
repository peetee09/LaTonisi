# Email Configuration Verification Guide

## FormSubmit.co Email Configuration

The enquiry forms on this website use **FormSubmit.co**, a free form submission service that forwards form submissions to the specified email address.

### Important: First-Time Email Verification Required

When you use FormSubmit.co with an email address for the **first time**, you must verify the email address:

1. **Submit the form once** from the website
2. **Check the inbox** of `info@latonisi.co.za`
3. **Look for an email from FormSubmit.co** with the subject "Activate your form on FormSubmit"
4. **Click the activation link** in that email to verify the email address
5. After verification, all future form submissions will be delivered automatically

### What Has Been Configured

✅ **Captcha Protection**: Enabled (`_captcha: true`) to prevent spam
✅ **Auto-response**: Users receive an automatic confirmation email after submitting
✅ **Honeypot Field**: Added (`_honey`) for additional spam protection
✅ **Reply-To Field**: Email field is named "email" so replies go to the user
✅ **Subject Line**: Clear subject lines for both quick and full enquiry forms
✅ **Redirect**: Users are redirected back to the form with a success message

### Testing the Forms

#### Test the Full Enquiry Form:
1. Go to: https://peetee09.github.io/LaTonisi/enquiry.html
2. Fill out all required fields
3. Submit the form
4. You should see a success message
5. Check `info@latonisi.co.za` inbox for the enquiry
6. Check your test email for the auto-response

#### Test the Quick Enquiry Form:
1. Go to: https://peetee09.github.io/LaTonisi/home.html
2. Scroll to the enquiry section
3. Fill out the quick form
4. Submit the form
5. You should see a success message
6. Check `info@latonisi.co.za` inbox for the enquiry
7. Check your test email for the auto-response

### Troubleshooting

#### No emails received?
1. **Check spam/junk folder** - FormSubmit emails might be filtered
2. **Verify the email** - Look for the activation email if this is first time use
3. **Wait a few minutes** - Email delivery can take 2-5 minutes
4. **Check FormSubmit.co status** - Visit https://formsubmit.co/ to check service status

#### Auto-response not received by user?
- The user should check their spam/junk folder
- The auto-response is sent from FormSubmit.co's servers
- Email may take a few minutes to arrive

#### Form shows captcha but it's annoying?
- Captcha can be disabled by changing `_captcha` value from `true` to `false`
- However, this may increase spam submissions

### Email Configuration Summary

**Full Enquiry Form** (`enquiry.html`):
- Action URL: `https://formsubmit.co/info@latonisi.co.za`
- Subject: "New Full Enquiry - LaTonisi Business Consultants"
- Captcha: Enabled
- Auto-response: Enabled
- Honeypot: Enabled

**Quick Enquiry Form** (`home.html`):
- Action URL: `https://formsubmit.co/info@latonisi.co.za`
- Subject: "New Quick Enquiry - LaTonisi"
- Captcha: Enabled
- Auto-response: Enabled
- Honeypot: Enabled

### Alternative Solutions

If FormSubmit.co doesn't meet your needs, consider:
1. **EmailJS** - Another free email service with better features
2. **Backend API** - Create a custom backend with Node.js/Express
3. **Netlify Forms** - If hosting on Netlify
4. **Google Forms** - Embed a Google Form instead
5. **Custom PHP Script** - If you have PHP hosting

### Support

For FormSubmit.co support, visit: https://formsubmit.co/

For LaTonisi website issues, contact the development team.
