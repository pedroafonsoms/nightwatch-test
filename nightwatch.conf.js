module.exports = {

    src_folders: ['src/tests'],

    page_objects_path: './src/pages',

    test_settings: {
        default: {
            launch_url: 'https://pokedex.org/',
            desiredCapabilities: {
                browserName: 'chrome',
            },
            webdriver: {
                start_process: true,
                port: 9515,
                server_path: require('chromedriver').path
            }
        },

        headless: {
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless']
                }
            }
        }
    }
}
