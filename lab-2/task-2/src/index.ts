import { Circle } from "./circle";
import { Triangle } from "./triangle";
import { Rectangle } from "./rectangle";
import type { Shape } from "./shape";

const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(2, 3),
    new Triangle(5)
]

let totalArea = 0;
let totalPerimeter = 0;

for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}

console.log("Загальна площа: ", totalArea.toFixed(2));
console.log("Загальний периметр: ", totalPerimeter.toFixed(2));

// @ts-ignore
shapes[1].scale(2); // Збільшимо коло вдвічі
// @ts-ignore
console.log("Нова площа кола після масштабу:", shapes[0].getArea().toFixed(2));