import axios from "axios";
export const findById = async (id, type) => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: `https://api.themoviedb.org/3/${type}/${id}?api_key=7e08311fc69ce198295bef920ce3dc5f`,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }