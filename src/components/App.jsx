import React, { useState, useEffect, useRef } from 'react';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import { searchImages } from '../api/posts';
import css from './app.module.css';
import ImageGallery from './ImageGallery/ImageGallery';

const App = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemDetails, setItemDetails] = useState({});
  const [totalHits, setTotalHits] = useState(0);

  const prevSearchRef = useRef(null);

  useEffect(() => {
    const getApi = async () => {
      try {
        setLoading(true);
        const { data } = await searchImages(search, page);
        setTotalHits(data.totalHits);
        if (data.hits && data.hits.length > 0) {
          setItems(prevItems => [...prevItems, ...data.hits]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search && search !== prevSearchRef.current) {
      getApi();
      prevSearchRef.current = search;
    }
  }, [search, page]);

  const handleSearch = search => {
    setSearch(search);
    setItems([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const showModal = largeImageURL => {
    setModalOpen(true);
    setItemDetails({ largeImageURL });
  };

  const closeModal = () => {
    setModalOpen(false);
    setItemDetails({});
  };

  const isItems = Boolean(items.length);

  return (
    <div
      style={{
        ustifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar onSubmit={handleSearch} />
      {error && (
        <p className={css.error}>Вибачте, сталася помилка, спробуйте ще</p>
      )}
      {loading && <Loader />}
      {isItems && <ImageGallery items={items} showModal={showModal} />}
      {isItems && items.length < totalHits ? (
        <div className={css.buttonLM}>
          <Button onClick={loadMore} type="button">
            Продовжити
          </Button>
        </div>
      ) : null}
      {modalOpen && (
        <Modal largeImageURL={itemDetails.largeImageURL} close={closeModal} />
      )}
    </div>
  );
};

export default App;
