var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
//driver.manage().setTimeouts({implicit: (10000)});

class DriverClass{
    constructor(){
        global.driver = driver;
    }
    
    quit(){
        driver.close();
    }
}
module.exports = DriverClass;