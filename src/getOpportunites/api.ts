import axios from "axios";
import type { OpportunityApiData } from "../types/apiTypes";

const api = (apiKey: string, formattedPostedFromDate: string, formattedPostedToDate: string, limit: number, naicsCodesInString: string): OpportunityApiData[] => {
    /* return await axios.get('https://api.sam.gov/opportunities/v2/search', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'api_key': apiKey,
                        'postedFrom': formattedPostedFromDate,
                        'postedTo': formattedPostedToDate,
                        'limit': limit.toString(),
                        'naicscode': naicsCodesInString,
                        'offset': '0',
                    }})
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching opportunities:', error);
        }); */

        const apiReturn: OpportunityApiData[] = [
            {
                name: "A",
                infoJsonString: "",
                noticeid: 1,
                description: "4",
                type: "A",
                code: 3,
                otherLinks: []
            },
            {
                name: "A",
                infoJsonString: "",
                noticeid: 1,
                description: "5",
                type: "A",
                code: 3,
                otherLinks: []
            },
            {
                name: "B",
                infoJsonString: "",
                noticeid: 1,
                description: "6",
                type: "B",
                code: 3,
                otherLinks: []
            }
        ];

        return apiReturn
}

export default api;