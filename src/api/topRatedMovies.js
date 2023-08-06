import axios from 'axios';
// export const topratedFilms = () => {
//     axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=7e08311fc69ce198295bef920ce3dc5f')
//     .then(res => {
//       // setImg(`https://image.tmdb.org/t/p/original${res.data.results[0].backdrop_path}`)
//       console.log(res.data)
//     }).catch(err => {
//       console.log(err);
//     })
// }

export const topRatedMovies = async () => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=7e08311fc69ce198295bef920ce3dc5f',
      });
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }