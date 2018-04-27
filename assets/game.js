function Monster(name,health,hits,){
    this.mnstrName = name;
    this.mnstrHealth = health;
    this.hits = hits;
}
var Jaggi = new MonsterStats(Jaggi,100,0);

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