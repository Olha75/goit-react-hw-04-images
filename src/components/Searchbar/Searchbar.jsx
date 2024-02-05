import React, { useState } from 'react';
import css from './searchBar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ search: '' });
  };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              className={css.searchFormInput}
              value={state.search}
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
