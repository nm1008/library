const newBookBtn = document.querySelector(".new-book");
const submitForm = document.querySelector(".submit-form");
const remove = document.querySelector(".remove");

const formContainer = document.querySelector(".form-container");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}    

Book.prototype.toggleRead = function (){
    this.read = !this.read;
}

function removeBook(index){
    myLibrary.splice(index, 1);
    renderLibrary();
}

function readBook(index){
    myLibrary[index].toggleRead();
    renderLibrary()
}


function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const readCheckbox = document.querySelector("#read");
    const read = readCheckbox.checked;
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    formContainer.style.display = "none"
    renderLibrary();
}

function renderLibrary(){
    let container = document.querySelector(".container");
    container.innerHTML = ""
        for(let i = 0; i < myLibrary.length; i++){
            let book = myLibrary[i]
            let createCard = document.createElement("div");
            createCard.innerHTML = 
            `
            <div class="card">
                <h2 class="title">${book.title}</h2>
                <h4 class="author">By: ${book.author}</h4>
                <p>Pages: ${book.pages}</p>
               
                <div class="buttons">
                    <button class="read" onclick="readBook(${i})"
                    style="background-color: ${book.read ? 'green' : 'red'}; border-color: ${book.read ? 'green' : 'red'}">
                    ${book.read ? "Read" : "Not yet"}
                    </button>
                    <button class="remove" onclick="removeBook(${i})">Remove</button>
                </div>
                
            </div>
            `    
         container.appendChild(createCard)
    }
}

newBookBtn.addEventListener("click", () => {
    formContainer.style.display = "flex"
    })

submitForm.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary()

    const inputs = document.querySelectorAll("input")

    inputs.forEach(input => {
        input.value = "";
        input.checked = false;
    })
})