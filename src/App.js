import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MovieDetails from './pages/MovieDetails';
import TVDetails from './pages/TVDetails';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import WatchLater from './components/WatchLater';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <WatchLater />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/tv/:id' element={<TVDetails />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tvshows' element={<Movies />} />
          <Route path='/movies/search/:query' element={<Movies />} />
          <Route path='/tvshows/search/:query' element={<Movies />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
