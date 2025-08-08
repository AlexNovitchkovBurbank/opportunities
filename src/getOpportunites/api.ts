const api = (apiKey: string, formattedPostedFromDate: string, formattedPostedToDate: string, limit: number, ncodeAsString: string) => {
    return fetch('https://api.sam.gov/opportunities/v2/search', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'api_key': apiKey,
                        'postedFrom': formattedPostedFromDate,
                        'postedTo': formattedPostedToDate,
                        'limit': limit.toString(),
                        'ncode': ncodeAsString,
                        'offset': '0',
                    }})
        .then(response => response.json())
        .catch(error => {
        console.error('Error fetching opportunities:', error);
        throw error;
        });
}

export default api;