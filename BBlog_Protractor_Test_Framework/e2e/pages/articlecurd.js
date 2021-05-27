var testData = require('../resources/testData.json');
module.exports = function () {
    'use strict';
    browser.waitForAngularEnabled(true); //will observe the ControlFlow for new promises again.

    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var click_Newpost = objLocator.findLocator(objRepo.postArticle.lnknewpost);
    var txtArticleTitle = objLocator.findLocator(objRepo.postArticle.txtarticletitle);
    var txtArticleAbout = objLocator.findLocator(objRepo.postArticle.txtarticleabout);
    var txtareaArticle = objLocator.findLocator(objRepo.postArticle.txtareaarticle);
    var txt_Tag = objLocator.findLocator(objRepo.postArticle.txttag);
    var btn_publishArticle = objLocator.findLocator(objRepo.postArticle.btnpublisharticle);
    var btn_editArticle = objLocator.findLocator(objRepo.postArticle.btneditarticle);
    var btn_deleteArticle = objLocator.findLocator(objRepo.postArticle.btndeletearticle);
    let button = by.css(".btn");
    let welcometext = by.xpath("//p[.='A place to share your knowledge.']");
    let welcomeheaderText = by.css("h1");

    this.clickNewPost = function () {
        waitActions.wait(3000);
        buttonActions.click(click_Newpost);
        return this;
    };
    this.ThePost = function (title, about, textarea, tag) {
        waitActions.wait(3000);
        inputBoxActions.type(txtArticleTitle, title);
        waitActions.wait(3000);
        inputBoxActions.type(txtArticleAbout, about);
        waitActions.wait(3000);
        inputBoxActions.type(txtareaArticle, textarea);
        waitActions.wait(3000);
        inputBoxActions.type(txt_Tag, tag);
    }
    this.clickPublishArticleBtn = function () {
        waitActions.wait(3000);
        buttonActions.click(btn_publishArticle);
        return this;
    };
    this.clickEditArticle = function () {
        waitActions.wait(3000);
        buttonActions.click(btn_editArticle);
        return this;
    };
    this.clickDeleteArticle = function () {
        waitActions.wait(3000);
        buttonActions.click(btn_deleteArticle);
        return this;
    };
    this.clickNext = function () {
        buttonActions.click(click_Next);
        return this;
    };
    this.capturetext = function () {
        verifyActions.getText(invalidcredentialstext);
        return this;
    };
    this.assertArticleTitle = function () {
        waitActions.wait(3000);
        expect(element(welcomeheaderText).getText()).toBe(testData.post.title);
        return this;
    };
    this.verifyItisPostScreen = function () {
        waitActions.wait(3000);
        expect((element(button)).getText()).toBe(testData.post.btnNewPublish);
        return this;
    };
    this.verifyScreenAfterEditingPost = function () {
        waitActions.wait(5000);
        expect((element(button)).getText()).toBe(testData.post.btnEditPublish);
        return this;
    };
    this.assertHomeScreenAfterDeletingArticle = function () {
        waitActions.wait(3000);
        expect((element(welcometext)).getText()).toBe(testData.welcometext.greetingText);
        return this;
    };
};