const newBookBtn = document.querySelector(".new-book");
const submitForm = document.querySelector(".submit-form");
const remove = document.querySelector(".remove");

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
    formContainer.style.display = "none"
    renderLibrary()
}

function renderLibrary(){
    let container = document.querySelector(".container");
    container.innerHTML = ""
        for(let i = 0; i < myLibrary.length; i++){


            let book = myLibrary[i]
            let createCard = document.createElement("div");
                if(book.title === "" || book.author === "" || book.pages === null){
                    alert("Error")
                }else{
                    createCard.innerHTML = 
                    `
                    <div class="card">
                        <h2 class="title"> ${book.title}</h2>
                        <h4 class="author">By:${book.author}</h4>
                        <p>Pages: ${book.pages}</p>
                        <button class="remove" onclick="removeBook()">Remove</button>
                    </div>
                    `
                }
        container.appendChild(createCard)
    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    renderLibrary();
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
    })
})


