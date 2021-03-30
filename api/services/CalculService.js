module.exports = {
  addition: (a, b) => {
    return a + b;
  },
  soustraction: (a, b) => {
    return a - b;
  },
  division: (a, b) => {
    if (b === 0) {
      throw new Error('Division by 0');
    }
    return a/b;
  },
  multiplication: (a, b) => {
    return a*b;
  },
  pourcentage: (a, prct) => {
    let result = CalculService.multiplication(a, prct);
    result = CalculService.division(result, 100);
    return result;
  },
  carre: (a, x) => {
    return a**x;
  }
};
