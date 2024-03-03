import './SideBar.css'
import homelogo from './home.png'
import watchlistlogo from './watchlist.png'
import movieslogo from './movies.png'

const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <a href="#" id='home'>
            <div className="icon">
              <img src={homelogo} alt='home' />
            </div>
            Home
          </a>
        </li>
        <li>
          <a href="#" id='watchlist'>
            <div className="icon">
              <img src={watchlistlogo} alt='home' />
            </div>
            Watchlist
          </a>
        </li>
        <li>
          <a href="#" id='movies'>
          <div className="icon">
              <img src={movieslogo} alt='home' />
          </div>
            Movies
          </a>
        </li>
        <li>
          <a href="#" id='tvshows'>
            <div className="icon">
              <img src={movieslogo} alt='home' />
            </div>
            TV Shows
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;