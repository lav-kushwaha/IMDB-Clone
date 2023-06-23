import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
         <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          {/* <Route path="/*" element={<h1>Error Page</h1>}></Route> */}
          <Route path="/*" element={<Navigate to ="/"/>}></Route>
         </Routes>
        
      </Router>
    </div>
  );
}

export default App;
