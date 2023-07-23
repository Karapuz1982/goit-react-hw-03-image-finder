const API_KEY = '37136266-a42a32582919092089cbd6d65';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

const fetchImages = (query, page) => {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  ).then((response) => response.json())
  
};

export default fetchImages;
