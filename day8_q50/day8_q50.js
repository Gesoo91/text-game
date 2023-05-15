function hr(){
    document.write("<hr>");
}
function br(){
    document.write("<br>");
}

function base(name,hp,attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
}
new base();
var monster = new base();
monster.name = "orc";
monster.hp = 150;
monster.attack = 10;
var human = new base();
human.name = "사람";
human.hp = 100;
human.attack = 3;

function info(){
    document.write("이름:"+monster.name);
    br();
    document.write("hp:"+monster.hp);
    br();
    document.write("공격력:"+monster.attack);
    hr();
    document.write("이름:"+human.name);
    br();
    document.write("hp:"+human.hp);
    br();
    document.write("공격력:"+human.attack);
    hr();

    document.write("전투시작!");
    br();
    document.write(monster.name+"의 공격!");
    br();
    document.write(monster.attack+"만큼의 데미지!");
    br();
    document.write(human.name+"의 hp는"+(human.hp-monster.attack)+"이 되었다.");
    br();
    br();
    document.write(human.name+"의 공격!");
    br();
    document.write(human.attack+"만큼의 데미지!");
    br();
    document.write(monster.name+"의 hp는"+(monster.hp-human.attack)+"이 되었다.");
    hr();

}
info()

