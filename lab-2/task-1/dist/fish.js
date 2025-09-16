export class Fish {
    name;
    speed;
    kind;
    constructor(name, speed, kind) {
        this.name = name;
        this.speed = speed;
        this.kind = kind;
    }
    move() {
        console.log(`${this.name} пливе зі швидкістю: ${this.speed ?? "невідомо"} км/год; Вид: ${this.kind}`);
    }
}
//# sourceMappingURL=fish.js.map