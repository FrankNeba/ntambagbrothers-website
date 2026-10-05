# VPS Deployment & CI/CD Guide for Ntambag Brothers

This guide details how to set up the automated CI/CD pipeline using **GitHub Actions**, **Next.js Standalone**, **PM2**, and **Nginx Reverse Proxy with SSL**.

---

## 🏗️ Architecture Overview

```
Push to GitHub (main)
        │
        ▼
GitHub Actions Runner (Builds Next.js Standalone + copies static & public)
        │
        ▼ (Rsync over SSH)
VPS Deployment Directory (/var/www/ntambagbrothers)
        │
        ├─► PM2 Zero-Downtime Reload (`pm2 reload ecosystem.config.cjs`)
        │
        ▼
Nginx Reverse Proxy (Port 80/443 with Let's Encrypt SSL)
        │
        ▼ (Proxies to 127.0.0.1:3000)
Next.js Standalone Server (`server.js`)
```

---

## 🛠️ Step 1: One-Time VPS Server Setup

SSH into your VPS server:
```bash
ssh user@your-vps-ip
```

### 1. Update packages & install Node.js 20 and PM2
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 LTS (NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs rsync nginx

# Install PM2 globally
sudo npm install -g pm2

# Configure PM2 to start on system boot
pm2 startup
# (Run the command output provided by pm2 startup)
```

### 2. Create the App Directory and Set Permissions
```bash
sudo mkdir -p /var/www/ntambagbrothers/data /var/www/ntambagbrothers/public/uploads
sudo chown -R $USER:$USER /var/www/ntambagbrothers
chmod -R 755 /var/www/ntambagbrothers
```

---

## 🔑 Step 2: Configure SSH Deploy Key

### 1. Generate an SSH Key Pair on your local machine or VPS
```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/ntambag_deploy
```

### 2. Add the Public Key to the VPS
Copy the content of `~/.ssh/ntambag_deploy.pub` and append it to your VPS's `~/.ssh/authorized_keys`:
```bash
cat ~/.ssh/ntambag_deploy.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

---

## ⚙️ Step 3: Add GitHub Secrets

In your GitHub repository:
1. Go to **Settings** > **Secrets and variables** > **Actions**
2. Click **New repository secret** and add the following:

| Secret Name | Value Example | Description |
| :--- | :--- | :--- |
| `VPS_HOST` | `123.45.67.89` or `yourdomain.com` | Your VPS IP address or hostname |
| `VPS_USER` | `root` or `ubuntu` | SSH user with write access to target directory |
| `VPS_SSH_KEY` | Contents of `~/.ssh/ntambag_deploy` | Complete private key (including `-----BEGIN ... -----` and `-----END ... -----`) |
| `VPS_PORT` | `22` (Optional, defaults to 22) | SSH port if non-standard |
| `VPS_TARGET_DIR` | `/var/www/ntambagbrothers` | Destination path on your VPS (defaults to `/var/www/ntambagbrothers`) |

---

## 🌐 Step 4: Configure Nginx & SSL

### 1. Copy the Nginx Config Template
Copy the configuration from `nginx/ntambagbrothers.conf` to `/etc/nginx/sites-available/ntambagbrothers`:
```bash
sudo cp nginx/ntambagbrothers.conf /etc/nginx/sites-available/ntambagbrothers
```
Edit the file to ensure your domain or server IP is set:
```bash
sudo nano /etc/nginx/sites-available/ntambagbrothers
```

### 2. Enable Site and Test Configuration
```bash
sudo ln -sf /etc/nginx/sites-available/ntambagbrothers /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 3. Install Free SSL with Certbot (Let's Encrypt)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d ntambagbrothers.org -d www.ntambagbrothers.org
```

---

## 🚀 Step 5: Triggering Deployments

Every push to the `main` branch will automatically:
1. Build the Next.js standalone application on GitHub Actions.
2. Bundle the `.next/standalone`, `.next/static`, and `public/` assets.
3. Rsync files directly to your VPS, preserving existing uploads in `public/uploads` and `data/content.json`.
4. Perform a zero-downtime reload via `pm2 reload ecosystem.config.cjs`.

You can also trigger manual deployments at any time from GitHub:
**Actions** tab > **Deploy Standalone Next.js to VPS** > **Run workflow**.

---

## 🔍 Useful PM2 Commands on VPS

```bash
# View running process status
pm2 status

# View live application logs
pm2 logs ntambagbrothers

# Monitor CPU and memory usage
pm2 monit

# Manually restart the application
pm2 restart ntambagbrothers
```
