(function () {
    'use strict';

    // Helper functions
    global.wait = {
        until: {
            present: function (elementFinder, optionalTimeout) {
                browser.driver.wait(function () {
                    return elementFinder.isPresent().then(function (present) {
                        return present;
                    });
                }, optionalTimeout || 60000);
            }
        }
    };

    global.commons = {};
    global.commons.inputBoxActions = require('./commons/inputBoxActions.js');
    global.commons.buttonActions = require('./commons/buttonActions.js');
    global.commons.waitActions = require('./commons/waitActions.js');
    global.utils = {};
    global.utils.objectLocator = require('./utils/objectLocator.js');
    global.pages = {};
    global.pages.login = require('./pages/login.js');
    global.pages.home = require('./pages/home.js');
    global.pages.articlecurd = require('./pages/articlecurd.js');
}());
