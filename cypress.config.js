const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    chromeWebSecurity: false,
    supportFile: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/features/*.feature",
  },
});
