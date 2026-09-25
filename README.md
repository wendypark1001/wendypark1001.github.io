# Wendy Kyungrim Park: Portfolio Website

A modern portfolio website showcasing the event coordination, student experience programming, stakeholder management, and marketing work of Wendy Kyungrim Park.

Live Website: [https://wendypark1001.github.io/](https://wendypark1001.github.io/)

---

## Overview

This portfolio highlights Wendy's background in delivering large-scale university and residential community events, orientation programs, student leadership training, and multi-channel marketing campaigns across Melbourne.

### Core Sections
* **Hero**: Executive summary and value proposition.
* **About**: Professional background, community engagement philosophy, and education.
* **Experience & Projects**: High-impact campus events, orientation festivals, cultural celebrations, and marketing collateral.
* **Skills & Tools**: Operations and governance, event logistics, lifecycle marketing, and systems expertise (Humanitix, Dayforce, StarRez, Trello, Google Workspace, Canva).
* **Testimonials**: Endorsements from supervisors, student leaders, and colleagues.
* **Contact**: Direct inquiry form and contact channels.

---

## Tech Stack

* **Framework**: React 19
* **Language**: TypeScript
* **Styling**: Tailwind CSS 4
* **Build Tool**: Vite
* **Icons**: Lucide React
* **Hosting & CI/CD**: GitHub Pages via GitHub Actions

---

## Local Development

### Prerequisites
* Node.js (v20+ recommended)
* npm

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/wendypark1001/wendypark1001.github.io.git
   cd wendypark1001.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Run linter:
   ```bash
   npm run lint
   ```

---

## Autonomous Deployment

This project uses continuous deployment via GitHub Actions:
* Pushing changes to the `main` branch automatically triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
* The workflow builds the production assets and deploys them directly to GitHub Pages.
* Manual deployments can also be initiated from the GitHub Actions tab via `workflow_dispatch`.

---

## Contact

* **Email**: [wendy.park1001@gmail.com](mailto:wendy.park1001@gmail.com)
* **LinkedIn**: [linkedin.com/in/wendy-park-47b563267](https://www.linkedin.com/in/wendy-park-47b563267)
