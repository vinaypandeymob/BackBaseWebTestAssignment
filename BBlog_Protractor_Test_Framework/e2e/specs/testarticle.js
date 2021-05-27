'use strict';
var testData = require('../resources/testData.json');
var login = new pages.login();
var articlecurd = new pages.articlecurd();
beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(2000);
});

describe('TC_005 Verify the screen when user create article with empty data fields are empty', function () {

    it('Click on the Publish Article button, without entering any data in all text fields.', function () {
        browser.get(testData.url.javasciptalert);
        browser.get(testData.url.baseUrl);
        login.clickOnSignIn();
        login.enterUsername(testData.Validcredentials.username);
        login.enterPassword(testData.Validcredentials.password);
        login.click();
        articlecurd.clickNewPost();
        articlecurd.clickPublishArticleBtn();
        articlecurd.verifyItisPostScreen();
    });
});

describe('TC_006 Verify the create New Post functionality', function () {

    it('Create post article functionality', function () {
        browser.get(testData.url.javasciptalert);
        browser.get(testData.url.baseUrl);
        login.clickOnSignIn();
        login.enterUsername(testData.Validcredentials.username);
        login.enterPassword(testData.Validcredentials.password);
        login.click();
        articlecurd.clickNewPost();
        articlecurd.ThePost(testData.newTitle.title, testData.post.about, testData.post.textArea, testData.post.tag);
        articlecurd.verifyItisPostScreen();
        articlecurd.clickPublishArticleBtn();
        articlecurd.verifyScreenAfterEditingPost();
    });
});

describe('TC_007 Verify the edit Article functionality', function () {

    it('Edit the created article ', function () { 
        articlecurd.clickEditArticle();
        articlecurd.ThePost(testData.post.title, testData.post.about, testData.post.textArea, testData.post.tag);
        articlecurd.clickPublishArticleBtn();
        articlecurd.verifyScreenAfterEditingPost();
    });
});

describe('Verify the created article', function () {

    it('Read the created post article', function () { 
        articlecurd.assertArticleTitle();
    });
});

describe('TC_009 Verify the delete article functionality', function () {

    it('Delete the created articles', function () {
        articlecurd.clickDeleteArticle();
        articlecurd.assertHomeScreenAfterDeletingArticle();
    });
});
