import search from './search.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import MovieCard from './MovieCard';
import { useState } from 'react';

function App() {


  const [movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=816c9962'
  //const API_KEY = '816c9962';
  
  const movie1 = {
    "Poster": "N/A",
    "Title": "The Amazing Spiderman T4 Premiere Special",
    "Type": "movie",
    "Year": "2012",
    "imdbID": "tt2233044"
    
  }
 
  useEffect(() => {
    fetchApi('spiderman');
  
   
  }, []);
  
  async function fetchApi(title) {
    const data = await axios.get(`${URL}&s=${title}`);
    console.log(data.data.Search);
    setMovie(data.data.Search);
    
  }

  return (
    <div className="App">
      <h1>Movie Land</h1>
      <div className='search'>
        <input
          placeholder='search for movies'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img
          src={search}
          alt="search"
          onClick={()=>fetchApi(searchTerm)}
        />
      </div>

      {movie.length > 0 ? (
         <div className='container'>
          {movie.map((item, index) => (
            <MovieCard
              key={index}
              item={item} />
            ))}
         </div>
        
      ) : (
          <div className='empty'>
            <h3>No Movies Found</h3>
            </div>
      )}
     
    </div>
  );
}

export default App;
