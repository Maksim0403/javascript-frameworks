import {Car} from "./car";
import {Mercedes} from "./mercedes";
import {Audi} from "./audi";
import {Tesla} from "./tesla";

const car1 = new Mercedes('GLE350', 2020, 250);
const car2 = new Mercedes('S500', 2020, 290);

const car3 = new Audi('RS6', 2023, 'Дизель');
const car4 = new Audi('E-tron', 2023, 'Електрика');

const car5 = new Tesla('Model X', 2024, 100);
const car6 = new Tesla('Model 3', 2021, 75);

car1.showInfo();
car2.showInfo();
car3.showInfo();
car4.showInfo();
car5.showInfo();
car6.showInfo();
