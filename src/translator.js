function Translator() {
    if (document && document.body && document.body.innerHTML) {
        var that = this;
        document.body.innerHTML = document.body.innerHTML.replace(/(½|¾|[0-9]+(?:\.[0-9]+)?)\s+(cup|tsp|teaspoon|oz)([\sa-z-,]+)/g, function (match, mass, unit, ingredients, offset, string) {
            console.log(ingredients);
            var size = that.getString(that.parseMass(mass), unit);
            return size ? "(" + mass + " " + unit + ") " + size + " " + ingredients : match;
        });
    }

}

Translator.prototype.parseMass = function (mass) {
    switch (mass) {
        case '¾':
            return 0.75;
            break;
        case '½':
            return 0.5;
            break;
    }
    return parseInt(mass);
};

Translator.prototype.getString = function (mass, unit) {
    switch (unit) {
        case "cup":
            return Math.round(mass * 114 * 100) / 100 + " ml";
            break;
        case "tsp":
            return Math.round(mass * 100) / 100 + " teaspoons";
            break;
        case "oz":
            return Math.round(mass * 29.57 * 100) / 100 + " ml";
            break;
    }
    return false;
};


new Translator();
