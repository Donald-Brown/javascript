// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

// add book to list
UI.prototype.addBookToList = function(book) {
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
};

// Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

// Clear fields
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Show alert
UI.prototype.showAlert = function(message, className) {
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
};

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
    
    ui.deleteBook(e.target);

    //shoe alert
    ui.showAlert('Book Removed', 'success');
});