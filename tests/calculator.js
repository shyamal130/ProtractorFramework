
let homepage = require('../pages/homepage');

describe('calculator', function () {
    it('add', function () {
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');
        
        //element(by.model('first')).sendKeys('2');
        homepage.enterFiNum('4');
        //element(by.model('second')).sendKeys('3');
        homepage.enterSeNum('3');
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();
        //let result = element(by.cssContainingText('ng-binding','5'));
        //expect(result.getText()).toEqual('5');
        browser.sleep(5000);
        homepage.verifyResult('7');

        browser.sleep(4000);

    });

    

  });