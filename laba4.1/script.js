//задание 1
//Найти максимальную разницу между элементами массива
function maxDifference(arr) {
    return Math.max(...arr) - Math.min(...arr);
}

console.log(maxDifference([1, 4, 6, 3, 2])); // 5



//Вернуть массив без повторяющихся элементов
function uniqueArray(arr) {
    return [...new Set(arr)];
}

console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]


//Дан массив объектов, вернуть только те, у которых isDone: true
function filterDone(arr) {
    return arr.filter(item => item.isDone);
}

console.log(filterDone([
    {id: 1, isDone: true}, 
    {id: 2, isDone: false},
    {id: 3, isDone: true}
])); // [{id: 1, isDone: true}, {id: 3, isDone: true}]



//задание 2
//Найти элементы массива, которые больше указанного числа
function greaterThan(arr, num) {
    return arr.filter(item => item > num);
}

console.log(greaterThan([1, 4, 6, 3, 2], 2)); // [4, 6, 3]


//Дан многомерный массив произвольной вложенности. Написать функцию, делающую из него "плоский" массив
function flattenArray(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

console.log(flattenArray([1, 4, [34, 1, 20], [6, [6, 12, 8], 6]])); // [1, 4, 34, 1, 20, 6, 6, 12, 8, 6]


//задание 3
//Найти, сколько есть в массиве пар чисел, дающих в сумме 0
function countPairsWithZeroSum(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                count++;
            }
        }
    }
    return count;
}

console.log(countPairsWithZeroSum([-7, 12, 4, 6, -4, -12, 0])); // 2
console.log(countPairsWithZeroSum([-1, 2, 4, 7, -4, 1, -2])); // 3

//То же самое, но найти количество троек таких чисел
function countTriplesWithZeroSum(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(countTriplesWithZeroSum([-1, 2, 4, 7, -4, 1, -2])); // 1