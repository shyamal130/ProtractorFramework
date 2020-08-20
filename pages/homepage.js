let homepage = function(){

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterFiNum = function(fino){
        //firstNumber_input.sendkeys(fino);
        //element(by.model('first')).sendKeys(fino);
        firstNumber_input.sendKeys(fino);
    };

    this.enterSeNum = function(seno){
        //secondNumber_input.sendkeys(seno);
        //element(by.model('second')).sendKeys(seno);
        secondNumber_input.sendKeys(seno);
    };


    this.clickGo = function(){
        goButton.click();
        //element(by.css('[ng-click="doAddition()"]')).click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding',result));
        console.log(output);
        expect(output.getText()).toEqual(result);
    };
};
module.exports =new homepage();