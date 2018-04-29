

function Monster(name, health) {
    this.name = name;
    this.health = health;
    this.items = []
    this.hits = 0
}
//Monster Maker
var monsters = {
    rath: new Monster("Rathalos", 250)
}

function giveRath(itemGiven) {
    monsters.rath.items.push(itemGiven)

}



function Item(name, modifier, description) {
    this.itemName = name;
    this.itemMod = modifier;
    this.itemDescrptn = description;

}
var items = {
    sheild: new Item("Sheild", 0.3, "A strong shield!"),
    sword: new Item("Sword", 2, "A large sword!"),
    potion: new Item("Potion", -2,"Give you some health")
}


//adds all items modifiers from raths items array
function addMods() {
    var total = 0
    for (var i = 0; i < monsters.rath.items.length; i++) {
        var item = monsters.rath.items[i];
        total+=item.itemMod
    }
    if (total){
        return total
    }
    return 1
}
function death(){

}

function slap() {
    monsters.rath.health-= 1 * addMods()    
    update()
    hitCnt()
}
function mnstrName() {
    monsters.rath.name
    update()
}
function hitCnt() {
    monsters.rath.hits++
    update()
}


function punch() {
    monsters.rath.health -= 5 * addMods()
    update()
    hitCnt()
}
function kick() {
    monsters.rath.health -= 10 * addMods()
    update()
    hitCnt()
}
function sheild(){
    giveRath(items.sheild)
}
function sword(){
    giveRath(items.sword)
}
function potion(){
    giveRath(items.potion)
}

function update() {
    document.getElementById("health").innerText = monsters.rath.health
    document.getElementById("hits").innerText = monsters.rath.hits
    document.getElementById("name").innerText = monsters.rath.name
}
update()
