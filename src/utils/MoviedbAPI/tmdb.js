const baseUrl = 'https://api.themoviedb.org/3/';

export const fetchImage = (path, size = 'original') => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};


