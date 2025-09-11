function calculateIceCream(): void {
    let total = 0;

    const size = prompt("Оберіть розмір стаканчика: маленький (10 грн) або великий (25 грн):")?.toLowerCase();
    if (size === "маленький") {
        total += 10;
    } else if (size === "великий") {
        total += 25;
    } else {
        alert("Некоректний вибір розміру!");
        return;
    }

    const toppings = prompt("Оберіть начинку (шоколад, карамель, ягоди). Можна декілька через кому:")?.toLowerCase().split(",");
    if (!toppings || toppings.length === 0) {
        alert("Потрібно обрати хоча б одну начинку!");
        return;
    }

    for (let topping of toppings) {
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
                alert(`Начинка "${topping}" не доступна!`);
        }
    }

    const marshmallow = prompt("Бажаєте маршмелоу за 5 грн? (так/ні):")?.toLowerCase();
    if (marshmallow === "так") {
        total += 5;
    }

    alert(`Загальна вартість вашого морозива: ${total} грн`);
}

calculateIceCream();
