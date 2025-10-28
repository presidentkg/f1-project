# 🛍️ F1 Info Hub — Portfolio Project

This project was carried out over 3 weeks. The goal was to make a portfolio project to demonstrate to future employers the skills I acquired during the course. I chose to created a website to showcase Formula 1 information and statistics. I utilized GitHub Projects to structure and plan the work. The site fetches data primarly from [f1api.dev](https://f1api.dev/).

---

## 📑 Table of Contents
- 📖 [About the Project](#-about-the-project)
- ✨ [Features](#-features)
- 🛠 [Technologies](#-technologies)
- ⚙️ [Installation](#-installation)
- 🚀 [Usage](#-usage)
- 📂 [Project Structure](#-project-structure)
- 📈 [Workflow](#-workflow)
- 📚 [Lessons Learned](#-lessons-learned)
- 🌱 [Future Development](#-future-development)
- ✍️ [Contact](#-contact)


---

## 📖 About the Project
This was an individual project with the goal of demonstrating the skills I acquired during the course.
Basic requirements:
- Front-end project using Next.js (or an alternative).
- Must follow a predefined design mockup (can be extended later if desired).
- Use GitHub Projects or similar for sprint tracking.
- Work in feature branches merged via pull requests.
- Clear commit messages that instructors can follow.
- "Scrum"-like workflow.
- (Deployment to Vercel or similar is optional.)

---

## ✨ Features
- ✅ Homepage with basic info about project
- ✅ Schedule page
- ✅ Results page with possibility to see race, driver and team results
- ✅ Drivers page
- ✅ Teams page
- ✅ Search bar
- ✅ About me page
- ✅ Resources page with links

---

## 🛠 Technologies
- [Next.js 15 (App Router)](https://nextjs.org/)
- [WAVE](https://wave.webaim.org/)
- [Primary API](https://f1api.dev/)
- [Secondary API](https://openf1.org/)

---

## ⚙️ Installation
```bash
# Clone the repository
git clone https://github.com/presidentkg/f1-project

# Navigate to the project directory
cd f1-project

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🚀 Usage
* Homepage -> static page with basic info about project
* Schedule page -> list of races this season
* Drivers page -> list of drivers this season
* Teams page -> list of teams this season
* Search bar -> search for drivers and teams, both current and former

---

## 📂 Project Structure

```
|-- app/
|  |-- page.tsx            # Home page
|  |-- about-me/page.tsx   # About me
|  |-- resources/page.tsx  # Resources
|  |-- results/page.tsx    # Results
|  |-- schedule/page.tsx   # Schedule
|  |-- search/page.tsx     # Search
|  |-- teams/page.tsx      # Teams
|-- components/            # Reusable components   
|-- lib/data               # Data fetching
|-- lib/types              # Types        
|-- lib/utils              # Utils
```

---

## 📈 Workflow

* 👥 Individual work in agile sprints (SCRUM)
* 📑 GitHub Projects (Kanban board)
* 🌱 Feature branches
* 🔍 PR + code review

---

## 📚 Lessons Learned

* Integrate an API with many endpoints that returned slightly different shapes for the same logical objects 
* The difference between Server & Client Components in Next.js
* Agile work methods
* Responsiveness with Tailwind
* Reusable Components
* Git workflows - feature branches, PRs and sprint tracking with GitHub Projects.

---

## 🌱 Future Development

* More detailed data on driver and team cards.  
* Add a dropdown menu for the navigation bar.  
* Create circuit pages with detailed info (layout, lap record, etc).  
* Add a year/season filter to view results from previous seasons.  
* Integrate more OpenF1 data — e.g. graphs for a driver's position over a race, air/track temperature, stint analysis, tyre strategies, etc.

---

## ✍️ Contact

👤 Karl Ragnar
🔗[presidentkg](https://github.com/presidentkg)
🔗[LinkedIn](https://www.linkedin.com/in/karlragnar-kling/)