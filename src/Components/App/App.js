import SideBar from '../Sidebar/SideBar';
import Nav from '../Nav/Nav';
import MovieContainer from '../MovieContainer/MovieContainer';
import MiniCards from '../MiniCards/MiniCards';
import ContainerFilter from '../ContainerFilter/ContainerFilter';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createSession, fetchWatchlistMovies, fetchWatchlistTvShows } from '../../utils/MoviedbAPI/tmdb';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [user, setUser] = useState('');
  const [containerFilter, setContainerFilter] = useState('all');
  const [content, setContent] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const fetchContent = async () => {
    if (sessionId && user) {
        if (containerFilter === 'movies') {
            const movies = await fetchWatchlistMovies(user, sessionId);
            setContent(movies);
        }
        if (containerFilter === 'tv shows') {
            const tvShows = await fetchWatchlistTvShows(user, sessionId);
            setContent(tvShows);
        }
        if (containerFilter === 'all') {
            const movies = await fetchWatchlistMovies(user, sessionId);
            const tvShows = await fetchWatchlistTvShows(user, sessionId);
            setContent([...movies, ...tvShows]);
        }
    }
};

  const fetchWatchlist = async () => {
    if (sessionId && user) {
        const movies = await fetchWatchlistMovies(user, sessionId);
        const tvShows = await fetchWatchlistTvShows(user, sessionId);
        setWatchlist([...movies, ...tvShows]);
    }
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    fetchWatchlist();
    createSession()
    .then(data => {
        setSessionId(data);
        setUser(localStorage.getItem('user_id'));
        if (sessionId){
            setIsLoggedIn(true);
        }
    })
    .catch(err => console.log(err));
  }, [sessionId, watchlist]);
  return (
    <BrowserRouter>
      <div id='bingeworthy' className="App">
        <div className="App-container">
          <Nav isLoggedIn={isLoggedIn} handleClick={handleClick} />
          <SideBar isActive={isActive}/>
          <Routes>
            <Route path='/' element={<MovieContainer watchlist={watchlist} sessionId={sessionId} user={user} />} />
            <Route path='/watchlist' element={(
              <>
                <ContainerFilter setContainerFilter={setContainerFilter}/>
                <MiniCards content={content} fetchContent={fetchContent} containerFilter={containerFilter} inList={true} sessionId={sessionId} user={user}/>
              </>
            )} />
            <Route path="*" element={<h1 style={{ marginTop: '100px', height: '1000px' }}>Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
