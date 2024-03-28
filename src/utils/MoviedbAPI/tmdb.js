
const baseUrl = process.env.REACT_APP_BASE_URL;
const token = process.env.REACT_APP_ACCESS_TOKEN;
const imageDbUrl = process.env.REACT_APP_IMAGE_URL;
const domain = "http://localhost:3000";

/* Helper Functions */
const optionsConstructor = (method, body, body_req=false) => {
    if (body_req) return {
        method: method,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
    };
    else {
        return {
            method: method,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
    }
};

const fetchImage = (path, size = 'original') => {
  return `${imageDbUrl}${size}${path}`;
};


const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const authenticate = async () => {
    const response = await fetch(`${baseUrl}authentication/token/new`, optionsConstructor('GET', null, false));
    const data = await response.json();
    window.location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${domain}`;
};

const createSession = async () => {
    if (localStorage.getItem('expires') && Date.now() > localStorage.getItem('expires')){
        localStorage.removeItem('session_id');
        localStorage.removeItem('expires');
    }
    if (localStorage.getItem('session_id')){
        return localStorage.getItem('session_id');
    }
    const params = new URLSearchParams(window.location.search);
    const token = params.get('request_token');
    const body = {
        request_token: token
    };
    try {
        const response = await fetch(`${baseUrl}authentication/session/new`, optionsConstructor('POST', body, true));
        const data = await response.json();
        if (data.success) {
            const expires = 60 * 60 * 1000 + Date.now();
            const response2 = await fetch(`${baseUrl}account?session_id=${data.session_id}`, optionsConstructor('GET', null, false));
            const data2 = await response2.json();
            localStorage.setItem('user_id', data2.id);
            localStorage.setItem('session_id', data.session_id);
            localStorage.setItem('expires', expires);
            return data.session_id;
        } else {
            console.error('Session creation failed', data);
        }
    } catch (error) {
        console.error('Session creation failed', error);
    }
    return null;
};

/* Top Movies */

const topMovies = async () => {
    const response = await fetch(`${baseUrl}movie/popular?language=en-US&page=1`, optionsConstructor('GET', null, false));
    const data = await response.json();
    return data.results;
};

/* Top TV Shows */
const topTvShows = async () => {
    const response = await fetch(`${baseUrl}trending/tv/week?language=en-US`, optionsConstructor('GET', null, false));
    const data = await response.json();
    return data.results;
};

/* Random Genre */
const randomGenre = async () => {
    const response = await fetch(`${baseUrl}genre/movie/list?language=en`, optionsConstructor('GET', null, false));
    const data = await response.json();
    const randomIndex = getRandomInt(0, 18);
    return data.genres[randomIndex];
};

const fetchGenreMovies = async (genreId) => {
    const response = await fetch(`${baseUrl}discover/movie?with_genres=${genreId}&language=en-US&page=1&sort_by=popularity.desc`, optionsConstructor('GET', null, false));
    const data = await response.json();
    return data.results;
};

const fetchRandomGenre = async () => {
    const groupedMovies = [];
    for (let i = 0; i < 4; i++) {
        const genre = await randomGenre();
        const movies = await fetchGenreMovies(genre.id);
        const item = {
            genre: genre.name,
            movies: movies
        };
        groupedMovies.push(item);
    }
    return groupedMovies;
}

const fetchWatchlistMovies = async (account_id, sessionId) => {
    const response = await fetch(`${baseUrl}account/${account_id}/watchlist/movies?session_id=${sessionId}&language=en-US&sort_by=created_at.asc`, optionsConstructor('GET', null, false));
    const data = await response.json();
    return data.results;
}

const fetchWatchlistTvShows = async (account_id, sessionId) => {
    const response = await fetch(`${baseUrl}account/${account_id}/watchlist/tv?session_id=${sessionId}&language=en-US&sort_by=created_at.asc`, optionsConstructor('GET', null, false));
    const data = await response.json();
    return data.results;
}

/* Modify Watchlist */
const addToWatchlist = async (account_id, sessionId, media_type, media_id) => {
    const body = {
        media_type: media_type,
        media_id: media_id,
        watchlist: true
    };
    const response = await fetch(`${baseUrl}account/${account_id}/watchlist?session_id=${sessionId}`, optionsConstructor('POST', body, true));
    const data = await response.json();
    console.log(data);
    return data;
};

const removeFromWatchlist = async (account_id, sessionId, media_type, media_id) => {
    const body = {
        media_type: media_type,
        media_id: media_id,
        watchlist: false
    };
    const response = await fetch(`${baseUrl}account/${account_id}/watchlist?session_id=${sessionId}`, optionsConstructor('POST', body, true));
    const data = await response.json();
    return data;
};


module.exports = {
    fetchImage,
    topMovies,
    topTvShows,
    fetchRandomGenre,
    createSession,
    authenticate,
    fetchWatchlistMovies,
    fetchWatchlistTvShows,
    addToWatchlist,
    removeFromWatchlist
};