export class NameDescriptionLinkRecords {
    constructor(type: string, opportunityLink: string) {
        this.type = type
        this.opportunityLink = opportunityLink
    }
    type: string
    opportunityLink: string
}

export interface nameDescriptionLinkTableProps {
    nameDescriptionLinkRecords: NameDescriptionLinkRecords[]
}