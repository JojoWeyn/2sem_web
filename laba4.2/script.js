//задание 1
//Реализовать генератор, бесконечно возвращающий случайное число в заданном диапазоне random(n, m)
function* randomGenerator(n, m) {
    while (true) {
        yield Math.floor(Math.random() * (m - n + 1)) + n;
    }
}

const random = randomGenerator(1, 10);
console.log(random.next().value);


//Реализовать генератор, бесконечно возвращающий очередное число из последовательности Падована
function* padovanSequence() {
    let a = 0, b = 1, c = 1;
    while (true) {
        yield a;
        [a, b, c] = [b, c, a + b];
    }
}

const padovan = padovanSequence();
console.log(padovan.next().value); // Пример вывода: 0
console.log(padovan.next().value); // Пример вывода: 1


//Реализовать генератор, бесконечно возвращающий очередное простое число
function* primeGenerator() {
    let current = 2;
    while (true) {
        yield current;
        current = nextPrime(current);
    }
}

function nextPrime(num) {
    num++;
    while (!isPrime(num)) {
        num++;
    }
    return num;
}

function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

const primes = primeGenerator();
console.log(primes.next().value); // Пример вывода: 2
console.log(primes.next().value); // Пример вывода: 3



//задание 2
//Посчитать число вхождений букв (или слов) в строке, используя Map
function countLetters(str) {
    const map = new Map();
    for (const char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
}

const result = countLetters('hello world');
console.log(result.get('l')); // Пример вывода: 3


//Написать функцию getPrime(n), возвращающее n-ное по счёту простое число, используя BigInt
function getPrime(n) {
    let count = 0;
    let num = BigInt(2);
    while (count < n) {
        if (isPrime(num)) {
            count++;
        }
        num++;
    }
    return num;
}

function isPrime(num) {
    for (let i = 2n, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0n) return false;
    }
    return num > 1n;
}

console.log(getPrime(10)); // Пример вывода: 29
