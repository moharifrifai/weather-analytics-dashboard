const citySelect = document.getElementById('city');

const avgTempEl = document.getElementById('avgTemp');
const maxTempEl = document.getElementById('maxTemp');
const minTempEl = document.getElementById('minTemp');

const ctx = document.getElementById('tempChart').getContext('2d');
let chart;

async function fetchWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

  const res = await fetch(url);
  return res.json();
}

function renderChart(labels, maxTemps, minTemps) {
  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Max Temperature (°C)',
          data: maxTemps,
          tension: 0.3
        },
        {
          label: 'Min Temperature (°C)',
          data: minTemps,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function updateSummary(maxTemps, minTemps) {
  const avg =
    (maxTemps.reduce((a, b) => a + b, 0) +
      minTemps.reduce((a, b) => a + b, 0)) /
    (maxTemps.length * 2);

  avgTempEl.textContent = avg.toFixed(1) + ' °C';
  maxTempEl.textContent = Math.max(...maxTemps) + ' °C';
  minTempEl.textContent = Math.min(...minTemps) + ' °C';
}

async function loadDashboard() {
  const [lat, lon] = citySelect.value.split(',');

  const data = await fetchWeather(lat, lon);

  const labels = data.daily.time;
  const maxTemps = data.daily.temperature_2m_max;
  const minTemps = data.daily.temperature_2m_min;

  updateSummary(maxTemps, minTemps);
  renderChart(labels, maxTemps, minTemps);
}

citySelect.addEventListener('change', loadDashboard);

// Initial load
loadDashboard();
