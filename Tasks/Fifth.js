//вывести все числа делящиеся только на себя до 100

function numPrime(n) {
const sift = [];
const primes = [];

for (let i = 2; i <= n; i++){
    if (!sift[i]){
        primes.push(i);
        for (let j = i * i; j <= n; j += i){
          sift[j] = true;
        }
    }
}

return primes;
}

console.log(numPrime(100));