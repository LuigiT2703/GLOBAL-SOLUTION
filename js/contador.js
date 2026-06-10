const monitoredPlaces = [
  {
    name: "Porto Alegre",
    region: "Rio Grande do Sul",
    event: "Enchente",
    lat: -30.0346,
    lon: -51.2177,
    weight: "flood"
  },
  {
    name: "Belém",
    region: "Amazônia (PA)",
    event: "Queimada / chuva intensa",
    lat: -1.4558,
    lon: -48.4902,
    weight: "rain"
  },
  {
    name: "Recife",
    region: "Pernambuco",
    event: "Deslizamento",
    lat: -8.0476,
    lon: -34.8770,
    weight: "landslide"
  },
  {
    name: "Cuiabá",
    region: "Mato Grosso",
    event: "Queimada",
    lat: -15.6014,
    lon: -56.0979,
    weight: "fire"
  },
  {
    name: "Petrolina",
    region: "Sertão (PE)",
    event: "Seca severa",
    lat: -9.3891,
    lon: -40.5030,
    weight: "drought"
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

function calculateRisk(place, weather) {
  const temp = weather.current.temperature_2m || 0;
  const rain = weather.current.precipitation || 0;
  const wind = weather.current.wind_speed_10m || 0;
  const humidity = weather.current.relative_humidity_2m || 0;
  const dailyRain = weather.daily.precipitation_sum?.[0] || 0;

  let risk = 18 + wind * 0.7 + dailyRain * 2.2 + rain * 8;

  if (place.weight === "fire") risk += Math.max(0, temp - 30) * 5 + Math.max(0, 55 - humidity) * 0.9;
  if (place.weight === "drought") risk += Math.max(0, temp - 29) * 4 + Math.max(0, 50 - humidity) * 1.1;
  if (place.weight === "flood") risk += dailyRain * 3.1 + rain * 10;
  if (place.weight === "landslide") risk += dailyRain * 2.8 + rain * 9 + Math.max(0, humidity - 80) * 0.7;
  if (place.weight === "rain") risk += dailyRain * 2.4 + rain * 7;

  return Math.max(5, Math.min(99, Math.round(risk)));
}

function riskLabel(risk) {
  if (risk >= 85) return { text: "Crítico", className: "risk-critical" };
  if (risk >= 70) return { text: "Alto", className: "risk-high" };
  if (risk >= 45) return { text: "Médio", className: "risk-medium" };
  return { text: "Baixo", className: "risk-low" };
}

async function getWeather(place) {
  const params = new URLSearchParams({
    latitude: place.lat,
    longitude: place.lon,
    current: "temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m",
    daily: "temperature_2m_max,precipitation_sum,wind_speed_10m_max",
    forecast_days: "1",
    timezone: "America/Sao_Paulo"
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Não foi possível carregar a previsão.");
  }

  return response.json();
}

function renderWeatherCard(place, weather) {
  const risk = calculateRisk(place, weather);
  const label = riskLabel(risk);
  const temp = Math.round(weather.current.temperature_2m);
  const humidity = Math.round(weather.current.relative_humidity_2m);
  const wind = Math.round(weather.current.wind_speed_10m);
  const rain = weather.daily.precipitation_sum?.[0] ?? 0;

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
        <span><b>${rain.toFixed(1)} mm</b>Chuva hoje</span>
      </div>
    </article>
  `;
}

async function loadLiveWeather() {
  const weatherGrid = document.querySelector("#liveWeatherGrid");
  const forecastTable = document.querySelector("#forecastTable");
  const updatedAt = document.querySelector("#weatherUpdatedAt");

  if (!weatherGrid && !forecastTable) return;

  try {
    const results = await Promise.all(
      monitoredPlaces.map(async (place) => ({
        place,
        weather: await getWeather(place)
      }))
    );

    const cards = results.map(({ place, weather }) => renderWeatherCard(place, weather)).join("");

    if (weatherGrid) weatherGrid.innerHTML = cards;
    if (forecastTable) forecastTable.innerHTML = cards;
    if (updatedAt) {
      updatedAt.textContent = `Atualizado em ${new Date().toLocaleString("pt-BR")}. Fonte: Open-Meteo.`;
    }
  } catch (error) {
    const fallback = `
      <article class="live-card">
        <strong>Dados reais indisponíveis</strong>
        <p>Não foi possível conectar com a Open-Meteo agora. Verifique a internet e recarregue a página.</p>
      </article>
    `;

    if (weatherGrid) weatherGrid.innerHTML = fallback;
    if (forecastTable) forecastTable.innerHTML = fallback;
    if (updatedAt) updatedAt.textContent = "Falha ao atualizar os dados climáticos reais.";
  }
}

updateLiveClock();
updateOperationalCounters();
setInterval(updateLiveClock, 1000);
setInterval(updateOperationalCounters, 3000);
loadLiveWeather();
setInterval(loadLiveWeather, 10 * 60 * 1000);



