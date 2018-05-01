

function Monster(name, health) {
    this.name = name;
    this.health = health;
    this.items = []
    this.hits = 0
}
//Monster Maker
var monsters = {
    rath: new Monster("Rathalos", 100)
}

function giveRath(itemGiven) {
    monsters.rath.items.push(itemGiven)

}
function deathGif() {
    if (monsters.rath.health <= 0) {
        document.getElementById("monsterImg").innerHTML = `<img id="rath"src="assets/meat.gif" alt=""></img>`
    }
}


function Item(name, modifier, description) {
    this.itemName = name;
    this.itemMod = modifier;
    this.itemDescrptn = description;

}
var items = {
    sheild: new Item("Sheild", 0.3, "A strong shield!"),
    sword: new Item("Sword", 2, "A large sword!"),
    potion: new Item("Potion", -2, "Give you some health")
}


//adds all items modifiers from raths items array
function addMods() {
    var total = 0
    for (var i = 0; i < monsters.rath.items.length; i++) {
        var item = monsters.rath.items[i];
        total += item.itemMod
    }
    if (total) {
        return total
    }
    return 1
}


function slap() {
    monsters.rath.health -= 1 * addMods()
    //hitCnt is also calling update, reduce the draws to the screen by eliminating one of those instances
    update()
    hitCnt()
    deathGif()
}

//this function never gets used nor does it do anything at the moment
function mnstrName() {
    monsters.rath.name
    update()
}

function hitCnt() {
    monsters.rath.hits++
    update()
}

// how could you combine slap punch and kick into one function?
function punch() {
    monsters.rath.health -= 5 * addMods()
    update()
    hitCnt()
    deathGif()
}
function kick() {
    monsters.rath.health -= 10 * addMods()
    update()
    hitCnt()
    deathGif()
}

//how too could these be one function
function sheild() {
    giveRath(items.sheild)
}
function sword() {
    giveRath(items.sword)
}
function potion() {
    giveRath(items.potion)
}

//finish this up
function reset() {
    resetRath()
}




function update() {
    document.getElementById("health").innerText = monsters.rath.health
    document.getElementById("hits").innerText = monsters.rath.hits
    document.getElementById("name").innerText = monsters.rath.name
}

update()
