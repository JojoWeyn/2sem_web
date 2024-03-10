
//задание 1
let name = "Джон";
let admin = name;
alert(admin); // Покажет "Джон"

//задание 2
let a = Number(prompt("Первое число?", 1));
let b = Number(prompt("Второе число?", 2));
alert(a + b); // Теперь должно показать 3

//задание 3
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

//задание 4
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

//задание 5
let number;
do {
    number = Number(prompt("Введите число больше 100"));
} while (number <= 100);

//задание 6
function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}
printPrimes(10); // Выведет 2, 3, 5, 7
