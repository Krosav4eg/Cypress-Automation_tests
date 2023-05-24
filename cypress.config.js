const {defineConfig} = require("cypress");

module.exports = defineConfig({
    projectId: 'eomav6',
    e2e: {
        viewportWidth: 1200,
        viewportHeight: 800,
        chromeWebSecurity: false,
        videoCompression: true,
        videoUploadOnPasses: false,
        retries: 2,
    },
});