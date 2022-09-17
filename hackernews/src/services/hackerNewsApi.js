import axios from 'axios'

export const getHackerNewsPerPage = async (currentPage) => {
    return await axios.get(`https://hn.algolia.com/api/v1/search?&page=${currentPage}`);
}