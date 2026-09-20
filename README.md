# 👑 ZAYRATH GROUP — Corporate Conglomerate Web Application

> **"A Distinctive Path to Progress"**  
> Official corporate digital presence for Zayrath Group, featuring dedicated multi-page portals for **Zayrath Tech Systems (IT Products & Hardware)** and **Zayrath Software Solutions (Full Software & AI Engineering)** in ultra-luxury 24K Gold & Obsidian Black branding.

---

## 🌐 How to Host on GitHub Pages (Step-by-Step)

Your repository is already initialized and committed to the `main` branch. Follow these quick steps to host it live for free:

### Step 1: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (e.g. `zayrath-group` or `<your-username>.github.io`).
3. Keep it **Public**.
4. Leave "Add README", ".gitignore", and "license" unchecked (we already have them).
5. Click **Create repository**.

### Step 2: Push Your Code from Terminal
Open your terminal in this folder and run:
```bash
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```
*(Replace `<YOUR-GITHUB-USERNAME>` and `<YOUR-REPO-NAME>` with your actual GitHub username and repository name).*

### Step 3: Enable GitHub Pages in 1 Click
1. Go to your repository on GitHub.
2. Click **Settings** (top tab) ➔ **Pages** (in left sidebar).
3. Under **Build and deployment** ➔ **Source**:
   - Choose **GitHub Actions**.
4. That's it! GitHub will automatically trigger the workflow in `.github/workflows/deploy.yml`, build your project, and provide your live link (e.g., `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`).

---

### Alternative: Instant 1-Command Deploy with `gh-pages`
If you prefer pushing directly via CLI:
```bash
npm run deploy
```
*(This builds `dist/` and pushes to the `gh-pages` branch instantly).*

---

## 🏷️ Custom Domain Setup (e.g. `zayrathgroup.com`)
When you purchase your domain:
1. In GitHub repo **Settings** ➔ **Pages** ➔ **Custom domain**, enter `zayrathgroup.com`.
2. Add the DNS records provided by GitHub in your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
   - CNAME: `www` points to `<your-username>.github.io`
   - A records: GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
3. Check **Enforce HTTPS** (free SSL certificate generated automatically).

---

## 💻 Local Development
```bash
npm run dev
```
Runs at `http://127.0.0.1:5173/`.
