const myLibrary = [];

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
    throw Error("Book read should be Number");
  }

  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
