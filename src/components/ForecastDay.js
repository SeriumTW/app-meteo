import React from 'react';
import styles from '../utils/styles';

const ForecastDay = ({ data, unit, getWeatherIcon, getTemperature }) => (
  <div className="forecast-day" style={styles.forecastDay}>
    <h3>{new Date(data.date).toLocaleDateString('it-IT', { weekday: 'short' })}</h3>
    <div className="forecast-icon" style={styles.forecastIcon}>
      {getWeatherIcon(data.day.condition.text)}
    </div>
    <p className="forecast-temp" style={styles.forecastTemp}>
      {getTemperature(data.day.avgtemp_c, data.day.avgtemp_f, unit)}°{unit}
    </p>
    <p className="forecast-range" style={styles.forecastRange}>
      {getTemperature(data.day.mintemp_c, data.day.mintemp_f, unit)}° - 
      {getTemperature(data.day.maxtemp_c, data.day.maxtemp_f, unit)}°
    </p>
  </div>
);

export default ForecastDay;