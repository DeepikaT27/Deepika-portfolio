# Deepika T - Professional Portfolio Website

Modern, responsive, and clean portfolio website for **Deepika T** (B.Tech Information Technology, Fresher Batch 2026).

## 🌟 Key Highlights
- **Role:** Aspiring Software Engineer / Mobile App Developer (Flutter & Dart) & UI/UX Designer
- **Education:** B.Tech IT at Kalasalingam Academy of Research and Education (CGPA: **8.44 / 10**)
- **Internships:** Aslaniya Tech (Mobile App Dev & UI/UX) & Kaashiv Infotech (Machine Learning)
- **Projects:** Offline AI Chatbot (Streamlit), Hand Gesture Recognition (OpenCV, MediaPipe), Real-Time Flutter Mobile App
- **Features:** Glassmorphism UI, Dark/Light Mode switch, interactive project modals, responsive navigation, and embedded resume PDF viewer.

---

## 💻 Local Testing & Viewing

You can view the portfolio locally using any of these simple methods:

### Method 1: Direct Double Click
Simply open `index.html` in your web browser (Chrome, Edge, Firefox, Brave).

### Method 2: Local HTTP Server (Python)
Run the following command in this directory:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Method 3: VS Code Live Server
Right-click on `index.html` in VS Code and select **"Open with Live Server"**.

---

## 🚀 How to Deploy to GitHub Pages (Free & Instant)

Follow these easy steps when you are ready to publish:

### Step 1: Initialize Git Repository
In your terminal (inside this folder `C:\Users\admin\Documents\Deepika-portfolio`):
```bash
git init
git add .
git commit -m "Initial commit: Deepika T Portfolio"
```

### Step 2: Create a Repository on GitHub
1. Go to [GitHub.com](https://github.com) and click **New Repository**.
2. Name the repository `deepika-portfolio` (or `username.github.io`).
3. Set visibility to **Public** and do not add a README (since you already have one).
4. Click **Create repository**.

### Step 3: Link and Push Code
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/deepika-portfolio.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your GitHub repository **Settings** → **Pages** (on the left sidebar).
2. Under **Build and deployment** -> **Source**, select `Deploy from a branch`.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Within 1 minute, your portfolio will be live at:
   `https://<YOUR_GITHUB_USERNAME>.github.io/deepika-portfolio/`

---

## 📁 Directory Structure
```
Deepika-portfolio/
├── index.html               # Main HTML5 semantic structure
├── css/
│   └── style.css            # Responsive CSS3 with Dark/Light design system
├── js/
│   └── main.js              # Theme switcher, typing effect, modals & filtering
├── assets/
│   ├── profile.jpg          # High-resolution profile photo from resume
│   └── Deepika_T_Resume.pdf # Original resume PDF
└── README.md                # Documentation and deployment guide
```
