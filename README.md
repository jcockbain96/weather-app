# react-weather-app

This is a simple react app to provide the current weather in a user-specified location.

It uses the [OpenWeather API](https://openweathermap.org/api).

## Instructions

### Develop Locally

```bash
npm install
npm start
```

The app will open by default on <http://localhost:3000>. This can be changed in `webpack.dev.js`.

The page will automatically reload upon any changes.

### Production Build

```bash
npm run build
```

This builds the app with `webpack` to the `dist` folder, ready for production.

The configuration for this build is set by `webpack.prod.js`.

## Acknowledgements

- [Build your own React boilerplate, by Seth Alexander](https://medium.com/@sethalexander/how-to-build-your-own-react-boilerplate-1a97d09337fd)

- [How to plan and organize a React project, by Konstantin Münster](https://medium.com/@konstantin.muenster/how-to-plan-and-organize-a-react-project-by-building-a-weather-app-95175b11bd01)
