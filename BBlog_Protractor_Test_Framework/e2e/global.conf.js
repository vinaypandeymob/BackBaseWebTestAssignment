//Declare all your global configuration here which is common across all suites

var globalConf = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000,
        includeStackTrace: true,
        isVerbose: true,
    },
    onPrepare: function () {
        browser.getProcessedConfig().then(function(data){
            console.log(data);
        });
    },
    allScriptsTimeout: 120000,
    getPageTimeout: 120000,
    afterLaunch: function (exitCode) {
    }
}   

//Export the global configuration to be called in local config files
module.exports = globalConf;