
const baseUrl = process.env.REACT_APP_BASE_URL;
const token = process.env.REACT_APP_ACCESS_TOKEN;
const imageDbUrl = process.env.REACT_APP_IMAGE_URL;

const optionsConstructor = (method, body, body_req=false) => {
    if (!body_req) return {
        method: method,
        headers: {
            accept: 'application/json',
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

/* Top Movies */

const topMovies = async () => {
    const response = await fetch(`${baseUrl}movie/popular?language=en-US&page=1`, optionsConstructor('GET', null, true));
    const data = await response.json();
    return data.results;
}
// const topMovies = fetch(`${baseUrl}movie/popular?language=en-US&page=1`, optionsConstructor('GET', null, true))
//     .then(response => response.json())
//     .then(data => data.results)
//     .catch(err => console.log(err));

console.log(process.env);
module.exports = {
    fetchImage,
    topMovies
};