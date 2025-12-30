# 🌤 Weather Analytics Dashboard

A lightweight and responsive **weather analytics dashboard** built using **Vanilla JavaScript** and **Chart.js**, consuming real-time data from a **public weather API**.  
This project is designed as a **beginner-friendly yet portfolio-worthy** mini project.

🔗 **Live Demo:**  
[https://moharifrifai.github.io/weather-analytics-dashboard/](https://moharifrifai.github.io/weather-analytics-dashboard/)

---

## 📌 Project Overview

Weather Analytics Dashboard visualizes **7-day weather forecast data** for selected cities in an interactive and clean dashboard interface.

The main goal of this project is to demonstrate:
- Public API consumption
- Data visualization
- Responsive UI design
- Clean and readable JavaScript code

This project uses **no backend**, **no build tools**, and is fully deployable via **GitHub Pages**.

---

## ✨ Features

- 🌍 City selection (Jakarta, Tokyo, London)
- 📊 Line chart showing:
  - Daily maximum temperature
  - Daily minimum temperature
- 📈 Summary statistics:
  - Average temperature
  - Maximum temperature
  - Minimum temperature
- 📱 Fully responsive (mobile & desktop)
- 🎨 Clean, modern UI theme
- ⚡ Fast load (pure HTML, CSS, JS)

---

## 🛠 Tech Stack

### Frontend
- **HTML5** – semantic structure
- **CSS3** – responsive layout & theme styling
- **JavaScript (ES6)** – logic & data handling

### Libraries
- **Chart.js** – data visualization (line charts)

### Public API
- **Open-Meteo API**
  - Free & public
  - No API key required
  - Weather forecast data

### Deployment
- **GitHub Pages**

---

## 📂 Project Structure
weather-analytics-dashboard/
│
├── index.html # Main HTML file
├── style.css # Theme & responsive styles
├── app.js # JavaScript logic
└── README.md # Project documentation

---

## 🔌 API Example

The dashboard consumes data from Open-Meteo API:
https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&daily=temperature_2m_max,temperature_2m_min&timezone=auto

---

## 🚀 How to Run Locally

No installation required.

1. Clone the repository:
```git clone https://github.com/moharifrifai/weather-analytics-dashboard.git```

2. Open index.html in your browser, or
3. Run with a local server (optional):
```npx serve```
