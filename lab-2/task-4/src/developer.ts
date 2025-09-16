import {Employee} from "./employee";
import type {Payable} from "./payable";

export class Developer extends Employee implements Payable{
    getAnnualBonus(): number {
        return this.salary * 0.1;
    }

    pay(): void {
        console.log(`Розробник отримав зарплату: ${this.salary}`);
    }
}