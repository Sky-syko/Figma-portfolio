# Deploy Your Portfolio to Vercel

## Quick Deployment Steps

### Method 1: Direct Deployment (Easiest)

1. **Download this project**
   - Use the download/export feature in Figma Make
   - You'll get a zip file with all your code

2. **Create a GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up for free

3. **Create a new repository**
   - Click the "+" icon → "New repository"
   - Name it something like `portfolio`
   - Set it to Public
   - Click "Create repository"

4. **Upload your files to GitHub**
   - On your new repo page, click "uploading an existing file"
   - Drag and drop all your project files
   - Click "Commit changes"

5. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and use your GitHub account
   - Click "Add New..." → "Project"
   - Select your portfolio repository
   - Click "Deploy"
   - Wait 1-2 minutes... Done! 🎉

6. **Your site is live!**
   - Vercel will give you a free URL like: `your-portfolio.vercel.app`
   - Share this URL with anyone!

### Method 2: Command Line (For Developers)

If you're comfortable with the terminal:

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project folder
cd your-project-folder

# Deploy
vercel

# Follow the prompts and your site will be live!
```

## Adding a Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (you'll need to purchase one from GoDaddy, Namecheap, etc.)
4. Follow Vercel's DNS configuration instructions

## Updating Your Site

After deployment, whenever you want to update:

1. Make changes to your code in Figma Make
2. Download the updated files
3. Push to GitHub (or drag/drop new files on GitHub)
4. Vercel automatically rebuilds and deploys! ✨

## Troubleshooting

**Issue:** Build fails
- Check that all dependencies are listed
- Make sure there are no syntax errors

**Issue:** Site loads but looks broken
- Check browser console for errors
- Verify all image URLs are accessible

**Issue:** Need help?
- Check Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel has great free support for hobby projects

## Your Current Setup

- Framework: React + Tailwind CSS
- Components: Fully standalone, all dependencies included
- Ready to deploy: Yes! ✅

Enjoy your new portfolio website! 🚀
