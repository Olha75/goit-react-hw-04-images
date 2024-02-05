import React, { useState, useRef, useEffect } from 'react';
import css from './searchBar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  // const reset = () => {
  //   setSearch({ search: '' });
  // };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              ref={inputRef}
              className={css.searchFormInput}
              value={search}
              onChange={handleChange}
              required
              type="text"
              name="search"
              placeholder="Введіть слово"
              autoFocus
            />
          </label>
        </div>
        <button className={css.searchFormButton} type="submit">
          Пошук
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
