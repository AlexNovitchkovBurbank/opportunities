import type { OpportunityApiData, OpportunityAttachmentsData } from "../types/apiTypes";
import { OpportunityFrequency } from "../types/chartTypes";
import { countNumOpportunities } from "./countNumOpportunities";

export function fillOpportunityFrequencyData(opportunityApiData: OpportunityApiData[]): OpportunityFrequency[] {
    const opportunityData: OpportunityFrequency[] = [];

    const typeOfOpportunityArray = countNumOpportunities(opportunityApiData);
    for (let i = 0; i < typeOfOpportunityArray.length; i++) {
        const frequencyData = new OpportunityFrequency(typeOfOpportunityArray[i].type, typeOfOpportunityArray[i].num);
        opportunityData.push(frequencyData)
    }

    return opportunityData;
}