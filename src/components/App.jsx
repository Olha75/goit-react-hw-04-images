import React, { useState, useEffect } from 'react';
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
  const [loading, setLoading] = usestate(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemDetails, setItemDetails] = useState({});
  const [totalHits, setTotalHits] = useState(0);



const handleSearch = ({ search }) => {
  setSearch(search);
  setItems([]);
  setPage(1);

  };

  loadMore = () => {
    setPage(prevPage => prevPage + 1 );
  };

  showModal = largeImageURL => {
    this.setState({
      modalOpen: true,
      itemDetails: {
        largeImageURL,
      },
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      itemDetails: {},
    });
  };


  useEffect(() => {
    const getApi = async () => {
      try {
        setLoading(true);
        const { data } = await searchImages(search, page);
        setSearch(data?.length ? data : []);
        setTotalHits(data.totalHits);
        
      } else {
        alert('Вибачте, сталася помилка, спробуйте ще.');
      }
    catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } getApi()
  },[])


  

  render() {
    const { handleSearch, loadMore, showModal, closeModal } = this;
    const { items, loading, error, modalOpen, itemDetails, totalHits } =
      this.state;
    const isItems = Boolean(items.length);

    // console.log('App - items:', items);

    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={handleSearch} />
        {error && <p className={css.error}>помилка завантаження</p>}
        {loading && <Loader />}
        {/* <SearchBar searchImages={searchImages} /> */}
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
  }
}

export default App;
