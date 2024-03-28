import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { fetchImage } from '../../utils/MoviedbAPI/tmdb';
import { removeFromWatchlist } from '../../utils/MoviedbAPI/tmdb';

const MiniCard = ({ content, sessionId, user }) => {

    const type = content.first_air_date ? 'tv' : 'movie';

    const handleClick = async() => {
        console.log(type);
        await removeFromWatchlist(user, sessionId, type, content.id);
    };
    return (
        <div className='Card'>
            <a className='quick-actions' onClick={handleClick}>
                <FontAwesomeIcon icon={faXmark} className='iconFont' />
            </a>
            <img src={fetchImage(content.poster_path)} alt='Card'></img>
        </div>
    );
};

export default MiniCard;