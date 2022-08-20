import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

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
