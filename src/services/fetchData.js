
const fetchData = async ({url, responseType} = {}) => {
    if (!url) throw new Error('No URL Specified')
    const response = await window.fetch(url)

    if (!responseType || responseType === 'json') return await response.json()

    return await response[responseType]()
}

export default fetchData