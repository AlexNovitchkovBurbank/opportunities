export class OpportunityApiData {
    constructor(name: string, type: string, code: number, noticeid: number, description: string, otherLinks: string[], infoJsonString: string) {
        this.name = name;
        this.type = type;
        this.code = code;
        this.noticeid = noticeid;
        this.description = description;
        this.otherLinks = otherLinks;
        this.infoJsonString = infoJsonString;
    }
    name: string
    type: string
    code: number
    noticeid: number
    description: string
    otherLinks: string[]
    infoJsonString: string
}

export class OpportunityAttachmentsData {
    constructor(solicitationId: number, infoJsonString: string) {
        this.solicitationId = solicitationId;
        this.infoJsonString = infoJsonString;
    }
    solicitationId: number
    infoJsonString: string
}