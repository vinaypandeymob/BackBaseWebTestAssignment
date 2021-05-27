var testData = require('../resources/testData.json');

module.exports = function () {

    'use strict';
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var bbloglogo = objLocator.findLocator(objRepo.loginPage.bbloglogo);
    var txtusername = objLocator.findLocator(objRepo.loginPage.txtusername);
    let username = by.css("[placeholder='Username']");
    let password = by.css("[placeholder='Password']");
    let welcometext = by.xpath("//p[.='A place to share your knowledge.']");
    let errormessage = by.xpath("//li[contains(.,'email or password is invalid')]");
    var txtPassword = objLocator.findLocator(objRepo.loginPage.txtpassword);
    var btnlogin = objLocator.findLocator(objRepo.loginPage.btnlogin);
    var lintextsignin = objLocator.findLocator(objRepo.loginPage.linktxtsignin);
    var loginerrormessage = objLocator.findLocator(objRepo.loginPage.errorMessageLogin);

    this.launchURL = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };
    this.clickOnSignIn = function () {
        buttonActions.click(lintextsignin);
        waitActions.wait(3000);
        return this;
    };
    this.enterUsername = function (value) {
        element(username).clear();
        inputBoxActions.type(txtusername, value);
        waitActions.wait(3000);
        return this;
    };
    this.enterPassword = function (value) {
        waitActions.wait(3000);
        element(password).clear();
        inputBoxActions.type(txtPassword, value);
        return this;
    };
    this.click = function () {
        browser.pause();
        buttonActions.click(btnlogin);
        return this;
    };
    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(bbloglogo);
        return this;
    };
    this.verifyTheErrorMessage = function () {
        return loginerrormessage;
    };
    this.verifyURLafterLogin = function () {
        waitActions.wait(3000);
        expect(browser.getCurrentUrl()).toBe(testData.url.baseUrl);
        return this;
    };
    this.verifyAfterLoginWelcomeText = function () {
        expect((element(welcometext)).getText()).toBe(testData.welcometext.greetingText);
        waitActions.wait(3000);
        return this;
    };
    this.verifyTheErrorMessageOnLoginScreen = function () {
        waitActions.wait(3000);
        expect(element(errormessage).getText()).toBe(testData.errorMessages.Invalidtext);
        return this;
    };
};