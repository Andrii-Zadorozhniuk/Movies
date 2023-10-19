import axios from 'axios';
export const searchMovies = async (query) => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=7e08311fc69ce198295bef920ce3dc5f`,
      });
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }