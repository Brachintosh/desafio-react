import {API_KEY, API_URL} from './settings';
import axios from  'axios';

export default async function getMovies() {
    const apiURL = `${API_URL}?api_key=${API_KEY}&language=en-US&region=AR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

    const responseAPI =  await axios.get(apiURL)
        .then(res => res.data)

        let mapped  = responseAPI.results?.map(movie => {
            const { title, overview, genre_ids, release_date, vote_average, backdrop_path, poster_path } = movie
            return  { title, overview, genre_ids, release_date, vote_average, backdrop_path, poster_path }
        })

        return mapped;
};



// const url = 'https://api.themoviedb.org/3/discover/movie?api_key=df5066801189b2180db818abe43bc557&language=en-US&region=AR&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate'

// const API_data_parsed = (responseAPI) => {
//     const { data = [] } = responseAPI
//     if(Array.isArray(data)) {
//         const movies_Data = data.map(movie => {
//             // Array with movies-info
//             const { title, overview, genre_ids, release_date, vote_average, backdrop_path, poster_path } = movie.results
//             return  { title, overview, genre_ids, release_date, vote_average, backdrop_path, poster_path }
//         })
//         // console.log('soy movies_Data >>> ', movies_Data);
//         return movies_Data;
//     }
//     return [];
// };