import type {LibraryItem} from "./libraryItem";

export class Magazine implements LibraryItem {
    name: string;
    author: string;
    isBorrowed: boolean = false;
    releaseNum: number;

    constructor(name: string, author: string, releaseNum: number) {
        this.name = name;
        this.author = author;
        this.releaseNum = releaseNum;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Журнал "${this.name}" було успішно позичено`);
        } else {
            console.log(`Журнал "${this.name}" зайнятий!.`);
        }
    }
}