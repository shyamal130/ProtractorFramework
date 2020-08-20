describe('calc test', function() {
    it('addit', function() {
        
        browser.get('http://juliemr.github.io/protractor-demo/');
    
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('3');
        element(by.css('[ng-click="doAddition()"]')).click();
        
        let result = element(by.cssContainingText('.ng-binding','5'));
        console.log(result);

        browser.sleep(5000);
        expect(result.getText()).toEqual('5');
        browser.sleep(5000);


         //expect(result.getText()).toEqual('5');
        
    });

  });