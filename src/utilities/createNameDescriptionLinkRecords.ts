import type { OpportunityApiData } from "../types/apiTypes";
import { NameDescriptionLinkRecords } from "../types/tableTypes";

export function createNameDescriptionLinkRecords(nonprofitsApiData: OpportunityApiData[]): NameDescriptionLinkRecords[] {
    let nameDescriptionLinkRecords: NameDescriptionLinkRecords[] = [];

    for (let i = 0; i < nonprofitsApiData.length; i++) {
        let nameDescriptionLinkRecord = new NameDescriptionLinkRecords(nonprofitsApiData[i].name, nonprofitsApiData[i].description);
        nameDescriptionLinkRecords.push(nameDescriptionLinkRecord);
    }

    return nameDescriptionLinkRecords;
}