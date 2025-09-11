import type { Animal } from "./animal";

export class Cat implements Animal {
    name: string;
    speed?: number | undefined;
    kind?: string | undefined;

    constructor(name: string, speed?: number, kind?: string) {
        this.name = name;
        this.speed = speed;
        this.kind = kind;
    }

    move(): void {
        console.log(`${this.name} біжить зі швидкістю: ${this.speed ?? "невідомо"} км/год; Вид: ${this.kind}`);
    }
}