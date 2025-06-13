# DevSecOps Hackathon Challenge Repository

Welcome to the **Shift‑Left Security Sprint**!  
This repository is intentionally misconfigured so you can practice

* secret detection & removal  
* dependency / container vulnerability remediation  
* CI/CD hardening

## Your Task (60 min)

1. **Fork** this repo to your own GitHub account or organization.  
2. Search for **hard‑coded secrets** (code _and_ Git history) and remove / rotate them.  
3. Upgrade vulnerable dependencies and the Docker base image to eliminate **critical / high CVEs**.  
4. Add automated *secret* and *container* scanning (Gitleaks / Trivy / Grype) to the GitHub Actions workflow.  
5. Document every fix in **`SECURITY_FIXES.md`**.  
6. Open a Pull Request ‑ passing pipeline = ✅

## Starting Point

* `index.js` – minimal Express API with an **intentional secret**.  
* `Dockerfile` – uses an **EOL** Node 12 image.  
* `.github/workflows/ci.yml` – skeletal pipeline (no scanners).

Have fun and happy hacking! ✨
