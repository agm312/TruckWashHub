# Semi Truck Wash Website

A modern, SEO-optimized website for finding local semi truck wash locations and booking mobile wash services. Built with HTML, CSS, and JavaScript.

## Features

- Responsive design optimized for all devices
- Local truck wash directory for major cities
- Mobile wash booking system
- SEO optimization for better search visibility
- Interactive city search functionality
- Netlify form integration

## Directory Structure

```
/
├── index.html          # Main HTML file
├── style.css          # Styles
├── script.js          # JavaScript functionality
├── netlify.toml       # Netlify configuration
└── README.md          # This file
```

## Local Development

1. Clone the repository
2. Open `index.html` in your browser to view the site
3. Make changes to HTML, CSS, or JavaScript files as needed
4. Test all functionality locally before deploying

## Deployment Instructions

### GitHub Setup

1. Create a new repository on GitHub
2. Initialize your local repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### Netlify Deployment

1. Log in to your Netlify account
2. Click "New site from Git"
3. Choose your GitHub repository
4. Configure build settings:
   - Build command: Leave blank (static site)
   - Publish directory: `/`
5. Click "Deploy site"

### Form Setup

1. After deployment, go to your Netlify site settings
2. Navigate to Forms
3. Enable form detection
4. Forms will automatically work with the configured form in `index.html`

## SEO Information

The site is optimized for the following keywords:
- "semi truck wash"
- "local truck wash"
- "mobile truck wash"
- "truck wash near me"
- City-specific keywords (e.g., "semi truck wash Dallas")

## Maintenance

- Regularly update the city directory with new locations
- Monitor form submissions in Netlify dashboard
- Keep business hours and contact information current
- Test mobile responsiveness after any style changes

## Support

For any issues or questions, please open an issue in the GitHub repository.

## License

MIT License - Feel free to use this code for your own projects. 