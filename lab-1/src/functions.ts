function repeatText(text: string, times: number = 1): void {
    for (let i = 0; i < times; i++) {
        console.log(text);
    }
}

repeatText("Hello, World!");
repeatText("TypeScript is cool!", 3);
