/* Убрал рекламу */
let advRemoval = document.querySelector('.adv');
advRemoval.style.display = 'none';

/* Замена заднего фона */
document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

/* Изменение последовательности книг */
let book = document.querySelectorAll('.book'),
    booksList = document.querySelector('.books');
    console.log('book: ', book);

booksList.insertBefore(book[1], book[0]);
booksList.insertBefore(book[4], book[2]);
booksList.insertBefore(book[3], book[2]);
booksList.insertBefore(book[5], book[2]);