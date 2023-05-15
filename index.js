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

function bHelp(book, button) {
  if (book.read) {
    button.classList.remove('active');
  } else {
    button.classList.add('active');
  }
}
function initBook(book) {
  const titleh = document.createElement('h2');
  titleh.innerHTML = 'Title';
  const titlep = document.createElement('p');
  titlep.innerHTML = book.title;
  const titlediv = document.createElement('div');
  titlediv.appendChild(titleh);
  titlediv.appendChild(titlep);
  titlediv.classList.add('info');

  const authorh = document.createElement('h2');
  authorh.innerHTML = 'Author';
  const authorp = document.createElement('p');
  authorp.innerHTML = book.author;
  const authordiv = document.createElement('div');
  authordiv.appendChild(authorh);
  authordiv.appendChild(authorp);
  authordiv.classList.add('info');

  const pagesh = document.createElement('h2');
  pagesh.innerHTML = 'Pages';
  const pagesp = document.createElement('p');
  pagesp.innerHTML = book.pages;
  const pagesdiv = document.createElement('div');
  pagesdiv.appendChild(pagesh);
  pagesdiv.appendChild(pagesp);

  const button = document.createElement('button');
  button.innerHTML = 'Read';
  button.classList.add('read');
  bHelp(book, button);
  button.addEventListener('click', () => {
    bHelp(button);
  });

  const bottomdiv = document.createElement('div');
  bottomdiv.appendChild(pagesdiv);
  bottomdiv.appendChild(button);
  bottomdiv.classList.add('info-2');

  const masterdiv = document.createElement('div');
  masterdiv.appendChild(titlediv);
  masterdiv.appendChild(authordiv);
  masterdiv.appendChild(bottomdiv);

  return masterdiv;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  myLibrary.forEach((b) => {
    const obj = initBook(b);
    obj.classList.add('book-entry');
    const grid = document.getElementById('cards');
    grid.appendChild(obj);
  });
}

// eslint-disable-next-line no-unused-vars
function createBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;
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

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  popup.classList.remove('active');
});

myLibrary.forEach((b) => {
  const obj = initBook(b);
  obj.classList.add('book-entry');
  const grid = document.getElementById('cards');
  grid.appendChild(obj);
});
