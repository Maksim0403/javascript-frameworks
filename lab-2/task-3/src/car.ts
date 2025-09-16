export abstract class Car {
    protected brand: string;
    private year: number;
    public model: string;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.year = year;
        this.model = model;
    }

    abstract showInfo(): void;

    protected getYear(): number {
        return this.year;
    }
}