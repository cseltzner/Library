const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const isReadInput = document.getElementById('read-input');
const addButton = document.getElementById('add-button');
const removeAllButton = document.getElementById('remove-all-button');

let myLibrary = [];

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

addButton.addEventListener('click', function() {
    const title = titleInput.value;
    const author = authorInput.value;
    const isRead = isReadInput.checked;

    if (validateBook(title, author)) {
        addBookToLibrary(title, author, isRead)
        return;
    } else if (title.length == 0) {
        alert('Title field cannot be empty');
        return;
    } else if (author.length == 0) {
        alert('Author field cannot be empty');
        return;
    }
})

removeAllButton.addEventListener('click', function() {
    removeAll();
})

function addBookToLibrary(title, author, isRead) {
    myLibrary.push(new Book(title, author, isRead));
    updateUI();
}

function removeAll() {
    myLibrary = [];
    updateUI();
}

function updateUI() {
    // Remove current books from the screen
    const cards = document.querySelectorAll('.card');
    cards.forEach ( card => {
        card.remove();
    })

    // Add new books to the screen
    const main = document.getElementById('main');
    myLibrary.forEach( book => {
        const newDiv = document.createElement("div");
        newDiv.className = "card"
        newDiv.innerHTML = `<h4>${book.title}</h4><p>By ${book.author}</p><p>Completed: ${book.isRead ? 'Yes!' : 'No'}`
        main.appendChild(newDiv);
    })
}

/**
 * Returns true if title and author of book are valid.
 * Valid books have non-empty title and author values.
 * 
 * @param {String} title Title of book
 * @param {String} author Author of book
 * @returns Boolean
 */
function validateBook(title, author) {
    if (title.length == 0 || author.length == 0) {
        return false;
    }
    return true;
}