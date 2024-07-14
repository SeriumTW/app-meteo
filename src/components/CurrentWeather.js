import React from 'react';

const CurrentWeather = ({ data, unit, getWeatherIcon, getTemperature, styles }) => (
  <div style={styles.currentWeather}>
    <div style={styles.weatherIcon}>{getWeatherIcon(data.condition.text)}</div>
    <div style={styles.weatherDetails}>
      <p style={styles.temperature}>{getTemperature(data.temp_c, data.temp_f, unit)}°{unit}</p>
      <p style={styles.condition}>{data.condition.text}</p>
      <div style={styles.additionalInfo}>
        <p style={styles.wind}>🌬️ {data.wind_kph} km/h</p>
        <p style={styles.humidity}>💧 {data.humidity}%</p>
      </div>
    </div>
  </div>
);

export default CurrentWeather;