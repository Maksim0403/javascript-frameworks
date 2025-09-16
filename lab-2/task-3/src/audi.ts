import {Car} from "./car";

export class Audi extends Car {
    private fuelType: string;

    constructor(model: string, year: number, fuelType: string) {
        super('Audi', model, year);
        this.fuelType = fuelType;
    }

    public showInfo(): void {
        console.log(`Audi ${this.model}, ${this.getYear()} рік, тип палива: ${this.fuelType}`);
    }
}