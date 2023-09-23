//BookList page

import React from 'react';

function BookList({ books, onBookClick }) {
  return (
    
    <div>
      
      <h2>
        More Books 
      </h2>
      <div className="book-list">
      
      {books.map((book) => (
        <div
          key={book.id}
          className="book-card"
          onClick={() => onBookClick(book)}
        >
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || ''}
            alt={book.volumeInfo.title}
          />
           {/* <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors?.join(', ')}</p>  */}
        </div>
      ))}
    </div>
    </div>
  );
}

export default BookList;
