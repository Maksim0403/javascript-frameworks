import type { Shape } from "./shape";

export class Triangle implements Shape {
    side: number;

    constructor(side: number) {
        this.side = side;
    }

    getArea(): number {
        return (Math.sqrt(3) / 4) * this.side * this.side;
    }

    getPerimeter(): number {
        return 3 * this.side;
    }

    scale(factor: number): void {
        this.side *= factor;
    }
}