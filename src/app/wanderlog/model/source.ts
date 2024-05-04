export class Source {
    constructor(data: any) {
        this.name = data.name;
        this.description = data.description;
        this.flightPrice = data.flightPrice;
        this.hotelPrice = data.hotelPrice;
    }
    name: string;
    description: string;
    flightPrice: string;
    hotelPrice: string;
}

