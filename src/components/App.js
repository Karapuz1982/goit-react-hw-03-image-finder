import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import '../styles/styles.css';

class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
    page: 1,
    largeImageURL: '',
  };

  handleSubmit = (query) => {
    this.setState({ query, images: [], page: 1 }, this.fetchImages);
  };

  fetchImages = () => {
    const { query, page } = this.state;
    const API_KEY = '37136266-a42a32582919092089cbd6d65';
    const BASE_URL = 'https://pixabay.com/api/';
    const PER_PAGE = 12;

    this.setState({ isLoading: true });

    fetch(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
          isLoading: false,
          page: prevState.page + 1,
        }));
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = (largeImageURL) => {
    this.setState({ largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ largeImageURL: '' });
  };

  render() {
    const { images, isLoading, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />} {/* Відображення лоадера під час завантаження зображень */}
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {images.length > 0 && !isLoading && <Button onClick={this.handleLoadMore} />} {/* Відображення кнопки "Load more" */}
        {largeImageURL && <Modal src={largeImageURL} alt="Large" onClose={this.handleCloseModal} />} {/* Відображення модального вікна */}
      </div>
    );
  }
}

export default App;
