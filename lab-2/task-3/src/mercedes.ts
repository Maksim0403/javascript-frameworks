import {Car} from "./car";

export class Mercedes extends Car {
    private maxSpeed: number;

    constructor(model: string, year: number, maxSpeed: number) {
        super('Mercedes', model, year);
        this.maxSpeed = maxSpeed;
    }

    public showInfo(): void {
        console.log((`Mercedes ${this.model}, ${this.getYear()} рік, максимальна швидкість ${this.maxSpeed} км/год`))
    }
}