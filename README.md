# EZ Frontend Assessment

A responsive React-based web experience for **Varnan**, a film and branding studio.  
Created a single-page web application using **ReactJs + Tailwind CSS**. The application is made responsive and consist of a simple form that is integrated with the API provided by EZ. Adobe XD design has been recreated as well.

**To submit the contact form please NAVIGATE to ```Let's Talk``` BUTTON.**


---

## Postman Validation
**Post Request** : `https://drive.google.com/file/d/1BEhczKYULnIb4sHO49tEX08biIFtdR2C/view?usp=sharing`

**Response from Backend** : `https://drive.google.com/file/d/1nw7HkxeCoqucn3tv3LP8F9h6FlLF1gMH/view?usp=sharing`

---

## Deployment
**Vercel**: `https://ez-frontend-assessment.vercel.app/`

---

## Project Overview

### Key Features
- **Fully Responsive UI** works effectively on mobiles, tablets, and desktops.
- Built with **React + Tailwind CSS**
- **REST API Integration** using Fetch
- **Working Contact Form** connected to backend:
  `https://vernanbackend.ezlab.in/api/contact-us/`

---

## Project Structure
├── src <br>
    ├── App.css <br>
    ├── App.jsx <br>
    ├── assets <br>
    ├── components <br>
    │   ├── Hero.jsx <br>
    │   └── Navbar.jsx <br>
    ├── index.css <br>
    ├── main.jsx <br>
    └── pages <br>
    │   ├── AboutTeam.jsx <br>
    │   ├── AboutUs.jsx <br>
    │   ├── Contact.jsx <br>
    │   ├── Services.jsx <br>
    │   ├── Varnan.jsx <br>
    │   └── services <br>
    │       ├── ArtCuration.jsx <br>
    │       ├── Branding.jsx <br>
    │       └── FilmProduction.jsx <br>
└── vite.config.js <br>
├── .gitignore <br>
├── README.md <br>
├── eslint.config.js <br>
├── index.html <br>
├── package-lock.json <br>
├── package.json <br>
├── public <br>
    └── vite.svg <br>

---

## Tech Stack
| Category | Technology |
|-----------|-------------|
| **Frontend Framework** | React (Vite) |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM |
| **Deployment** | Vercel |
| **Backend API** | `https://vernanbackend.ezlab.in/api/contact-us/` |
| **Tools Used** | Postman, Git, GitHub |

---

## API Documentation

The contact form sends a **POST** request to:

```bash
POST https://vernanbackend.ezlab.in/api/contact-us/
```
**Example**
```bash
{
  "name": "Iqra",
  "email": "iqra@gmail.com",
  "phone": "9294465968",
  "message": "Hello checking if my API endpoint is working fine or not."
}
```

## Setup Instructions

### 1. Clone this repository
```bash
git clone https://github.com/Iqra-Rahman/ezFrontendAssessment.git
cd ezFrontendAssessment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Project
```bash
npm run dev
```

### 4. Open in browser 
** Click on: **
```bash
http://localhost:5173/
```

---

## Created by
### Iqra Rahman
### BCA (2026)
