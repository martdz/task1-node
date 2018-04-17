const args = require('minimist')(process.argv.slice(2));

delete args._;
const { x, y } = args;

class Num {
  constructor(n, m) {
    this.n = n;
    this.m = m;
  }
  sumNumbers() {
    if (this.m > this.n.toString().length) { return false; }
    return this.n.toString().split('').reverse().filter((item, i) => i < this.m)
      .reduce((cur, next) => parseInt(cur, 10) + parseInt(next, 10));
  }
  sumNumbers2() {
    let count = this.m;
    let sum = 0;
    let rep = 0;
    let nn = this.n;
    while (count > 0) {
      sum += nn % 10;
      nn = parseInt(nn / 10, 10);
      count -= 1;
      if (nn === 0) { rep += 1; }
      if (rep > 1) { return false; }
    }
    return sum;
  }
  commonMultiple() {
    const arr = [];
    for (let i = 1; i < this.n * this.m; i += 1) {
      if (i % this.n === 0 && i % this.m === 0) {
        arr.push(i);
      }
    }
    return arr;
  }
  mersenNumbers() {
    const sieve = [];
    const primes = [];
    for (let i = 2; i <= this.n; i += 1) {
      if (!sieve[i]) {
        primes.push(i);
        for (let j = i * 2; j <= this.n; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes.filter(val => Number.isInteger(Math.log2(val + 1)));
  }
}

const num = new Num(x, y);
console.log(num.sumNumbers());
console.log(num.sumNumbers2());
console.log(num.commonMultiple());
console.log(num.mersenNumbers());
