const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        viewportWidth: 1200,
        viewportHeight: 800,
        retries: 3
    },
});
