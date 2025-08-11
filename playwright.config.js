const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://reqres.in',
    extraHTTPHeaders: {
      'x-api-key': 'reqres-free-v1',
    },
  },
  reporter: [
    ['list'], 
    ['html', { outputFolder: 'playwright-report', open: 'never' }] 
  ],
});
