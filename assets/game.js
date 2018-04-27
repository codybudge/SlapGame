function Monster(name,health,hits,){
    this.mnstrName = name;
    this.mnstrHealth = health;
    this.hits = hits;
}
var monsters={
    Jaggi: new Monster("Jaggi",100,0),
    ablty:[]
}

function Item(name,modifier,description){
    this.itemName = name;
    this.itemMod = modifier;
    this.itemDescrptn = description;
    
}
var items={
sheild: new Item("Sheild",0.3,"A strong shield!"),
greatSword: new Item("Great Sword", 20,"A large sword made from the jaw-bone of a monster!"),
potion: new Item("Potion", 50,"Restore your health!"),
}

function Ability(name,modifier,description){
    this.abltyName = name;
    this.abltyMod = modifier;
    this.abltyDescrptn = description;
}

var abilitys={
    bite: new Ability("Bite",15,"Monster bites you!"),
    tailSwng: new Ability("Tail Swing",30,"Monster swings his tail."),
    gard: new Ability("Gard",0.3,"Monster Gards!")
}

function slap() {
    health-- 
    update()
    hitCnt()
}
function mnstrName(){
    name
    update()
}
function hitCnt(){
    hits++
    update()
}


function punch(){
    health-=5
    update()
    hitCnt()
}
function kick(){
    health-=10
    update()
    hitCnt()
}

function update() {
    document.getElementById("health").innerText = health
    document.getElementById("hits").innerText = hits
    document.getElementById("name").innerText = name

}
update()