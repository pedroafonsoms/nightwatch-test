module.exports = {

    src_folders: ["src/tests"],

    webdriver: {
        start_process: true,
        port: 9515,
        server_path: require('chromedriver').path
    },

    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
}
