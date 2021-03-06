/* Убрал рекламу */
const removeAds = () => {
    let advRemoval = document.querySelector('.adv');
    advRemoval.style.display = 'none';
};

/* Замена заднего фона */
const backgroundReplacement = () => {
    document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';
};

/* Изменение последовательности книг */
const reorderBooks = () => {
    let book = document.querySelectorAll('.book'),
        booksList = document.querySelector('.books');

    booksList.insertBefore(book[1], book[0]);
    booksList.insertBefore(book[4], book[2]);
    booksList.insertBefore(book[3], book[2]);
    booksList.insertBefore(book[5], book[2]);
};

/* Исправление заголовка */
const headerCorrection = () => {
    let bookTitleNumberThree = document.querySelectorAll('h2');
        bookTitleNumberThree[2].innerHTML = `<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes
                    /README.md#you-dont-know-js-this--object-prototypes"target="_blank">Книга 3. this и Прототипы Объектов</a></h2>`;
};

/* Изменение  глав в книге №2 */
const changingChaptersInBookNumberTwo = () => {
    let tableOfContentsTwo = document.querySelectorAll('ul')[1];
    let bookChapterListTwo = tableOfContentsTwo.querySelectorAll('li');

    tableOfContentsTwo.insertBefore(bookChapterListTwo[6], bookChapterListTwo[4]);
    tableOfContentsTwo.insertBefore(bookChapterListTwo[8], bookChapterListTwo[4]);
};

/* Изменение глав в книге №5 */
const changingChaptersInBookNumberFive = () => {
    let tableOfContentsFive = document.querySelectorAll('ul')[4];
    let bookChapterListFive = tableOfContentsFive.querySelectorAll('li');

    tableOfContentsFive.insertBefore(bookChapterListFive[9], bookChapterListFive[2]);
    tableOfContentsFive.insertBefore(bookChapterListFive[3], bookChapterListFive[2]);
    tableOfContentsFive.insertBefore(bookChapterListFive[4], bookChapterListFive[2]);
};

/* Добавление главы 8 в книге №6 */
const addingChapterEightInBookNumberSix = () => {
    let tableOfContentsSix = document.querySelectorAll('ul')[5];
    let bookChapterListSix = tableOfContentsSix.querySelectorAll('li');

    tableOfContentsSix.insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');
    tableOfContentsSix.insertBefore(bookChapterListSix[9], bookChapterListSix[10]);
};

const start = () => {
    removeAds();
    backgroundReplacement();
    reorderBooks();
    headerCorrection();
    changingChaptersInBookNumberFive();
    addingChapterEightInBookNumberSix();
};

start();