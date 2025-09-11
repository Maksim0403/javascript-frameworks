function calculateIceCream() {
    var _a, _b, _c;
    var total = 0;
    var size = (_a = prompt("Оберіть розмір стаканчика: маленький (10 грн) або великий (25 грн):")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (size === "маленький") {
        total += 10;
    }
    else if (size === "великий") {
        total += 25;
    }
    else {
        alert("Некоректний вибір розміру!");
        return;
    }
    var toppings = (_b = prompt("Оберіть начинку (шоколад, карамель, ягоди). Можна декілька через кому:")) === null || _b === void 0 ? void 0 : _b.toLowerCase().split(",");
    if (!toppings || toppings.length === 0) {
        alert("Потрібно обрати хоча б одну начинку!");
        return;
    }
    for (var _i = 0, toppings_1 = toppings; _i < toppings_1.length; _i++) {
        var topping = toppings_1[_i];
        topping = topping.trim();
        switch (topping) {
            case "шоколад":
                total += 5;
                break;
            case "карамель":
                total += 6;
                break;
            case "ягоди":
                total += 10;
                break;
            default:
                alert("\u041D\u0430\u0447\u0438\u043D\u043A\u0430 \"".concat(topping, "\" \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430!"));
        }
    }
    var marshmallow = (_c = prompt("Бажаєте маршмелоу за 5 грн? (так/ні):")) === null || _c === void 0 ? void 0 : _c.toLowerCase();
    if (marshmallow === "так") {
        total += 5;
    }
    alert("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0432\u0430\u0448\u043E\u0433\u043E \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(total, " \u0433\u0440\u043D"));
}
calculateIceCream();
