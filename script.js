const myLibrary = [];
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

function Book (title, author, pages, read) {
  if (!new.target) {
    alert("This function is a constructor, use the `new` keyword.");
  }
  if (typeof title === "string" && title !== "") {
    this.title = title;
  } else  {
    alert("Book title should be non empty string");
  }
  if (typeof author === "string" && author !== "") {
    this.author = author;
  } else  {
    alert("Book author should be non empty string");
  }
  if (typeof pages === "number" && pages > 0) {
    this.pages = pages;
  } else  {
    alert("Book pages should be at least 1");
  }
  if (typeof read === "boolean") {
    this.read = read;
  } else  {
    alert("Book read should be Boolean");
  }

  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  book = new Book(title, author, pages, read);
  if (title === "" || author === "" || pages < 0) {
    return;
  }
  myLibrary.push(book);
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
