import './SideBar.css';
import homelogo from './images/home.png';
import watchlistlogo from './images/watchlist.png';
import movieslogo from './images/movies.png';
import tvshowslogo from './images/tvshow.png';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
  return (
    <div className={`sidebar-container${props.isActive ? ' active' : ''}`}>
      <nav className="sidebar">
        <ul>
          <li>
            <Link to="/" id='home'>
              <div className="icon">
                <img src={homelogo} alt='home' />
              </div>
              Home
            </Link>
          </li>
          <li>
            <Link to="/watchlist" id='watchlist'>
              <div className="icon">
                <img src={watchlistlogo} alt='bookmark' />
              </div>
              Watchlist
            </Link>
          </li>
          <li>
            <a href="#" id='movies'>
            <div className="icon">
                <img src={movieslogo} alt='movies' />
            </div>
              Movies
            </a>
          </li>
          <li>
            <a href="#" id='tvshows'>
              <div className="icon">
                <img src={tvshowslogo} alt='tvshows' />
              </div>
              TV Shows
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;