import axios from 'axios';
export const searchTVShows = async (query) => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=7e08311fc69ce198295bef920ce3dc5f`,
      });
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }