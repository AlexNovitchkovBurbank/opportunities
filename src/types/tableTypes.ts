export class NameDescriptionLinkRecords {
    constructor(name: string, description: string) {
        this.name = name
        this.description = description
    }
    name: string
    description: string
}

export interface nameDescriptionLinkTableProps {
    nameDescriptionLinkRecords: NameDescriptionLinkRecords[]
}