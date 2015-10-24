var World, chai, chaiAsPromised;
chai = require('chai');
chaiAsPromised = require('chai-as-promised');
module.exports.World = function World(callback) {
    chai.use(chaiAsPromised);
    this.expect = chai.expect;
    callback();
};
