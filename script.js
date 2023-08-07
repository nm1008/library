const newBookBtn = document.querySelector(".new-book");
const submitForm = document.querySelector(".submit-form");

const formContainer = document.querySelector(".form-container");

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
    console.log(myLibrary)
}


newBookBtn.addEventListener("click", () => {
    formContainer.style.display = "flex"
    })

submitForm.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary()
})