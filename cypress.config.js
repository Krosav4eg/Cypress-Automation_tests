const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        viewportWidth: 1200,
        viewportHeight: 800,
        retries: 3,
        mochawesomeReporterOptions: {
            reportDir: "cypress/report/mochawesome-report/repo",
            overwrite: true,
            html: true,
            json: true,
            timestamp: "mmddyyyy_HHMMss"
        },
        screenshotsFolder: "cypress/report/mochawesome-report/screen",
    },
});
