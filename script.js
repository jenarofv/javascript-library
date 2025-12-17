const myLibrary = [];
const form = document.querySelector("#book-form");
booklist = document.querySelector("#booklist");

const bookForm  = {
  title : document.querySelector("#title"),
  pages : document.querySelector("#pages"),
  author : document.querySelector("#author"),
  read : document.querySelector("#read"),
}

const addBtn = document.querySelector("#add-book");

function Book (title, author, pages, read) {
  if (!new.target) {
    throw Error("This function is a constructor, use the `new` keyword.");
  }
  if (typeof title === "string") {
    this.title = title;
  } else  {
    throw Error("Book title should be string");
  }
  if (typeof author === "string") {
    this.author = author;
  } else  {
    throw Error("Book author should be String");
  }
  if (typeof pages === "number") {
    this.pages = pages;
  } else  {
    throw Error("Book pages should be Number");
  }
  if (typeof read === "boolean") {
    this.read = read;
  } else  {
    throw Error("Book read should be boolean");
  }

  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("bible", "god", 420, false);
addBookToLibrary("The Call Of Cthulhu", "HP Lovecraft", 89, true);

function displayBooks () {
  myLibrary.forEach(book => {
    row = document.createElement("tr");
    author = document.createElement("td");
    title = document.createElement("td");
    pages = document.createElement("td");
    read = document.createElement("td");
    author.innerText = book.author;
    title.innerText = book.title;
    pages.innerText = book.pages;
    read.innerText = book.read ? "✓" : "✗";
    row.appendChild(author);
    row.appendChild(title);
    row.appendChild(pages);
    row.appendChild(read);
    booklist.appendChild(row);
  });
}

displayBooks();

function getBookFromForm () {
  addBookToLibrary(
    bookForm.title.value,
    bookForm.author.value,
    bookForm.pages.valueAsNumber,
    bookForm.read.checked
  );
}

function clearForm () {
}

addBtn.addEventListener("click", e=> {
  // e.preventDefault();
  getBookFromForm();
  console.table(myLibrary);
  form.reset();
})
