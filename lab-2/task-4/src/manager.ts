import {Employee} from "./employee";
import type {Payable} from "./payable";

export class Manager extends Employee implements Payable{
    getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    pay(): void {
        console.log(`Менеджер отримав зарплату: ${this.salary}`);
    }
}