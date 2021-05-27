module.exports = function () {
    'use strict';
    var testData = require('../resources/testData.json');

    // home page
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    let welcometext = by.xpath("//p[.='A place to share your knowledge.']");  
    var btnStartNow = objLocator.findLocator(objRepo.homePage.btnStartNow);
    var txtwelcome = objLocator.findLocator(objRepo.homePage.txtwelcome);

    
    this.click = function () {
        buttonActions.click(btnStartNow);
        return this;
    };
    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(btnlogout);
    };
    this.capturetext = function(){
        verifyActions.getText(txtwelcome);
        return this;
    };
    this.verifyAfterLoginWelcomeText = function () {
        waitActions.wait(3000);
        expect((element(welcometext)).getText()).toBe(testData.welcometext.greetingText);
        return this;
    };
     this.verifyURLafterLogin = function () {
        waitActions.wait(3000);
        expect(browser.getCurrentUrl()).toBe(testData.url.baseUrl);
        return this;
    };
};