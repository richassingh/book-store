//Navbar page

import React, { useState } from 'react';
import Logoimage from "./images/Standard Collection 11.png";
import boximg from "./images/bx_bx-book-heart.png";
import notification from "./images/Vector.png";
import group from "./images/Group.png";
import profile from "./images/IMG20210528181544.png";


function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <nav className="navbar">
      <div className='nav-left'> 
        <img src={Logoimage} alt="logo" />
      <h2>KeazoNBOOKS</h2></div>
     
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='icons'>
      <img src={boximg} alt="bxx" />
      <img src={notification} alt="bxx" />
      <img src={group} alt="bxx" />
      <img src={profile} alt="bxx" />
      </div>
    </nav>
  );
}

export default Navbar;
