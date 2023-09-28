const { defineConfig } = require("cypress")

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    viewportWidth: 1024,
    viewportHeight: 768,
    baseUrl: 'https://automationpratice.com.br',

    specPattern: "**/*.feature",


    setupNodeEvents(on, config) {

      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
},
  },
});
