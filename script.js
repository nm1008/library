const newBook = document.querySelector(".new-book");

const formContainer = document.querySelector(".form-container");

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
 
}





newBook.addEventListener("click", () => {
    formContainer.style.display = "flex"
    })