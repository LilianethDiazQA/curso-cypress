const { defineConfig } = require('cypress');
const { configureAllureAdapterPlugins }  = require('@mmisty/cypress-allure-adapter/plugins') ;

module.exports = defineConfig({
    retries: 1,
    e2e: {
        env: {
            allure: true,
            allureResultsPath: 'allure-results' // Ruta para los resultados de Allure
        },
        "video": false,
        "chromeWebSecurity": false,
        setupNodeEvents(on, config) {
            configureAllureAdapterPlugins(on, config);
            return config;   
        }
    }
});



