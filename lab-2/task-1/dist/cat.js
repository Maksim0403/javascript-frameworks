export class Cat {
    name;
    speed;
    kind;
    constructor(name, speed, kind) {
        this.name = name;
        this.speed = speed;
        this.kind = kind;
    }
    move() {
        console.log(`${this.name} біжить зі швидкістю: ${this.speed ?? "невідомо"} км/год; Вид: ${this.kind}`);
    }
}
//# sourceMappingURL=cat.js.map