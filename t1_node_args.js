const args = require('minimist')(process.argv.slice(2));

let n = args.n;
let m = args.m;

class Num{
	constructor(n, m){
		this.n = n;
		this.m = m;
	}
	sumNumbers() {
		if(this.m > this.n.toString().length) return false;
		return this.n.toString().split("").reverse().filter((item, i) => i < this.m).reduce((cur, next) => +cur + +next);
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
	commonMultiple(){
		let arr = [];
        for(let i = 1; i < this.n*this.m; i++){
            if(i % this.n == 0 && i % this.m == 0){
				arr.push(i);
			}
        }
        return arr;
	}
	mersenNumbers(){
        let simple = [];
        f: for(let i = 2; i < this.n; i++){
            for(let j = 2; j < i; j++){
                if(i % j == 0){
                    continue f;
                }
            }
            simple.push(i);
        }
        return simple.filter(val => Number.isInteger(Math.log2(val+1)));
    }
}

let num = new Num(n, m);
console.log('Sum of m last numbers of n', num.sumNumbers());
console.log('Sum of m last numbers of n', num.sumNumbers2());
console.log('Common Multiples of n and m less than n*m', num.commonMultiple());
console.log('Mersen numbers less than n', num.mersenNumbers());