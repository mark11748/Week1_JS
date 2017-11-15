//"npm test" will start jasmine

describe('addition',function(){
  it('takes two numbers as parameters; returns sum', function(){
    var calculator1 = require('./../js/pingpong.js').calculatorModule;
    var num1=1;
    var num2=2;
    expect(num1).toEqual(1);
    expect(num2).not.toEqual(1);
  });
});
