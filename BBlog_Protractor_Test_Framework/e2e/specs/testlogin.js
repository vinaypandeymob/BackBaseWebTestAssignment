'use strict';

var testData = require('../resources/testData.json');

var login = new pages.login();
beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(2000);
});

describe('TC_001 Verify and validate the BBlog URL. ', function () {

    it('Launch & verify BBlog URL', function () {
        browser.get(testData.url.javasciptalert);
        browser.get(testData.url.baseUrl);
        expect(browser.getCurrentUrl()).toContain(testData.url.baseUrl);
    });
});

describe('TC_002 Verify the login functionality with invalid credential', function () {

    it('Navigate ot the sign in', function () {
        login.clickOnSignIn();
        expect(browser.getCurrentUrl()).toBe(testData.url.signInUrl);
    });
    it('Login with Invalid Credentials', function () {
        login.enterUsername(testData.Invalidcredentials.username);
        login.enterPassword(testData.Invalidcredentials.password);
        login.click();
        login.verifyTheErrorMessageOnLoginScreen();
    });
});

describe('TC_003 Verify the login functionality with valid credential', function () {

    it('Login with valid Credentials', function () {
        login.clickOnSignIn();
        login.enterUsername(testData.Validcredentials.username);
        login.enterPassword(testData.Validcredentials.password);
        console.log(testData.Validcredentials.password);
        login.click();
        login.verifyURLafterLogin();
        login.verifyAfterLoginWelcomeText();
    });
});