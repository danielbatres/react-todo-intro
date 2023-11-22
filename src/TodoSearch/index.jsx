import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
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
      disabled={loading}
     />,
     <p>{searchValue}</p>
  ];
}

export { TodoSearch };
