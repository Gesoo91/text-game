/*
    ver.1 : 오크와 사람의 데이터베이스 만듬, 간단하게 전투출력
    ver.1.1 : 최대체력과 현재체력으로 변경
    
*/
/* todo : battle을 하면 남은 기록을 토대로 다음 전투하게 만들기, 주석추가, 체력 - 되는거 0으로 표시

// 인포에 써지는 것이랑, 전투시작 부분에 써지는 것이랑 전부다 함수로 묶어서 편하게 쓰면 좋겟다. ->현재 hp값 필요;(현재hp값 완료)
// 예를 들면 orc() 하면 오크랑 사람이랑 싸우고, dragon() 하면 드래곤이랑 싸우게 하는것. ->새롭게 함수 작성해야겟다. function fight(human, orc)){ info에 휴면 데이터와 orc와 싸우는거 출력} 되는지 확인
우선 battle로 함수를 만들어서 적용. 이 함수를 반복되게하면 될듯.
// 그러면 human()의 값이 자동으로 남은 hp 저장되게 해서 계속 출력하면 될 것 같다. -> human.hp 값이 변경되게.human.hp=human.hp-mon_r 로 만들어서 적용
// 이후에 랜덤인카운트로 적을 만나게 하면 될듯. -> fight(human,r_mon) r_mon=[a,b,c,d,f,e,f,sd] 배열로 랜덤출현?
// 클릭하면 턴 진행하게 해서, 아이템같은거 넣어도 될듯 hp값 50 올려준다거나, 공격력 10증가하게 집어넣으면 될듯?
// 그러면 현재 상태 보여주는것도 나옴 좋을듯
// 맵도 선택지 줘서 진행하게 하면 좋을듯
*/

// 공통 함수
function hr(){
    document.write("<hr>");
}
function br(){
    document.write("<br>");
}

// 기본 베이스
function base(name,hp,attack,max_Hp){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.max_Hp = max_Hp;
}
new base();

// 캐릭터 스팩
var monster = new base("orc",150,10,150);
// monster.name = "orc";
// monster.hp = 150;
// monster.attack = 10;
// monster.max_Hp = 150;

var human = new base("사람",100,3,100);
// human.name = "사람";
// human.hp = 100;
// human.attack = 3;
// human.max_Hp = 100;

var slime = new base("slime",10,1,10);


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
function info(monster){
    document.write("이름:"+monster.name);
    br();
    document.write("최대체력:"+monster.max_Hp);
    br();
    document.write("현재체력:"+monster.hp);
    br();
    document.write("최대 공격력:"+monster.attack);
    hr();
    // document.write("이름:"+human.name);
    // br();
    // document.write("최대체력:"+human.max_Hp);
    // br();
    // document.write("hp:"+human.hp);
    // br();
    // document.write("최대 공격력:"+human.attack);
    // hr();
}
// 정보창 출력
info(slime);
info(human);
document.write("전투시작!");
br();
hr();

// 배틀 설정
function battle(x,y){ //배틀에 나올 몬스터와 사람을 적어서 할 수 있게 변경.
    mon_r=Math.floor(Math.random()*(x.attack+1)); // 0~9댐이 나오기때문에 0~10댐이 나오려면 어떻게해야할까?안쪽에 괄호치고+1?
    hum_r=Math.floor(Math.random()*(y.attack+1));
    document.write(x.name+"의 공격!");
    br();
    document.write(mon_r+"만큼의 데미지!");
    br();
    document.write(human.name+"의 현제체력은"+(y.hp-mon_r)+"이 되었다.");
    y.hp = y.hp-mon_r;
    document.write(y.hp+"/"+y.max_Hp);
    br();
    br();
    document.write(y.name+"의 공격!");
    br();
    document.write(hum_r+"만큼의 데미지!");
    br();
    document.write(x.name+"의 현제체력은"+(x.hp-hum_r)+"이 되었다.");
    x.hp = x.hp-hum_r
    document.write(x.hp+"/"+x.max_Hp);
    hr();
}
while(true){
    battle(slime,human);
    if(human.hp<=0){
        human.hp = 0;
        break;
    }
    else if(slime.hp<=0){
        slime.hp = 0;
        break;
    }
}
document.write("전투종료!");
hr();
info(human);

/*
    정답지를 보면 방향성 자체는 맞게 가는것 같다.
*/