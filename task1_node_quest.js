const readline = require('readline');

const prompts = readline.createInterface(process.stdin, process.stdout);

prompts.question('Enter first value', (n) => {
  prompts.question('Enter second value', (m) => {
    class Num {
      constructor(n, m) {
        this.n = n;
        this.m = m;
      }
      sumNumbers() {
        if (this.m > this.n.toString().length) return false;
        return this.n.toString().split('').reverse().filter((item, i) => i < this.m)
          .reduce((cur, next) => +cur + +next);
      }
      sumNumbers2() {
        let count = m;
        let sum = 0;
        let rep = 0;
        while(count > 0){
            sum += n%10;
            n = parseInt(n/10);
            count -= 1;
        if(n==0){rep += 1;}
            if(rep > 1){return false;}
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
        const simple = [];
        f: for (let i = 2; i < this.n; i += 1) {
          for (let j = 2; j < i; j += 1) {
            if (i % j === 0) {
              continue f;
            }
          }
          simple.push(i);
        }
        return simple.filter(val => Number.isInteger(Math.log2(val + 1)));
      }
    }

    const num = new Num(n, m);
    console.log('Sum of m last numbers of n', num.sumNumbers());
    console.log('Sum2 of m last numbers of n', num.sumNumbers2());
    console.log('Common Multiples of n and m less than n*m', num.commonMultiple());
    console.log('Mersen numbers less than n', num.mersenNumbers());

    prompts.close();
  });
});

