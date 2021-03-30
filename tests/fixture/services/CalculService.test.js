const assert = require('assert');
const sinon = require('sinon');

describe('CalculService', () => {
  describe('#addition', () => {
    it('should add values', () => {
      // complexité cyclomatique
      let result = CalculService.addition(2, 9);
      assert.strictEqual(result, 11);
    });
  });

  describe('#soustraction', () => {
    it('should substract values', () => {
      let result = CalculService.soustraction(9, 2);
      assert.strictEqual(result, 7);
    });
  });

  describe('#division', () => {
    it('should divide values', () => {
      let result = CalculService.division(9, 2);
      assert.strictEqual(result, 4.5);
    });
    it('should not divide by 0', () => {
      assert.throws(() => { CalculService.division(9, 0); }, Error);
    });
  });

  describe('#multiplication', () => {
    it('should multiply values', () => {
      let result = CalculService.multiplication(9, 2);
      assert.strictEqual(result, 18);
    });
  });

  describe('#pourcentage', () => {
    it('should be convert to percent', () => {
      const stub = sinon.stub(CalculService, 'multiplication').callsFake((a, b) => { return 20 });
      const stubdiv = sinon.stub(CalculService, 'division').callsFake((a, b) => { return 10; });
      let result = CalculService.pourcentage(0.2, 20);
      assert.strictEqual(result, 10);
      CalculService.multiplication.restore();
      CalculService.division.restore();
    });
    it('shoudl calls div and mul when calculating a percentage', () => {
      const spyMul = sinon.spy(CalculService, 'multiplication');
      const spyDiv = sinon.spy(CalculService, 'division');
      let result = CalculService.pourcentage(0.2, 20);
      assert(spyDiv.calledOnce);
      assert(spyMul.calledOnce);
      assert.strictEqual(result, 0.04);
    })
  });

  describe('#carre', () => {
    it('should pow', () => {
      const res = CalculService.carre(2, 4);
      assert.strictEqual(res, 16)
    });
  });
});
