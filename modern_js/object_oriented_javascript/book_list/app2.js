class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById("book-list");

        // Create tr table row element
        const row = document.createElement("tr");
      
        // Insert columns
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="delete">X</a></td>
          `;
      
        list.appendChild(row);
    }

    showAlert(message, className){
        // Create a div
        const div = document.createElement("div");

        // Add classes
        div.className = `alert ${className}`;

        // Add text
        div.appendChild(document.createTextNode(message));

        // Get parent
        const container = document.querySelector(".container");

        // Get form
        const form = document.querySelector("#book-form");

        // Insert alert
        container.insertBefore(div, form);

        // 3sec timeout
        setTimeout(function() {
        document.querySelector(".alert").remove();
        }, 3000);
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
}

// local storage class
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks(){
        const books = Store.getBooks();

        books.forEach(function(book){
            const ui = new UI;

            // Add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event listener for add book
document.getElementById("book-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // get form values
    const title = document.getElementById("title").value,
      author = document.getElementById("author").value,
      isbn = document.getElementById("isbn").value;
  
    // instantiate a book
    const book = new Book(title, author, isbn);
  
    // instantiate Ui
    const ui = new UI();
  
    // Validate
    if (title === "" || author === "" || isbn === "") {
      // Error alert
      ui.showAlert("Please fill in all fields", "error");
    } else {
      // Add book to list
      ui.addBookToList(book);
      // Add to local storage
      Store.addBook(book);
  
      // Show success
      ui.showAlert('Book Added!', 'success');
  
      // Clear fields
      ui.clearFields();
    }
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    e.preventDefault();

    // Instantiate ui
    const ui = new UI();
    
    // Delete book
    ui.deleteBook(e.target);

    // Remove from local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //shoe alert
    ui.showAlert('Book Removed', 'success');
});