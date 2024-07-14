const styles = {
    weatherForecast: {
      maxWidth: '800px',
      width: '100%',
      padding: '25px',
      backgroundColor: '#ffffff',
      borderRadius: '25px',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
      margin: '30px auto',
      position: 'relative',
    },
    searchForm: {
      display: 'flex',
      marginBottom: '25px',
    },
    searchInput: {
      flexGrow: 1,
      padding: '15px 25px',
      fontSize: '18px',
      border: 'none',
      backgroundColor: '#f0f4f8',
      borderRadius: '50px 0 0 50px',
      transition: 'all 0.3s ease',
    },
    searchButton: {
      padding: '15px 30px',
      fontSize: '22px',
      backgroundColor: '#4299e1',
      color: 'white',
      border: 'none',
      borderRadius: '0 50px 50px 0',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
    },
    unitToggle: {
      padding: '10px 15px',
      fontSize: '16px',
      backgroundColor: '#4299e1',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      margin: '10px 10px 20px 10px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
    },
    message: {
      textAlign: 'center',
      padding: '20px',
      borderRadius: '15px',
      marginBottom: '25px',
      fontWeight: 500,
    },
    error: {
      backgroundColor: '#fff5f5',
      color: '#c53030',
    },
    weatherContent: {
      animation: 'fadeIn 0.5s ease-out',
    },
    cityName: {
      fontSize: '36px',
      marginBottom: '25px',
      textAlign: 'center',
      color: '#2d3748',
      fontWeight: 700,
    },
    currentWeather: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '35px',
      padding: '30px',
      backgroundColor: '#ebf8ff',
      borderRadius: '20px',
      boxShadow: '0 10px 20px rgba(66, 153, 225, 0.1)',
    },
    weatherIcon: {
      fontSize: '80px',
    },
    weatherDetails: {
      textAlign: 'right',
    },
    temperature: {
      fontSize: '64px',
      fontWeight: 700,
      color: '#2d3748',
      marginBottom: '10px',
      transition: 'all 0.3s ease',
    },
    condition: {
      fontSize: '24px',
      color: '#4a5568',
      marginBottom: '15px',
    },
    additionalInfo: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    wind: {
      fontSize: '18px',
      color: '#718096',
      marginLeft: '20px',
    },
    humidity: {
      fontSize: '18px',
      color: '#718096',
      marginLeft: '20px',
    },
    forecast: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    forecastDay: {
      flexBasis: 'calc(33.333% - 15px)',
      textAlign: 'center',
      padding: '25px',
      backgroundColor: '#ebf8ff',
      borderRadius: '20px',
      marginBottom: '20px',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    forecastIcon: {
      fontSize: '48px',
      margin: '15px 0',
    },
    forecastTemp: {
      fontSize: '32px',
      fontWeight: 700,
      color: '#2d3748',
      marginBottom: '10px',
      transition: 'all 0.3s ease',
    },
    forecastRange: {
      fontSize: '18px',
      color: '#718096',
    },
  };
  
  // Aggiungiamo stili per il responsive design
  const mediaQueries = {
    mobile: '@media (max-width: 767px)',
    tablet: '@media (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media (min-width: 1024px)',
  };
  
  const responsiveStyles = {
    [mediaQueries.mobile]: {
      weatherForecast: {
        padding: '20px',
      },
      cityName: {
        fontSize: '28px',
      },
      currentWeather: {
        flexDirection: 'column',
        textAlign: 'center',
        padding: '25px',
      },
      weatherIcon: {
        marginBottom: '15px',
      },
      weatherDetails: {
        textAlign: 'center',
      },
      temperature: {
        fontSize: '56px',
      },
      condition: {
        fontSize: '20px',
      },
      additionalInfo: {
        justifyContent: 'center',
      },
      wind: {
        fontSize: '16px',
        margin: '0 10px',
      },
      humidity: {
        fontSize: '16px',
        margin: '0 10px',
      },
      forecastDay: {
        flexBasis: '100%',
      },
    },
    [mediaQueries.tablet]: {
      forecastDay: {
        flexBasis: 'calc(50% - 10px)',
      },
    },
  };
  
  // Funzione per applicare gli stili responsivi
  const applyResponsiveStyles = (baseStyles) => {
    const responsiveStylesArray = Object.entries(responsiveStyles).map(([query, styles]) => {
      return `${query} {
        ${Object.entries(styles).map(([className, style]) => {
          return `.${className} {
            ${Object.entries(style).map(([prop, value]) => `${prop}: ${value};`).join('\n')}
          }`;
        }).join('\n')}
      }`;
    });
  
    return `
      ${Object.entries(baseStyles).map(([className, style]) => {
        return `.${className} {
          ${Object.entries(style).map(([prop, value]) => `${prop}: ${value};`).join('\n')}
        }`;
      }).join('\n')}
      
      ${responsiveStylesArray.join('\n')}
    `;
  };
  
  export default styles;
  export { applyResponsiveStyles };