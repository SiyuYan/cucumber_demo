var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {


    this.Given(/^open the login page$/, function (done) {
        browser.driver.get('https://github.com/login');
        expect(browser.driver.getTitle()).to.eventually.equal('Sign in · GitHub').and.notify(done);
    });

    this.When(/^login with users "([^"]*)" and "([^"]*)"$/, function (UserName, PassWord, done) {
        browser.driver.findElement(by.id('login_field')).sendKeys(UserName);
        browser.driver.findElement(by.id('password')).sendKeys(PassWord);
        browser.driver.findElement(by.name('commit')).click();
        done()
    });

    this.Then(/^login "(.*)"$/, function (LoginResult, done) {
        browser.driver.wait(function () {
            if (LoginResult === 'successful')
                expect(browser.driver.getCurrentUrl()).to.eventually.equal('https://github.com/').and.notify(done);
            else {
                expect(browser.driver.getCurrentUrl()).to.eventually.not.equal('https://github.com/').and.notify(done);
            }
        });
    });
};