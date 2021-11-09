// Задание 1

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.


function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
  
console.log( ucFirst("some Text") );



// Задание 2

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.


function checkSpam(str){
    let lower = str.toLowerCase();

    return lower.includes('badword') || lower.includes('xxx');
}

console.log(checkSpam('xX'));

console.log(checkSpam('xXx'));

console.log(checkSpam('baDwOrd'));

// Задание 3

// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»

function convertString(str){
    let massive = str.split('');
    massive = massive.reverse();
    console.log(massive.join(''));
}

convertString('привет женя');
// Задание 4



// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 

// Задание 4.1

// Выведите полученные строковые значения на странице в виде списка (ul li) 

let stations = [

    'MAN675847583748sjt567654;Manchester Piccadilly',
    
    'GNF576746573fhdg4737dh4;Greenfield',
    
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    
    'SYB4f65hf75f736463;Stalybridge',
    
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
    
    ];
let ul = document.createElement('ul');
document.body.appendChild(ul);
for(object of stations){
    let indexdot = object.indexOf(';') + 1;
    let textli = (`${object.slice(0,3)}: ${object.slice(indexdot)}`);
    let li = document.createElement('li');
    li.innerText = (textli);
    ul.appendChild(li);
}

// Задание 5

// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.

// Пример:

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"


function unique(arr){
    let etalone = [];


    // for(obj of arr){
    //     if (!etalone.includes(obj)){
    //         etalone.push(obj)
    //     }
    // }
    strings.forEach(item => {
        if (!etalone.includes(item)){
            etalone.push(item)
        }
    })
    return etalone;
}
console.log(unique(strings));

