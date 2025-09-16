import {Car} from "./car";

export class Tesla extends Car {
    private battery: number;

    constructor(model: string, year: number, battery: number) {
        super('Tesla', model, battery);
        this.battery = battery;
    }

    public showInfo(): void {
        console.log(`Tesla ${this.model}, ${this.getYear()} рік, батарея: ${this.battery} кіловат/год`);
    }
}