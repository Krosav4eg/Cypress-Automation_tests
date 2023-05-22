const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        viewportWidth: 1200,
        viewportHeight: 800,
        retries: 2,
        mochaAwesomeReporterOptions: {
            reportDir: "reporter-output",
            overwrite: true,
            html: true,
            json: true,
            timestamp: "mmddyyyy_HHMMss",
            screenshotOnRunFailure: true,
            screenshotsFolder: "reporter-output/assets"
        },

    },
});
