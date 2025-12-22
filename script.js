const form = document.querySelector("#book-form");
const booklist = document.querySelector("#booklist");
const addBtn = document.querySelector("#add-book");
const readCheckBox = document.querySelector("#read");
const markAsRead = readCheckBox.nextElementSibling;
const bookFormContent = {
  author: document.querySelector("#author"),
  title: document.querySelector("#title"),
  pages: document.querySelector("#pages"),
  read: document.querySelector("#read")
};

class Book {

  static myLibrary = [];

  #title;
  #author;
  #pages;
  #read;
  #id;

  constructor (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }

  set title (newTitle) {
    if (newTitle === "") {
      alert("Title can't be empty")
      return;
    } else {
      this.#title = newTitle;
    }
  }

  set author (newAuthor) {
    if (newAuthor === "") {
      alert("Author can't be empty")
      return;
    } else {
      this.#author = newAuthor;
    }
  }

  set pages (numOfPages) {
    if (numOfPages < 1 || numOfPages !== Math.floor(numOfPages)) {
      alert("Pages should be integer and at least 1")
      return;
    } else {
      this.#pages = numOfPages;
    }
  }

  set read (readBool) {
    this.#read = readBool;
  }

  set id (value) {
    this.#id = value;
  }

  get title () {
    return this.#title;
  }

  get author () {
    return this.#author;
  }

  get pages () {
    return this.#pages;
  }

  get read () {
    return this.#read;
  }

  get id () {
    return this.#id;
  }
}

function addBookToLibrary(title, author, pages, read) {
  book = new Book(title, author, pages, read);
  if (book.title === undefined
    || book.author === undefined
    || book.pages === undefined
  ) {
    return;
  }
  Book.myLibrary.push(book);
  displayBook(book);
}

function displayBook(book) {
  row = document.createElement("tr");
  author = document.createElement("td");
  title = document.createElement("td");
  pages = document.createElement("td");
  read = document.createElement("td");
  row.id = book.id;
  author.innerText = book.author;
  title.innerText = book.title;
  pages.innerText = book.pages;
  read.innerText = book.read ? "✓" : "✗";
  row.appendChild(author);
  row.appendChild(title);
  row.appendChild(pages);
  row.appendChild(read);
  booklist.appendChild(row);
  deleteRow = document.createElement("td");
  deleteButton = document.createElement("button");
  deleteButton.addEventListener("click",  e => {
    deleteButton.parentElement.parentElement.remove();
  });
  deleteButton.innerText = "delete entry";
  row.appendChild(deleteRow);
  deleteRow.appendChild(deleteButton);
}

function getBookFromForm() {
  addBookToLibrary(
    bookFormContent.title.value,
    bookFormContent.author.value,
    bookFormContent.pages.valueAsNumber,
    bookFormContent.read.checked
  );
}

addBtn.addEventListener("click", e => {
  e.preventDefault();
  getBookFromForm();
  form.reset();
});

readCheckBox.addEventListener("click", e => {
  if (readCheckBox.checked) {
    markAsRead.classList.remove("hidden");
  } else {
    markAsRead.classList.add("hidden");
  }
});
