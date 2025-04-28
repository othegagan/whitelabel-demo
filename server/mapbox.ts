import axios from 'axios';

export async function getMapboxSuggestions(query: string, searchType: 'general' | 'address') {
    const baseURL = process.env.NEXT_PUBLIC_MAPBOX_BASE_URL || '';
    const searchLimit = process.env.NEXT_PUBLIC_MAPBOX_SEARCH_LIMIT || 6;
    const searchCountry = process.env.NEXT_PUBLIC_MAPBOX_SEARCH_COUNTRY || 'US';
    const responseLanguage = process.env.NEXT_PUBLIC_MAPBOX_RESPONSE_LANGUAGE || 'en';
    const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

    const types = searchType === 'general' ? 'place,postcode,address,poi,district,locality,neighborhood' : 'postcode,address';

    const url = `${baseURL}${encodeURIComponent(query)}.json?country=${searchCountry}&limit=${searchLimit}&proximity=ip&types=${types}&language=${responseLanguage}&access_token=${accessToken}`;

    try {
        const response = await axios.get(url);

        if (response.status !== 200) {
            throw new Error('Error fetching data from Mapbox');
        }

        return response.data.features;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching data from Mapbox: ${error.message}`);
        }
        throw new Error('Error fetching data from Mapbox');
    }
}
