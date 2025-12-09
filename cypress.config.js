const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",  // <- Add your URL here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.{js,ts}", // optional, default pattern
    supportFile: "cypress/support/e2e.js" // optional
  },
});
