const monitoredPlaces = [
  {
    name: "Porto Alegre",
    region: "Rio Grande do Sul",
    event: "Enchente",
    weight: "flood",
    weather: {
      temperature: 23,
      humidity: 88,
      wind: 18,
      rain: 42.6
    }
  },
  {
    name: "Belém",
    region: "Amazônia (PA)",
    event: "Queimada / chuva intensa",
    weight: "rain",
    weather: {
      temperature: 30,
      humidity: 82,
      wind: 12,
      rain: 18.4
    }
  },
  {
    name: "Recife",
    region: "Pernambuco",
    event: "Deslizamento",
    weight: "landslide",
    weather: {
      temperature: 27,
      humidity: 86,
      wind: 21,
      rain: 31.2
    }
  },
  {
    name: "Cuiabá",
    region: "Mato Grosso",
    event: "Queimada",
    weight: "fire",
    weather: {
      temperature: 35,
      humidity: 38,
      wind: 16,
      rain: 1.8
    }
  },
  {
    name: "Petrolina",
    region: "Sertão (PE)",
    event: "Seca severa",
    weight: "drought",
    weather: {
      temperature: 34,
      humidity: 35,
      wind: 19,
      rain: 0.4
    }
  }
];

function updateLiveClock() {
  const clock = document.querySelector("#liveClock");
  if (!clock) return;

  const now = new Date();
  clock.textContent = `Online - ${now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })}`;
}

function updateOperationalCounters() {
  const seconds = Math.floor(Date.now() / 1000);
  const satCounter = document.querySelector("#satCounter");
  const eventCounter = document.querySelector("#eventCounter");
  const riskCounter = document.querySelector("#riskCounter");
  const satMetric = document.querySelector("#satMetric");
  const latencyMetric = document.querySelector("#latencyMetric");
  const eventsMetric = document.querySelector("#eventsMetric");
  const criticalMetric = document.querySelector("#criticalMetric");

  if (satCounter) satCounter.textContent = `${12 + (seconds % 3)}+`;
  if (eventCounter) eventCounter.textContent = String(5 + (seconds % 4));
  if (riskCounter) riskCounter.textContent = `${82 + (seconds % 11)}%`;
  if (satMetric) satMetric.textContent = `${12 + (seconds % 3)} / 14`;
  if (latencyMetric) latencyMetric.textContent = `${(1.4 + (seconds % 8) / 10).toFixed(1)}s`;
  if (eventsMetric) eventsMetric.textContent = (1247 + (seconds % 180)).toLocaleString("pt-BR");
  if (criticalMetric) criticalMetric.textContent = String(18 + (seconds % 8));
}

function calculateRisk(place) {
  const seconds = Math.floor(Date.now() / 1000);
  const variation = (seconds % 9) - 4;
  const temp = place.weather.temperature;
  const rain = place.weather.rain;
  const wind = place.weather.wind;
  const humidity = place.weather.humidity;

  let risk = 18 + wind * 0.7 + rain * 2.2 + variation;

  if (place.weight === "fire") risk += Math.max(0, temp - 30) * 5 + Math.max(0, 55 - humidity) * 0.9;
  if (place.weight === "drought") risk += Math.max(0, temp - 29) * 4 + Math.max(0, 50 - humidity) * 1.1;
  if (place.weight === "flood") risk += rain * 3.1;
  if (place.weight === "landslide") risk += rain * 2.8 + Math.max(0, humidity - 80) * 0.7;
  if (place.weight === "rain") risk += rain * 2.4;

  return Math.max(5, Math.min(99, Math.round(risk)));
}

function riskLabel(risk) {
  if (risk >= 85) return { text: "Crítico", className: "risk-critical" };
  if (risk >= 70) return { text: "Alto", className: "risk-high" };
  if (risk >= 45) return { text: "Médio", className: "risk-medium" };
  return { text: "Baixo", className: "risk-low" };
}

function renderWeatherCard(place) {
  const risk = calculateRisk(place);
  const label = riskLabel(risk);
  const temp = Math.round(place.weather.temperature);
  const humidity = Math.round(place.weather.humidity);
  const wind = Math.round(place.weather.wind);
  const rain = place.weather.rain;

  return `
    <article class="live-card">
      <div class="live-card__top">
        <div>
          <strong>${place.name}</strong>
          <small>${place.region} - ${place.event}</small>
        </div>
        <span class="live-risk">${risk}%</span>
      </div>
      <p class="${label.className}">Nível de risco: ${label.text}</p>
      <div class="live-metrics">
        <span><b>${temp}°C</b>Temperatura</span>
        <span><b>${humidity}%</b>Umidade</span>
        <span><b>${wind} km/h</b>Vento</span>
        <span><b>${rain.toFixed(1)} mm</b>Chuva simulada</span>
      </div>
    </article>
  `;
}

function loadSimulatedWeather() {
  const weatherGrid = document.querySelector("#liveWeatherGrid");
  const forecastTable = document.querySelector("#forecastTable");
  const updatedAt = document.querySelector("#weatherUpdatedAt");

  if (!weatherGrid && !forecastTable) return;

  const cards = monitoredPlaces.map((place) => renderWeatherCard(place)).join("");

  if (weatherGrid) weatherGrid.innerHTML = cards;
  if (forecastTable) forecastTable.innerHTML = cards;
  if (updatedAt) {
    updatedAt.textContent = `Simulação atualizada em ${new Date().toLocaleString("pt-BR")}. Dados demonstrativos do protótipo.`;
  }
}

updateLiveClock();
updateOperationalCounters();
setInterval(updateLiveClock, 1000);
setInterval(updateOperationalCounters, 3000);
loadSimulatedWeather();
setInterval(loadSimulatedWeather, 3000);
