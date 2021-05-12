import fetchData from "./fetchData"

const API_URL = 'http://www.omdbapi.com/?apikey=a461e386'
const PAGE_SIZE = 10

export const getFilms = async ({search, p}) => {
    if (!p) p = 0;
    const url = `${API_URL}&s=${search}${!p || p === 1 ? '' : '&page=' + p}`
    try {
        const response = await fetchData({url})
        return {
            data: response.Search ? response.Search : [],
            hasMore: (response.totalResults / (PAGE_SIZE * p)) > 0,
            error: response.Error ? response.Error : false
        }
    
    } catch (error) {
        console.error('Request API failured, error:' , error)
        return {
            data: [],
            hasMore: false,
            error
        }
    }
}