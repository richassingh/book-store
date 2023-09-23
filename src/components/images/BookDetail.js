//BookDetails Page

import React from 'react';

function BookDetail({book}) {
  return (
    <div className="book-detail">

      <div className='book-img'>
      <img src={book.volumeInfo.imageLinks?.thumbnail || ''} alt={book.volumeInfo.title} />
      </div>

      <div className='book-info'>
        <div className='book-data'>
          <h2>{book.volumeInfo.title}</h2>
      <p>Authors: {book.volumeInfo.authors?.join(', ')}</p>
      <p>Publisher: {book.volumeInfo.publisher}</p>
      <p>Published Date: {book.volumeInfo.publishedDate}</p>
      <p>Description: {book.volumeInfo.description}</p>
      
      </div>
      
      <div className='book-buttons'>
      <button onClick={() => window.open(book.volumeInfo.previewLink, '_blank', 'noopener noreferrer')}>Now Read! </button>
      <button onClick={() => window.open(book.volumeInfo.infoLink, '_blank', 'noopener noreferrer')}>More Info!</button>
      </div>
      
      </div>


    </div>
  );
}

export default BookDetail;
