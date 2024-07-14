import React, { useState, useCallback } from 'react';
import SearchForm from './SearchForm';
import CurrentWeather from './CurrentWeather';
import ForecastDay from './ForecastDay';
import styles, { applyResponsiveStyles } from '../utils/styles';
import { fetchWeatherData, getWeatherIcon, getTemperature } from '../utils/weatherUtils';

const WeatherForecast = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('C');

  const handleSearch = useCallback(async (searchCity) => {
    if (!searchCity.trim()) {
      setError('Per favore, inserisci una città');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await fetchWeatherData(searchCity);
      setWeatherData(result);
      setCity(searchCity);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleUnit = useCallback(() => {
    setUnit(prevUnit => prevUnit === 'C' ? 'F' : 'C');
  }, []);

  return (
    <div className="weather-forecast" style={styles.weatherForecast}>
      <SearchForm onSearch={handleSearch} />
      {loading && <div style={{...styles.message, ...styles.loading}}>Caricamento...</div>}
      {error && <div style={{...styles.message, ...styles.error}}>{error}</div>}
      {weatherData && (
        <div className="weather-content" style={styles.weatherContent}>
          <button onClick={toggleUnit} style={styles.unitToggle}>
            °{unit === 'C' ? 'F' : 'C'}
          </button>
          <h2 style={styles.cityName}>
            {weatherData.location.name}, {weatherData.location.country}
          </h2>
          <CurrentWeather 
            data={weatherData.current} 
            unit={unit} 
            getWeatherIcon={getWeatherIcon}
            getTemperature={getTemperature}
            styles={styles}
          />
          <div style={styles.forecast}>
            {weatherData.forecast.forecastday.map(day => (
              <ForecastDay 
                key={day.date} 
                data={day} 
                unit={unit}
                getWeatherIcon={getWeatherIcon}
                getTemperature={getTemperature}
                styles={styles}
              />
            ))}
          </div>
        </div>
      )}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Roboto', sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f0f4f8;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .weather-content {
          animation: fadeIn 0.5s ease-out;
        }

        ${applyResponsiveStyles(styles)}
      `}</style>
    </div>
  );
};

export default WeatherForecast;