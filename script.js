let screenContainer = document.getElementById('screenContainer');
let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getTitle = function() {
    return this.title;
}

Book.prototype.getAuthor = function() {
    return this.author;
}

initializeScreen();

function initializeScreen() {
    addBookToLibrary("Lion, Witch, and Wardrobe", "C.S. Lewis");
    displayAddBookForm();
    displayCurrentBooks();
}

function displayAddBookForm(){
    let formRowDiv = document.createElement('div');
    formRowDiv.className = "formRowDiv";
    let formDiv = document.createElement('div');
    formDiv.className = "formDiv";
    let bookForm = document.createElement('form');
    let nameLabel = document.createElement('label');
    nameLabel.innerText = "Title";
    let authorLabel = document.createElement('label');
    authorLabel.innerText = "Author";
    let nameInput = document.createElement('input');
    let authorInput = document.createElement('input');
    bookForm.appendChild(nameLabel);
    bookForm.appendChild(nameInput);
    bookForm.appendChild(authorLabel);
    bookForm.appendChild(authorInput);
    formDiv.appendChild(bookForm);
    formRowDiv.appendChild(formDiv);
    screenContainer.appendChild(formRowDiv);
}

function displayCurrentBooks(){
    for (var i = 0; i < myLibrary.length; i++){
        console.log(i);
        console.log(myLibrary);
        console.log(myLibrary[i]);
        let bookDiv = document.createElement('div');
        bookDiv.className = "bookDiv";
        let titleTextArea = document.createElement('textarea');
        let authorTextArea = document.createElement('textarea');
        titleTextArea.innerText = myLibrary[i].getTitle();
        authorTextArea.innerText = myLibrary[i].getAuthor();
        bookDiv.appendChild(titleTextArea);
        bookDiv.appendChild(authorTextArea);
        screenContainer.appendChild(bookDiv);
    }
}

function addBookToLibrary(title, author){
    myLibrary.push(new Book(title, author));
}
