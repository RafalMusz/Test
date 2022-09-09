const {Builder, By, Key, until, wait, findElement,} = require('selenium-webdriver');
var DriverClass = require('./driverClass');
var webdriver = require('selenium-webdriver');

class Chrome extends DriverClass{
    new_run(){
        driver = new Builder()
        .usingServer()
        .withCapabilities({ browserName: 'chrome' })
        .build();
    }

    go_to_url(url){
        //going to url provided in variables file
        driver.get(url);
    }
    
    async button_push(locator){
        //acceptin cookies
        var button = await driver.wait(until.elementLocated(By.xpath(locator)), 10000);
        button.push();
    }
    /*
    async _button_push()
    var button = driver.wait(until.elementLocated(By.id('foo'), 10000);
   *     button.click();
    */
}
module.exports = new Chrome;



