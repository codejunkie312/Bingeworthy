import './SideBar.css';
import homelogo from './images/home.png';
import watchlistlogo from './images/watchlist.png';
import movieslogo from './images/movies.png';
import tvshowslogo from './images/tvshow.png';
import { useState } from 'react';

const SideBar = (props) => {
  return (
    <div className={`sidebar-container${props.isActive ? ' active' : ''}`}>
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
                <img src={watchlistlogo} alt='bookmark' />
              </div>
              Watchlist
            </a>
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