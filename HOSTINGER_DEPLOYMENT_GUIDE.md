# 🚀 Zayrath Group — Hostinger Deployment Guide

This guide provides step-by-step instructions for deploying your high-performance **Zayrath Group** website to **Hostinger** (Shared Hosting, Cloud Hosting, or VPS).

---

## 📦 What Has Been Prepared For You

1. **Production Build (`dist/`)**: Fully optimized, minified HTML, CSS, JS, and high-resolution assets.
2. **One-Click Deployment Archive (`hostinger-deploy.zip`)**: A pre-packaged ZIP containing all production files ready for Hostinger File Manager.
3. **Apache / LiteSpeed Web Server Configuration (`.htaccess`)**:
   - Single Page Application (SPA) client-side routing (prevents 404 on page refresh).
   - Automatic HTTP to HTTPS redirection.
   - Gzip and Brotli compression for blazingly fast load times.
   - 1-Year browser caching headers for static assets.
   - Security headers (Anti-sniffing, XSS protection, clickjacking protection).

---

## ⚡ Method 1: One-Click Upload via Hostinger File Manager (Recommended — 2 Minutes)

This is the fastest and easiest method to get your website live on Hostinger.

### Step 1: Log in to Hostinger hPanel
1. Go to [https://hpanel.hostinger.com](https://hpanel.hostinger.com) and sign in.
2. Under the **Websites** section, click **Manage** next to your domain.

### Step 2: Open File Manager
1. In the sidebar or search bar, search for **File Manager** and click on **Access files of [your-domain]**.
2. Double-click to open the **`public_html`** folder.
   > **Note:** If there is a default `default.php` or older placeholder files inside `public_html`, you can delete them.

### Step 3: Upload `hostinger-deploy.zip`
1. Locate the file on your local machine:
   ```
   c:\Users\manik\.gemini\antigravity-ide\scratch\zayrath-group\hostinger-deploy.zip
   ```
2. In the Hostinger File Manager top menu, click the **Upload** icon (arrow pointing up).
3. Select **File**, choose `hostinger-deploy.zip`, and wait for the upload to finish (5.7 MB).

### Step 4: Extract the Files
1. Right-click on `hostinger-deploy.zip` in Hostinger File Manager.
2. Click **Extract**.
3. When prompted for destination, enter `.` (dot) or leave it as `/public_html` so the files extract directly into `public_html`.
4. Click **Extract**.
5. Verify that `index.html`, `.htaccess`, and the `assets/` folder are located directly inside `public_html`.
6. You can now delete `hostinger-deploy.zip` from `public_html` to save space.

### Step 5: Test Your Website
Open your browser and visit your domain:
```
https://yourdomain.com
```
Your new **Zayrath Group** website is now live! 🎉

---

## 🌐 Method 2: Git Auto-Deployment via Hostinger hPanel

If your codebase is pushed to a GitHub repository, you can configure automatic Git deployments in Hostinger:

1. In Hostinger hPanel, go to **Advanced** → **GIT**.
2. Select your repository: `https://github.com/manikandan200331/zayrath-group.git` (or your repo URL).
3. Branch: `main`.
4. Install Path: `/public_html` (or configure build script to deploy `dist/`).
5. Click **Create** and **Deploy**.

---

## 🔒 Free SSL Certificate Activation on Hostinger

To ensure your site shows the secure green lock (`https://`):

1. In hPanel, go to **Security** → **SSL**.
2. If SSL is not active, click **Install SSL** (Hostinger provides lifetime free Let's Encrypt SSL certificates).
3. Once active, the `.htaccess` file we provided will automatically route all visitors to secure `https://`.

---

## 🔄 How to Re-Deploy After Future Changes

Whenever you make future edits to the site:
1. Run the build command in your terminal:
   ```powershell
   npm run build
   ```
2. Re-create the ZIP:
   ```powershell
   Compress-Archive -Path "dist\*" -DestinationPath "hostinger-deploy.zip" -Force
   ```
3. Upload and extract to `public_html` in Hostinger File Manager.
