function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(data => renderBooks(data))
    .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const main = document.getElementById('main');
  main.innerHTML = ''; // Clear any existing content
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerText = book.name;
    main.appendChild(h2);
  });
}

// Call fetchBooks when the script is loaded
fetchBooks();
