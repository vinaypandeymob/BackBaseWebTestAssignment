module.exports = function () {

    //wait till specified time
    this.wait = function (value) {
        browser.sleep(value | 2000);
    };
    
};
