const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const sinon = require('sinon');

describe('A stub test case', () => {
  let sandbox;
  let funcStub;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    funcStub = sandbox.spy();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should succeed', async () => {
    expect(true).to.equal(true);
    expect(funcStub.called).to.equal(false);
  });
});
