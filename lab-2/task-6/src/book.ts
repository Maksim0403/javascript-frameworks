import type {LibraryItem} from "./libraryItem";

export class Book implements LibraryItem {
    name: string;
    author: string;
    isBorrowed: boolean = false;
    totalPages: number;

    constructor(name: string, author: string, totalPages: number) {
        this.name = name;
        this.author = author;
        this.totalPages = totalPages;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Книга "${this.name}" була успішно позичено`);
        } else {
            console.log(`Книга "${this.name}" зайнята!.`);
        }
    }
}