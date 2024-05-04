export class SpecialOffer {
    constructor(data: any) {
        this.offersName = data.offersName;
        this.offerDescription = data.offerDescription;
        this.offerPrice = data.offerPrice;
    }
    offersName: string;
    offerDescription: string;
    offerPrice: string;
}
