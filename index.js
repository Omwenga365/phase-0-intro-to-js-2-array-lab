// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(){
    cats.push("Ralph")
    return cats
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
    return cats

}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats
}
function appendCat(){
    let newCats = [].concat(cats, "Broom");
    return newCats
}
function prependCat(){
    let newCat = [].concat("Arnold", cats);
    return newCat
}
function removeLastCat(){
    return cats.slice(0,2)
}
function removeFirstCat(){
return cats.slice(1)
}