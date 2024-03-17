import './MovieContainer.css';
import { fetchImage } from '../../utils/MoviedbAPI/tmdb';

const MovieContainer = () => {
    return (
        <div className='content'>
            <div className='movie-container'>
                <h1>Top Movies</h1>
                <div className='horizontal-title-list'>
                    <div className='hidden-horizontal-scrollbar'>
                        <div className='hidden-horizontal-scrollbar-items'>
                            <div className='hidden-horizontal-scrollbar-item'>
                                <a>
                                    <div className='movie-poster'>
                                        <div className='quick-actions'></div>
                                        <img src={fetchImage('/1E5baAaEse26fej7uHcjOgEE2t2.jpg')} alt="movie Poster"></img>
                                    </div>
                                </a>
                            </div>
                            <div className='hidden-horizontal-scrollbar-item'>
                                <a>
                                    <div className='movie-poster'>
                                        <div className='quick-actions'></div>
                                        <img src={fetchImage('/1E5baAaEse26fej7uHcjOgEE2t2.jpg')} alt="movie Poster"></img>
                                    </div>
                                </a>
                            </div>
                            <div className='hidden-horizontal-scrollbar-item'>
                                <a>
                                    <div className='movie-poster'>
                                        <div className='quick-actions'></div>
                                        <img src={fetchImage('/1E5baAaEse26fej7uHcjOgEE2t2.jpg')} alt="movie Poster"></img>
                                    </div>
                                </a>
                            </div>
                            <div className='hidden-horizontal-scrollbar-item'>
                                <a>
                                    <div className='movie-poster'>
                                        <div className='quick-actions'></div>
                                        <img src={fetchImage('/1E5baAaEse26fej7uHcjOgEE2t2.jpg')} alt="movie Poster"></img>
                                    </div>
                                </a>
                            </div>
                            <div className='hidden-horizontal-scrollbar-item'>
                                <a>
                                    <div className='movie-poster'>
                                        <div className='quick-actions'></div>
                                        <img src={fetchImage('/1E5baAaEse26fej7uHcjOgEE2t2.jpg')} alt="movie Poster"></img>
                                    </div>
                                </a>
                            </div>
                            <div className='hidden-horizontal-scrollbar-item'>
                                <a>
                                    <div className='movie-poster'>
                                        <div className='quick-actions'></div>
                                        <img src={fetchImage('/1E5baAaEse26fej7uHcjOgEE2t2.jpg')} alt="movie Poster"></img>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieContainer;