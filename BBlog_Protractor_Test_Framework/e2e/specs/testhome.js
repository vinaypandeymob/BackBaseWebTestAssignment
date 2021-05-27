'use strict';

var home = new pages.home();
beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(2000);
});

describe('TC_004 Verify the home screen after geting logged in Testcases', function () {
    it('Verify user LoggedIn successfully', function () {
        home.verifyURLafterLogin();
    });
});
