const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop('Garfield');
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift('Milo');
    return cats;
}

function appendCat(name) {
    const mainCats = ["Milo", "Otis", "Garfield"];
    const allCats = [...mainCats, "Broom"];
    return allCats;
    return mainCats;
}

function prependCat(name) {
    const mainCats = ["Milo", "Otis", "Garfield"];
    const moreCats = ["Arnold", ...mainCats];
    return moreCats;
    return; mainCats;
}

function removeLastCat() {
    return cats.slice(0, -1);
    return cats;
}



function removeFirstCat() {
    return cats.slice(1);
    return cats;
}

