var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var clientId;

module.exports = function () {
    this.Given(/^open the login page$/, function (done) {
        done()
    });
    this.When(/^login with users UserName and PassWord:$/, function (table, done) {
        // expect('hello').to.eventually.not.equal(table.rows).and.notify(done);
        console.log(table.rows()[0]);
        console.log(table.hashes().toString());
        done()
    });

    this.Then(/^login LoginResult:$/, function (done) {
        //console.log(table);
        done();
    });
    //this.Given(/^Say "([^"]*)" to (.*)$/, function (arg1, name,table,  done) {
    //    // Write code here that turns the phrase above into concrete actions
    //    console.log("arg1: "+ arg1)
    //    console.log("name: "+name)
    //    console.log("table: "+table.raw())
    //
    //    done();
    //});
    //
    //this.When(/^Say "([^"]*)" to (.*)$/, function (arg1, name, table, done) {
    //    // Write code here that turns the phrase above into concrete actions
    //    console.log("arg1: "+ arg1)
    //    console.log("name: "+name)
    //    console.log("table: "+table)
    //
    //    done();
    //});
};