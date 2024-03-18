import './MovieContainer.css';
import { useState, useEffect } from 'react';
import { fetchImage, topMovies } from '../../utils/MoviedbAPI/tmdb';

const MovieContainer = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        topMovies()
            .then(data => {
                setMovies(data);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div className='content'>
            <div className='movie-container'>
                <h1>Top Movies</h1>
                <div className='horizontal-title-list'>
                    <div className='hidden-horizontal-scrollbar'>
                        <div className='hidden-horizontal-scrollbar-items'>
                            {movies.map(movie => (
                                <div className='hidden-horizontal-scrollbar-item' key={movie.id}>
                                    <a>
                                        <div className='movie-poster'>
                                            <div className='quick-actions'></div>
                                            <img src={fetchImage(movie.poster_path)} alt="movie Poster"></img>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieContainer;