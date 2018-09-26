import {browser}from "protractor"
var jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HTMLReport = require('protractor-html-reporter');
var jasmineReporters = require('jasmine-reporters'); 

exports.config = {
    directConnect: true,
  
   
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000
      },
      onPrepare: function () {
        browser.manage().window().maximize()
        //To Obtain the Results in XML File
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
          consolidateAll: true,
          savePath: './Reports',
          filePrefix: 'xmlresults'

        }))

        //ScreenSHot On Failure
        var fs = require('fs-extra');
 
fs.emptyDir('./Reports/screenshots/', function (err) {
        console.log(err);
    });
 
    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
 
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('./Reports/screenshots/' + browserName + '-'+result.fullName + '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });

      },
        
      onComplete: function(){
       
        
    //HTML Reports Called once Tests are Finished
        var browserName, browserVersion;
        var testConfig
        var capsPromise = browser.getCapabilities();
    
        capsPromise.then(function (caps) {
           browserName = caps.get('browserName');
           browserVersion = caps.get('version');
    
           //var HTMLReport = require('protractor-html-reporter');
    
           testConfig = {
               reportTitle: 'Test Execution Report',
               outputPath: './Reports',
               screenshotPath: './Reports/screenshots',
               testBrowser: browserName,
               browserVersion: browserVersion,
               modifiedSuiteName: false,
               screenshotsOnlyOnFailure: true
           };
           new HTMLReport().from('./Reports/xmlresults.xml', testConfig);
       });
      },
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['taviepro.js'],

    capabilities: {
        'browserName': 'chrome'
      },

      allScriptsTimeout: 110000
  
    
    
  };
  