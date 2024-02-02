import React, { Component } from 'react';
import css from './searchBar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ search: this.state.search });
    this.setState({
      search: '',
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { search } = this.state;

    return (
      <header className={css.header}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <div>
            <label>
              <input
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
  }
}

export default Searchbar;

// import React, { Component } from 'react';
// import css from './searchBar.module.css';
// import { searchImages } from 'api/posts';
// import SearchForm from 'components/SearchForm/SearchForm';
// import ImageGallery from 'components/ImageGallery/ImageGallery';
// import Loader from 'components/Loader/Loader';
// import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
// import css from '../ImageGallery/imageGallery.module.css';

// class SearchBar extends Component {
//   state = {
//     items: [],
//     loading: false,
//     error: null,
//   };

//   async componentDidMount() {
//     this.setState({ loading: true });

//     try {
//       const { data } = await searchImages('');
//       this.setState({
//         items: data.hits?.length ? data.hits : [],
//       });
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       this.setState({
//         loading: false,
//       });
//     }
//   }

//   render() {
//     const { items, loading, error } = this.state;
//     const elements = items.map(({ id, webformatURL, largeImageURL }) => (
//       <li key={id} className={css.imageGalleryItem}>
//         <img className={css.imageGalleryItem_image} src={webformatURL} alt="" />
//       </li>
//     ));

//     return (
//       <>
//         <SearchForm />
//         {error && <p className={css.error}>{error}</p>}
//         {loading && <Loader />}
//         {Boolean(elements.length) && (
//           <ImageGallery className={css.imageGallery}>{elements}</ImageGallery>
//         )}
//       </>
//     );
//   }
// }
