import './MovieContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import { useState, useEffect } from 'react';
import { topMovies, topTvShows, fetchRandomGenre } from '../../utils/MoviedbAPI/tmdb';

const MovieContainer = ({ watchlist, sessionId, user }) => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularTvShows, setPopularTvShows] = useState([]);
    const [randomMovies, setRandomMovies] = useState([{
        genre: '',
        movies: []
    }]);
    
    useEffect(() => {
        topMovies()
            .then(data => {
                setPopularMovies(data);
            })
            .catch(err => console.log(err));
        topTvShows()
            .then(data => {
                setPopularTvShows(data);
            })
            .catch(err => console.log(err));
        fetchRandomGenre()
            .then(data => {
                setRandomMovies(data);
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
                            {popularMovies.map(movie => (
                                <MovieCard movie={movie} watchlist={watchlist} user={user} sessionId={sessionId} type='movie'/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='movie-container'>
                <h1>Top TV Shows</h1>
                <div className='horizontal-title-list'>
                    <div className='hidden-horizontal-scrollbar'>
                        <div className='hidden-horizontal-scrollbar-items'>
                            {popularTvShows.map(movie => (
                                <MovieCard movie={movie} watchlist={watchlist} user={user} sessionId={sessionId} type='tv'/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {randomMovies.map(item => (
                <div className='movie-container'>
                    <h1>Top {item.genre} Movies</h1>
                    <div className='horizontal-title-list'>
                        <div className='hidden-horizontal-scrollbar'>
                            <div className='hidden-horizontal-scrollbar-items'>
                                {item.movies.map(movie => (
                                    <MovieCard movie={movie} watchlist={watchlist} user={user} sessionId={sessionId} type='movie'/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieContainer;