// Import the `defineConfig` function from Cypress to configure E2E tests.
import { defineConfig } from 'cypress'

// Export the Cypress configuration using `defineConfig`.
export default defineConfig({
  // Configuration for the development server of the application under test.
  component: {
    devServer: {
      // Use the "create-react-app" framework for the application.
      framework: 'create-react-app',
      // Use the Webpack bundler.
      bundler: 'webpack',
    },
  },
  // Configuration for end-to-end (E2E) tests.
  e2e: {
    // Disable Chrome's web security during tests.
    chromeWebSecurity: false,
    // Enable the experimental "Cypress Test Runner Studio" feature.
    experimentalStudio: true,
    // Enable the experimental mode for running all test specs.
    experimentalRunAllSpecs: true,
    // Configuration for retry attempts during test execution.
    retries: {
      // Number of retries in run mode.
      runMode: 1,
      // Number of retries in open mode.
      openMode: 0,
    },
  },
})
