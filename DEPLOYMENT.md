# Portfolio Deployment Guide

## 🚀 Deploy to Netlify

Your portfolio is now ready for deployment! Here are the steps:

### **Option 1: Drag & Drop (Easiest)**

1. **Build the project** (already done):
   ```bash
   npm run build
   ```

2. **Go to Netlify** and drag the entire `build` folder to the deployment area

3. **Your site will be live** in seconds!

### **Option 2: Connect to GitHub**

1. **In Netlify**, click "Add new project"
2. **Choose "Import an existing project"**
3. **Connect to GitHub** and select your `portfolio-chris` repository
4. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
5. **Deploy!**

### **Option 3: Upload via File Browser**

1. **Click "browse to upload"** in Netlify
2. **Select the `build` folder** from your project
3. **Upload and deploy**

## 📁 What's in the Build Folder

- `index.html` - Main HTML file
- `static/` - CSS, JS, and assets
- `resume.pdf` - Your resume (if you want to keep it local)
- All other necessary files for deployment

## ⚠️ Important Notes

- **Resume link** currently points to Google Drive (good for updates)
- **All animations** and styling are included
- **Responsive design** works on all devices
- **Build size**: ~70KB (very lightweight!)

## 🔄 Future Updates

1. **Make changes** to your code
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update description"
   git push
   ```
3. **Netlify will auto-deploy** if connected to GitHub

## 🌐 Custom Domain (Optional)

After deployment, you can:
1. **Add a custom domain** in Netlify settings
2. **Point your domain** to Netlify's servers
3. **Enable HTTPS** (automatic with Netlify)

---

**Your portfolio is ready to go live! 🎉**
