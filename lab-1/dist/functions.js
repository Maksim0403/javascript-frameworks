function repeatText(text, times) {
    if (times === void 0) { times = 1; }
    for (var i = 0; i < times; i++) {
        console.log(text);
    }
}
repeatText("Hello, World!");
repeatText("TypeScript is cool!", 3);
