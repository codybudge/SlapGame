

function Monster(name, health) {
    this.name = name;
    this.health = health;
    this.attacks = {
        bite: 15,
        smash: 30
    }
    this.items = []
    this.hits = 0
}
//Monster Maker
var monsters = {
    frank: new Monster("Frankenstien", 100)
}

function giveFrank(itemGiven) {
    monsters.frank.items.push(itemGiven)

}



function Item(name, modifier, description) {
    this.itemName = name;
    this.itemMod = modifier;
    this.itemDescrptn = description;

}
var items = {
    sheild: new Item("Sheild", 0.3, "A strong shield!"),
    sword: new Item("Sword", 20, "A large sword!"),
    potion: new Item("Potion", 15, "Restore your health!"),
}

//adds all items modifiers from franks items array
function addMods() {
    var total = 0
    for (var i = 0; i < monsters.frank.items.length; i++) {
        var item = monsters.frank.items[i];
        total+=item.itemMod
    }
    if (total){
        return total
    }
    return 1
}


function slap() {
    monsters.frank.health-= 1 * addMods()    
    update()
    hitCnt()
}
function mnstrName() {
    monsters.frank.name
    update()
}
function hitCnt() {
    monsters.frank.hits++
    update()
}


function punch() {
    monsters.frank.health -= 5 * addMods()
    update()
    hitCnt()
}
function kick() {
    monsters.frank.health -= 10 * addMods()
    update()
    hitCnt()
}
function sheild(){
    giveFrank(items.sheild)
}
function sword(){
    giveFrank(items.sword)
}

function update() {
    document.getElementById("health").innerText = monsters.frank.health
    document.getElementById("hits").innerText = monsters.frank.hits
    document.getElementById("name").innerText = monsters.frank.name
}
update()
