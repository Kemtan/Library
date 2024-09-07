const addBtn = document.querySelector('.addBtn');
const bookShelves = document.querySelector('.bookShelves');
const myLibrary = [];

addBtn.addEventListener("click", addBookToLibrary);


function Book(name, author) {
    this.name = name;
    this.author = author;
}

function addBookToLibrary(){
    let bookName = document.getElementById("bookName");
    let bookAuthor = document.getElementById("bookAuthor");

    const book = myLibrary.push(new Book(`${bookName.value}`, `${bookAuthor.value}`));
    displayBook();
    console.log(myLibrary);
}

function displayBook(){
    let bookInDisplay    = document.createElement('div');
    let bookTitle        = document.createElement('h3');
    let bookAuthor       = document.createElement('p');
    let bookReadBtn      = document.createElement('button');
    let bookRemoveBtn    = document.createElement('button');

    for(let i=0;i < myLibrary.length;i++){
        bookTitle.textContent = `${myLibrary[i]['name']}`;
        bookAuthor.textContent = `${myLibrary[i]['author']}`;

        bookReadBtn.textContent = "Not read";
        bookReadBtn.className = "bookReadBtn";

        bookRemoveBtn.textContent = "Remove";
        bookRemoveBtn.onclick = function(){
            
        }

        bookInDisplay.append(bookTitle, bookAuthor, bookReadBtn, bookRemoveBtn);
        bookShelves.append(bookInDisplay);
    }
}

function removeBook(n){
    myLibrary.splice(n, 1)
    displayBook();
}