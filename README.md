# LaTonisi Business Consultants

Professional business consulting services website.

## 🚀 Deployment on Railway

This site is configured for easy deployment on [Railway](https://railway.app/).

### Quick Deploy

1. **Connect to Railway**
   - Go to [Railway](https://railway.app/)
   - Sign up or log in with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose this repository

2. **Automatic Configuration**
   - Railway will automatically detect the `railway.toml` configuration
   - The site will build and deploy using the settings in `package.json`
   - A public URL will be generated for your site

3. **Environment Variables**
   - No environment variables are required for this static site
   - Railway will automatically assign a PORT variable

### Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

- `index.html` - Landing page with redirect to home
- `home.html` - Main homepage
- `services.html` - Services page
- `pricing.html` - Pricing information
- `founder.html` - Founder information
- `enquiry.html` - Enquiry form
- `styles.css` - Main stylesheet
- `script.js` - JavaScript functionality
- UML Diagrams (PNG files)

## 🛠️ Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- [serve](https://www.npmjs.com/package/serve) - Static file server

## 📝 License

ISC
