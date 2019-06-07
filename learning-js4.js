const isPrime = (n) => {
    if (n < 2) {
      return false;
    }
  
    for (let div = 2; div <= n; div += 1) {
      if (n % div === 0 && div < n) {
        return false;
      }
    }
    return true;
  };



assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(5), 120);