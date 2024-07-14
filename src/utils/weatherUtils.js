const API_KEY = '9a1c2a23admshf229649108e3d08p1d3edajsn15ced384d95b';

export const fetchWeatherData = async (city) => {
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${encodeURIComponent(city)}&days=3`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Città non trovata o errore nel recupero dei dati');
  }
  return await response.json();
};

export const getWeatherIcon = (condition) => {
  const icons = {
    'sunny': '☀️', 'clear': '☀️', 'partly cloudy': '⛅', 'cloudy': '☁️', 'overcast': '☁️',
    'mist': '🌫️', 'patchy rain possible': '🌦️', 'patchy snow possible': '🌨️',
    'patchy sleet possible': '🌨️', 'patchy freezing drizzle possible': '🌨️',
    'thundery outbreaks possible': '⛈️', 'blowing snow': '❄️', 'blizzard': '❄️',
    'fog': '🌫️', 'freezing fog': '🌫️', 'patchy light drizzle': '🌧️', 'light drizzle': '🌧️',
    'freezing drizzle': '🌧️', 'heavy freezing drizzle': '🌧️', 'patchy light rain': '🌧️',
    'light rain': '🌧️', 'moderate rain at times': '🌧️', 'moderate rain': '🌧️',
    'heavy rain at times': '🌧️', 'heavy rain': '🌧️', 'light freezing rain': '🌧️',
    'moderate or heavy freezing rain': '🌧️', 'light sleet': '🌨️', 'moderate or heavy sleet': '🌨️',
    'patchy light snow': '🌨️', 'light snow': '🌨️', 'patchy moderate snow': '🌨️',
    'moderate snow': '🌨️', 'patchy heavy snow': '🌨️', 'heavy snow': '🌨️',
    'ice pellets': '🌨️', 'light rain shower': '🌦️', 'moderate or heavy rain shower': '🌦️',
    'torrential rain shower': '🌦️', 'light sleet showers': '🌨️',
    'moderate or heavy sleet showers': '🌨️', 'light snow showers': '🌨️',
    'moderate or heavy snow showers': '🌨️', 'light showers of ice pellets': '🌨️',
    'moderate or heavy showers of ice pellets': '🌨️', 'patchy light rain with thunder': '⛈️',
    'moderate or heavy rain with thunder': '⛈️', 'patchy light snow with thunder': '⛈️',
    'moderate or heavy snow with thunder': '⛈️'
  };
  return icons[condition.toLowerCase()] || '🌤️';
};

export const getTemperature = (temp_c, temp_f, unit) => {
  return unit === 'C' ? Math.round(temp_c) : Math.round(temp_f);
};