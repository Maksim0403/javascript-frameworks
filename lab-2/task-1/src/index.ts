// 1
import { Cat } from "./cat";
import { Bird } from "./bird";
import { Fish } from "./fish";

const cat = new Cat("Мурчик", 15, "Наземні");
const bird = new Bird("Голуб", 25, "Наземно-повітряні");
const fish = new Fish("Золота рибка", undefined, "Водні");

cat.move();
bird.move();
fish.move();