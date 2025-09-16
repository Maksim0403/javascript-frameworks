import {Employee} from "./employee";
import {Manager} from "./manager";
import {Developer} from "./developer";

const employees: Employee[] = [
    new Developer('Іван', 23, 1000),
    new Developer('Олена', 28, 3000),
    new Manager('Микола', 30, 2000),
    new Manager('Марія', 26, 4000)
]

let totalBonus = 0;
for (const employee of employees) {
    totalBonus += employee.getAnnualBonus();
}

console.log("Загальна річна сума бонусів:", totalBonus);
