import React, { useState } from 'react';
import './TodoSearch.css';

const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return [
    <input
      className='TodoSearch'
      placeholder="Onion"
      value={searchValue}
      onChange={onSearchValueChange}
     />,
     <p>{searchValue}</p>
  ];
}

export { TodoSearch };
