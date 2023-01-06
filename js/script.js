


// 1) Створити функцію яка отримує невизначену кількість аргументів, вираховує їх суму і повертає результат обчислень

function allInfo(...a) {
    let b = 0;
    for (let i = 0; i < arguments.length; i++){
        b += arguments[i];
    };
    return` Сума масиву : ${b}`
};
console.log(allInfo(5, 2, 6));



// 2)Створити функцію яка отримує від користувача день народження, місяць, рік і повертає вік користувача і якщо сьогодні день народження користувача то вивести привітання.

// 3) Модифікуват завдання 2 добавивши в аргументи функцію вітання яка буде використанна як колбек, і в разі дня народження буде вітати користувача


function greeting() {
    console.log('Вітаємо з днем народження');
}

const month = parseInt(prompt('Вкажіть місяць :'));
const day = parseInt(prompt('Вкажіть день :'));
const year = parseInt(prompt('Вкажіть рік :'));
const date = new Date;
const dataInfo = new Date(year, month -1, day);
function data(info, fn) {
    if (info.getMonth() === date.getMonth() && info.getDate() === date.getDate()) {
        fn();
    };
    console.log(`Вам : ${date.getFullYear() - info.getFullYear()} років`);
    return `Вам: ${date.getFullYear() - info.getFullYear() } років`;
};

data(dataInfo, greeting);


// 4) Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер сторіччя.Наприклад:

const years = parseInt(prompt ('Введіть рік :'));

function century(year) {
    let a = 0;
    let b = 0;
    if (year % 100 == 0) {
        a = year / 100 ;
    }
    else {
        b = Math.floor(year / 100) + 1;
    }
    return `${year} Це ${a > 0 ? a : b} сторіччя`;
};
century(years)
console.log(century(years));




// 5) Створити функцію яка повертає інформацію скільки днів в цьому місяці а також в наступному(В цьому місяці 30 днів в наступному 31)

let monthA = parseInt(prompt("Введіть місяць числом :"));
let yearA = parseInt(prompt("Введіть рік :"));

function daysInMonth(month, year) {
    return `В цьому місяці : ${new Date(year, month, 0).getDate()} днів, а в наступному ${new Date(year, month + 1, 0).getDate()}`;
}
console.log(daysInMonth(monthA, yearA));
