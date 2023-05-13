let myLibrary = [];

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
function createBook() {
    
}
function addBookToLibrary(book) {
  myLibrary.push(book);
}