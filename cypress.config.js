const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 1024,  
    baseUrl: 'https://automationpratice.com.br',

    setupNodeEvents(on, config) {
      
    },
  },
});
