export class Currency {
    constructor(abbreviation, rate) {
        this.abbreviation = abbreviation;
        this.rate = rate;
    }

    getValues() {
        return [this.abbreviation, this.rate];
    }
    
}