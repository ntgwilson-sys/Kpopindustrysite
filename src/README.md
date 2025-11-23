# K-Pop Industry Website

An informational website about the K-pop industry value chain, featuring sections for pre-production, production, and post-production.

## 🚀 Deploy to GitHub Pages

### Automatic Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the main branch.

**Setup Instructions:**

1. Push this code to a GitHub repository
2. Go to your repository Settings → Pages
3. Under "Build and deployment", set:
   - **Source**: GitHub Actions
4. Push any changes to the `main` branch
5. The site will automatically build and deploy
6. Your site will be available at: `https://[your-username].github.io/[repository-name]/`

### Manual Deployment

If you prefer to deploy manually:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. The built files will be in the `dist` folder. You can deploy this folder to any static hosting service.

## 🛠️ Development

To run the project locally:

```bash
npm install
npm run dev
```

## 📁 Project Structure

- `/App.tsx` - Main application component
- `/components/` - Reusable React components
- `/styles/globals.css` - Global styles and design tokens
- `/.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `/vite.config.js` - Vite configuration for GitHub Pages

## 🎨 Design Features

- Modern design with ASCII art elements
- Custom color palette: F5E6E8, D5C6E0, AAA1C8, 967AA1, 192A51
- Full-screen scrollable sections
- Interactive hover effects
- Dropdown navigation menu
- Responsive layout
