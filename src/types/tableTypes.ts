export class NameDescriptionLinkRecords {
    constructor(name: string, descriptionLink: string) {
        this.name = name
        this.descriptionLink = descriptionLink
    }
    name: string
    descriptionLink: string
}

export interface nameDescriptionLinkTableProps {
    nameDescriptionLinkRecords: NameDescriptionLinkRecords[]
}