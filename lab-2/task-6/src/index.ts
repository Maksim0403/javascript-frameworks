import type {LibraryItem} from "./libraryItem";
import {Library} from "./library";
import {DVD} from "./dvd";
import {Magazine} from "./magazine";
import {Book} from "./book";

const library = new Library();

const book1 = new Book('Код да Вінчі', 'Ден Браун', 350);
const magazine1 = new Magazine('National Geographic', 'Редакція', 125);
const dvd1 = new DVD("Inception", "Christopher Nolan", 148);

library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

library.listAvailableItems();

console.log("\nПозичаємо книгу та DVD:");
book1.borrow();
dvd1.borrow();

console.log("\nСписок після позичання:");
library.listAvailableItems();


console.log("\nПошук за назвою:");
const found = library.findItemByName("National Geographic");
if (found) {
    console.log(`Знайдено: ${found.name} (${found.author})`);
}
