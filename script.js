/* Убрал рекламу */
let advRemoval = document.querySelector('.adv');
advRemoval.style.display = 'none';

/* Замена заднего фона */
document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

/* Изменение последовательности книг */
let book = document.querySelectorAll('.book'),
    booksList = document.querySelector('.books');


booksList.insertBefore(book[1], book[0]);
booksList.insertBefore(book[4], book[2]);
booksList.insertBefore(book[3], book[2]);
booksList.insertBefore(book[5], book[2]);

/* Исправление заголовка */
console.log('book: ', book);
let bookTitleNumberThree = document.querySelectorAll('h2');
bookTitleNumberThree[2].innerHTML = `<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes
                    /README.md#you-dont-know-js-this--object-prototypes"target="_blank">Книга 3. this и Прототипы Объектов</a></h2>`;

/* Добавление главы в книгу №6 */
let tableOfContentsSix = document.querySelectorAll('ul')[5];
let bookChapterListSix = tableOfContentsSix.querySelectorAll('li');
console.log('tableOfContentsSix: ', tableOfContentsSix);
console.log('bookChapterListSix: ', bookChapterListSix);
tableOfContentsSix.appendChild('<li>Глава 8: За пределами ES6</li>')
