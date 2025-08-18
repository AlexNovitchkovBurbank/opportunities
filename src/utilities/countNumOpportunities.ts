import type { OpportunityApiData } from "../types/apiTypes";
import type { TypeRecord } from "../types/typeRecord";

export function countNumOpportunities(opportunityApiData: OpportunityApiData[]) : TypeRecord[] {
    let typeAndNumOpportunities: TypeRecord[] = [{type: opportunityApiData[0].type, num: 1}];

    for (let i = 1; i < opportunityApiData.length; i++) {
        const record = typeAndNumOpportunities.find((item) => item.type === opportunityApiData[i].type)
        typeAndNumOpportunities = typeAndNumOpportunities.filter((item) => item.type !== opportunityApiData[i].type)
        if (record !== undefined) {
            record.num = record.num + 1;
            typeAndNumOpportunities.push(record);
        }
        else {
            typeAndNumOpportunities.push({type: opportunityApiData[i].type, num: 1});
        }
    }

    return typeAndNumOpportunities;
}