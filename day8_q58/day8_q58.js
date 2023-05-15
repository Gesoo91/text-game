/*
    ver.1 : 오크와 사람의 데이터베이스 만듬, 간단하게 전투출력
    ver.1.1 : 최대체력과 현재체력으로 변경
    ver.1.2 : 주석추가, 체력 - 되는거 0으로 표시
    ver.1.2.1 : 경험치 획득, 골드 획득 생성
    
*/
/* todo : 정보 출력을 textarea로 하게 변경


// 이후에 랜덤인카운트로 적을 만나게 하면 될듯. -> fight(human,r_mon) r_mon=[a,b,c,d,f,e,f,sd] 배열로 랜덤출현?
// 클릭하면 턴 진행하게 해서, 아이템같은거 넣어도 될듯 hp값 50 올려준다거나, 공격력 10증가하게 집어넣으면 될듯?
// 그러면 현재 상태 보여주는것도 나옴 좋을듯 (내정보)
// 맵도 선택지 줘서 진행하게 하면 좋을듯
*/


var screen_text;
var str = ""

// 공통 함수


function hr() {
    // dw(("<hr>");
    str = str + "\n==================================\n";
    screen_text.value = str;
}
function br() {
    // dw(("<br>");
    str = str + "\n"
    screen_text.value = str;
}
function tv(s) {

    // document.write(s);

    str = str + s
    screen_text.value = str;
}
// function tv(s){
//     str = str+s;
//     screen.value = str;
// }
window.onload = function () {
    screen_text = document.getElementById("screen");

    // 기본 베이스
    function Base(name, hp, attack, max_Hp, exp, next_exp, gold) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.max_Hp = max_Hp;
        this.exp = exp;
        this.next_exp = next_exp
        this.gold = gold
    }
    new Base();

    // 캐릭터 스팩
    var monster = new Base("orc", 150, 10, 150, 100, 0, 50);
    // monster.name = "orc";
    // monster.hp = 150;
    // monster.attack = 10;
    // monster.max_Hp = 150;

    var human = new Base("사람", 100, 3, 100, 0, 500, 0);
    // human.name = "사람";
    // human.hp = 100;
    // human.attack = 3;
    // human.max_Hp = 100;

    var slime = new Base("slime", 10, 1, 10, 10, 0, 10);


    // 배열로 넣어버리면 나중에 다 편하게 할 수 있지 않을까? []_r=Math.floor(Math.random()*([].attack+1)); 이런식으로

    /*
    해설
    function getRandomAttackValue(attack){
        attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
        var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
        return random;
    }
    */

    // 정보창
    function info(x) {
        tv("이름:" + x.name);
        br();
        tv("최대체력:" + x.max_Hp);
        br();
        tv("현재체력:" + x.hp);
        br();
        tv("최대 공격력:" + x.attack);
        br();
        if (x == human) { //휴먼을 따로 빼서 만들었으면 더 편했을지 고민중.
            tv("경험치 : " + human.exp + "/" + human.next_exp);
            br()
            tv("보유골드 : " + human.gold);

        }
        hr();
    }


    // 정보창 출력
    info(slime);
    info(human);


    // 배틀 설정
    function battle(x, y) { //배틀에 나올 몬스터와 사람을 적어서 할 수 있게 변경.(x=몬스터,y=휴먼 고정)
        var mon_r = Math.floor(Math.random() * (x.attack + 1));
        var hum_r = Math.floor(Math.random() * (y.attack + 1));

        tv(x.name + "의 공격!");
        br();
        tv(mon_r + "만큼의 데미지!");
        br();
        tv(y.name + "의 현재체력은" + (y.hp - mon_r) + "이 되었다.");
        y.hp = y.hp - mon_r;
        tv(y.hp + "/" + y.max_Hp);
        br();
        br();
        tv(y.name + "의 공격!");
        br();
        tv(hum_r + "만큼의 데미지!");
        br();
        if (x.hp <= hum_r) {
            tv(x.name + "의 현재체력은" + 0 + "이 되었다.");
        }
        else {
            tv(x.name + "의 현재체력은" + (x.hp - hum_r) + "이 되었다.");
        }
        x.hp = x.hp - hum_r
        if (x.hp > 0) {
            tv(x.hp + "/" + x.max_Hp);
        }
        else {
            tv(0 + "/" + x.max_Hp)
    }
        hr();
    }
    // 경험치와 골드 획득
    function exp_gold(x, y) {
        var mon_g = Math.floor(Math.random() * x.gold) + 1;
        tv("경험치를" + x.exp + "획득했습니다.");
        br();
        tv("골드를" + mon_g + "획득했습니다.");
        br();

        y.exp = y.exp + x.exp;
        y.gold = y.gold + mon_g;
        tv(y.name + "의 경험치:" + y.exp + "/500");
        br()
        tv("보유 골드:" + y.gold);
        br()
    }

    // 전투시작
    tv("전투시작!");
    br();
    hr();

    // 전투가 끝날때 까지 반복
    while (true) {
        battle(slime, human);
        if (human.hp <= 0) {
            human.hp = 0;
            tv("패배...");
            break;

        }
        else if (slime.hp <= 0) {
            slime.hp = 0;
            tv("승리!");
            break;
        }
    }
    // 전투종료
    tv("전투종료!");
    hr();
    // 경험치,골드 획득 출력
    exp_gold(slime, human);
    hr();
    // 전투 이후 상태 표시

    info(human);
}

