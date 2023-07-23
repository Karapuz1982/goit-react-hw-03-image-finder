
import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import fetchImages from './Api';
import '../styles/styles.css';

const IMAGES_PER_PAGE = 12;

class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
    page: 1,
    largeImageURL: '',
    totalPages: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  handleSubmit = (query) => {
    this.setState({ query, images: [], page: 1, totalPages: null });
  };

  fetchImages = () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    fetchImages(query, page)
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
          totalPages: Math.ceil(data.totalHits / IMAGES_PER_PAGE),
          isLoading: false,
        }));
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), this.fetchImages);
  };

  handleImageClick = (largeImageURL) => {
    this.setState({ largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ largeImageURL: '' });
  };

  render() {
    const { images, isLoading, largeImageURL, page, totalPages } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {page < totalPages && images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {largeImageURL && <Modal src={largeImageURL} alt="Large" onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

export default App;
