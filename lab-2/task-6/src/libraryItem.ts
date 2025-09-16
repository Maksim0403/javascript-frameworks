export interface LibraryItem {
    name: string;
    author: string;
    isBorrowed: boolean;

    borrow(): void;
}