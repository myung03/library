function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function helper() {
    const finished = this.helper();
    return `${this.title} by ${this.author}, ${this.pages} pages, ${finished}`;
  };
  this.helper = function helper() {
    if (read) {
      return 'read';
    } return 'not read yet';
  };
}

const myLibrary = [new Book('Demon Slayer', 'Muzan', 302, true), new Book('Hatchet', 'Gary Paulsen', 195, true)];

function initBook(book) {
  // TODO -> add book to page using html elements
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  myLibrary.forEach((b) => {
    initBook(book);
    b.classList.add('book-entry');
    const grid = document.getElementById('#cards');
    grid.appendChild(book);
  });
}

// eslint-disable-next-line no-unused-vars
function createBook() {
  const title = '';
  const author = '';
  const pages = 0;
  const read = '';
  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
}

// add book popup functionality
const popup = document.querySelector('.popup');
document.getElementById('add').addEventListener('click', () => {
  popup.classList.add('active');
});
document.querySelector('.popup .close-btn').addEventListener('click', () => {
  popup.classList.remove('active');
});
