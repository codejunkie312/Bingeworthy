import { fetchImage } from '../../utils/MoviedbAPI/tmdb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { addToWatchlist, removeFromWatchlist } from '../../utils/MoviedbAPI/tmdb';
import { useEffect } from 'react';

const MovieCard = ({ movie, watchlist, sessionId, user, type }) => {
    const isOnWatchlist = watchlist.some(item => item.id === movie.id);
    const icon = isOnWatchlist ? faCheck : faPlus;

    const handleClick = async() => {
        if (!isOnWatchlist) {
            await addToWatchlist(user, sessionId, type, movie.id);
        } else {
            await removeFromWatchlist(user, sessionId, type, movie.id);
        }
    };

    return (
        <div className='hidden-horizontal-scrollbar-item' key={movie.id}>
            <a>
                <div className='movie-poster'>
                    <div className='quick-actions'>
                        <a onClick={handleClick}><FontAwesomeIcon icon={icon} className='iconFont' /></a>
                    </div>
                    <img src={fetchImage(movie.poster_path)} alt="movie Poster"></img>
                </div>
            </a>
        </div>
    );
};

export default MovieCard;