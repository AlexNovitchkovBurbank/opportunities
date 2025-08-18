export class OpportunityFrequency {
    constructor(type: string, numberOfOpportunities: number) {
        this.type = type
        this.numberOfOpportunities = numberOfOpportunities
    }
    type: string
    numberOfOpportunities: number
}

export interface numOpportunitiesBarChartProps {
    dataPoints: OpportunityFrequency[]
}