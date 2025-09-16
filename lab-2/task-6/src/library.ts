import type {LibraryItem} from "./libraryItem";

export class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find((item) => item.name === name);
    }

    listAvailableItems(): void {
        console.log('Доступні елементи');
        for (const item of this.items) {
            if (!item.isBorrowed) {
                console.log(`- ${item.name} (Автор: ${item.author})`)
            }
        }
    }
}