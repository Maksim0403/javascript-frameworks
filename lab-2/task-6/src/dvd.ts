import type {LibraryItem} from "./libraryItem";

export class DVD implements LibraryItem {
    name: string;
    author: string;
    isBorrowed: boolean = false;
    duration: number;

    constructor(name: string, author: string, duration: number) {
        this.name = name;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Диск "${this.name}" було успішно позичено`);
        } else {
            console.log(`Диск "${this.name}" зайнятий!.`);
        }
    }
}