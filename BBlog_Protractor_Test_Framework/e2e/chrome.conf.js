var config = require('./base.conf.js');

config.Capabilities = [

    {
        seleniumAddress: 'http://localhost:4444/wd/hub',
        'browserName': 'chrome',
        'acceptInsecureCerts': true,
        'chromeOptions': {
            args: ['--window-size=900,720'],
            w3c: false,
            prefs: {
                'download': {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': 'e2e-test/e2e/download',
                }
            }
        }
    },
],

    module.exports.config = config;