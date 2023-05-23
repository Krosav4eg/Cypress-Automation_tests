const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        viewportWidth: 1200,
        viewportHeight: 800,
        chromeWebSecurity: false,
        trashAssetsBeforeRuns: true,
        screenshotOnRunFailure: true,
        screenshotsFolder: "reporter-output/screenshots",
        videoUploadOnPasses: false,
        videoCompression: 32,
        videosFolder: "reporter-output/videos",
        retries: 2,
        mochaAwesomeReporterOptions: {
            reportDir: "reporter-output",
            overwrite: true,
            html: true,
            json: true,
            timestamp: "mmddyyyy_HHMMss",
        },
    },
});
