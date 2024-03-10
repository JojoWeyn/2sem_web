//задание 1 
//Функция counter(n)
function counter(n) {
    let count = n;
    const intervalId = setInterval(() => {
        console.log(count);
        count--;
        if (count < 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}

counter(5); // Выведет числа от 5 до 0 с интервалом в 1 секунду


//Функция createCounter(n)
function createCounter(n) {
    let count = n;
    let intervalId = null;

    return {
        start: function() {
            if (intervalId !== null) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(() => {
                console.log(count);
                count--;
                if (count < 0) {
                    clearInterval(intervalId);
                    intervalId = null;
                }
            }, 1000);
        },
        pause: function() {
            clearInterval(intervalId);
        },
        stop: function() {
            clearInterval(intervalId);
            intervalId = null;
            count = n;
        }
    };
}

const counter = createCounter(5);
counter.start(); // Запускает счётчик
// counter.pause(); // Приостанавливает счёт
// counter.stop(); // Останавливает счёт и сбрасывает



//задание 2
//Функция delay(N)
function delay(N) {
    return new Promise(resolve => setTimeout(resolve, N * 1000));
}

// Решение задачи со счётчиком через функцию delay
async function countdown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
        await delay(1);
    }
}

countdown(5); // Выведет числа от 5 до 0 с интервалом в 1 секунду


//Функция для получения названия первого репозитория
async function getFirstRepo(username) {
    try {
        const user = await fetch(`https://api.github.com/users/${username}`).then(res => res.json());
        const repos = await fetch(user.repos_url).then(res => res.json());
        return repos[0].name;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

getFirstRepo('iliakan').then(repoName => console.log(repoName));


//задание 3
//Переписывание функции getGithubUser
class HttpError extends Error {
    constructor(response) {
       super(`${response.status} for ${response.url}`);
       this.name = 'HttpError';
       this.response = response;
    }
   }
   
   async function loadJson(url) {
    const response = await fetch(url);
    if (response.status === 200) {
       return response.json();
    } else {
       throw new HttpError(response);
    }
   }
   
   async function getGithubUser() {
    let name = prompt("Введите логин?", "iliakan");
   
    while (true) {
       try {
         const user = await loadJson(`https://api.github.com/users/${name}`);
         alert(`Полное имя: ${user.name}.`);
         return user;
       } catch (err) {
         if (err instanceof HttpError && err.response.status === 404) {
           alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
           name = prompt("Введите логин?", "iliakan");
         } else {
           throw err;
         }
       }
    }
   }
   
   getGithubUser();