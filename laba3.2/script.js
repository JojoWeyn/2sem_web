//задание 1
//Вернуть число в обратном порядке
function reverseNumber(num) {
    return parseInt(String(num).split('').reverse().join(''));
}

console.log(reverseNumber(123)); // 321



//Вернуть число без повторяющихся цифр
function removeDuplicateDigits(num) {
    return parseInt([...String(num)].sort().join(''));
}

console.log(removeDuplicateDigits(111333456)); // 13456




//Посчитать, сколько раз в данном числе встречается данная цифра
function countDigitOccurrences(num, digit) {
    return String(num).split('').filter(char => char === digit).length;
}

console.log(countDigitOccurrences(1355567, 5)); // 3




//Посчитать самую длинную последовательность нулей/единиц в двоичной записи данного числа
function longestBinarySequence(num) {
    const binary = num.toString(2);
    let maxSequence = 0;
    let currentSequence = 0;

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            currentSequence++;
            if (currentSequence > maxSequence) {
                maxSequence = currentSequence;
            }
        } else {
            currentSequence = 0;
        }
    }

    return maxSequence;
}

console.log(longestBinarySequence(10)); // 2




//задание 2
//Найти самый первый неповторяющийся символ в строке
function firstUniqueChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

console.log(firstUniqueChar('фывфавыапрс')); // 'п'


//Cгенерировать строку заданной длины из случайных символов, взятых из набора английскийх букв и цифр
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

console.log(generateRandomString(5)); // Пример вывода: '2fvg6'



//Вернуть только уникальные символы строки
function uniqueChars(str) {
    return [...new Set(str)].join('');
}

console.log(uniqueChars('позволяеткопироватьтекстиз')); // 'позвляеткираьс'


