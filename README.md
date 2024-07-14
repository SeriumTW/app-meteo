
# Weather Forecast App

![Weather Forecast App]([https://via.placeholder.com/800x400?text=Weather+Forecast+App](https://imgur.com/a/SSeuhJ2))

## Sommario
- [Descrizione](#descrizione)
- [Caratteristiche](#caratteristiche)
- [Demo](#demo)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [API Reference](#api-reference)
- [Contribuire](#contribuire)
- [Testing](#testing)
- [Deployment](#deployment)
- [Licenza](#licenza)
- [Contatti](#contatti)
- [Ringraziamenti](#ringraziamenti)

## Descrizione

Weather Forecast App è un'applicazione web moderna e reattiva che fornisce previsioni meteo accurate utilizzando l'API di WeatherAPI.com. Sviluppata con React.js, questa app offre un'interfaccia utente intuitiva per visualizzare le condizioni meteorologiche attuali e le previsioni per i prossimi giorni. Il progetto mira a fornire agli utenti informazioni meteorologiche affidabili in un formato facile da comprendere e visivamente accattivante.

## Caratteristiche

- 🔍 Ricerca delle previsioni meteo per città
- 🌡️ Visualizzazione delle condizioni meteorologiche attuali
- 📅 Previsioni per i prossimi giorni
- 🔄 Commutazione tra gradi Celsius e Fahrenheit
- 📱 Design responsivo per una perfetta visualizzazione su tutti i dispositivi
- 🌈 Icone intuitive per le diverse condizioni meteorologiche
- 🌬️ Informazioni dettagliate su vento e umidità

## Demo

[non disponibile]

## Tecnologie Utilizzate

- React.js 17.0.2
- WeatherAPI.com API
- CSS-in-JS (styled-components o equivalente)
- JavaScript ES6+
- Axios per le chiamate API
- React Hooks per la gestione dello stato
- PropTypes per il type checking

## Installazione

1. Clona il repository:
   ```
   git clone https://github.com/SeriumTW/weather-forecast-app.git
   ```
2. Naviga nella directory del progetto:
   ```
   cd weather-forecast-app
   ```
3. Installa le dipendenze:
   ```
   npm install
   ```
4. Crea un file `.env` nella root del progetto e aggiungi la tua chiave API di WeatherAPI.com:
   ```
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```
5. Avvia l'applicazione in modalità sviluppo:
   ```
   npm start
   ```

L'app sarà disponibile all'indirizzo `http://localhost:3000`.

## Utilizzo

1. Apri l'applicazione nel tuo browser.
2. Nella barra di ricerca, inserisci il nome della città per cui desideri le previsioni meteo.
3. Premi Invio o clicca sul pulsante di ricerca.
4. L'app mostrerà le condizioni meteo attuali e le previsioni per i prossimi giorni.
5. Usa il pulsante di toggle per cambiare tra Celsius e Fahrenheit.

## API Reference

Questo progetto utilizza l'API di WeatherAPI.com. Per maggiori informazioni sugli endpoint disponibili e su come utilizzarli, consulta la [documentazione ufficiale di WeatherAPI.com](https://www.weatherapi.com/docs/).

## Contribuire

I contributi sono sempre benvenuti! Se hai suggerimenti per migliorare l'app, per favore:

1. Forka il repository
2. Crea un nuovo branch (`git checkout -b feature/AmazingFeature`)
3. Committa le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Pusha al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

Per favore, assicurati di aggiornare i test appropriati e di seguire il codice di condotta del progetto.

## Testing

Per eseguire i test, usa il comando:

```
npm test
```

## Deployment

Per creare una build di produzione, esegui:

```
npm run build
```

Questo creerà una cartella `build` con i file ottimizzati pronti per il deployment.

## Licenza

Distribuito sotto la licenza MIT. Vedi `LICENSE` per maggiori informazioni.

## Contatti

Emanuele Denaro - [@SeriumTW](https://twitter.com/SeriumTW)

Link del progetto: [https://github.com/SeriumTW/weather-forecast-app](https://github.com/SeriumTW/weather-forecast-app)

## Ringraziamenti

- [WeatherAPI.com](https://www.weatherapi.com/) per fornire i dati meteorologici
- [React](https://reactjs.org/) per il framework frontend
- [Create React App](https://create-react-app.dev/) per il boilerplate del progetto
- Tutti i contributori che hanno partecipato a questo progetto

