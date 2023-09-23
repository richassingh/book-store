
//imports
import React, { useState, useEffect } from 'react';

import "./App.css";

// Components
import Navbar from './components/Navbar';
import BookDetail from './components/BookDetail';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    // Fetch initial data when the app loads
    fetchData('harry+potter');
    fetchData('Sherlock+Holmes');
  }, []);

  useEffect(() => {
    // Set a default selected book when the books data is available
    if (books.length > 0) {
      setSelectedBook(books[0]); // Set the first book as the default selected book
    }
  }, [books]);

  const fetchData = (query) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="App">
      <Navbar onSearch={fetchData} />
      <div className="container">
        {selectedBook && <BookDetail book={selectedBook} />}
        <BookList books={books} onBookClick={handleBookClick} />
      </div>
    </div>
  );
}

export default App;
