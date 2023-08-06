import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MovieDetails from './pages/MovieDetails';
import TVDetails from './pages/TVDetails';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/tv/:id' element={<TVDetails />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
