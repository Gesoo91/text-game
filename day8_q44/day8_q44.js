/*
function cat(){
    this.name = "";
    this.kind = "";
    this.age = 0;
    this.weight = 0;
    this.color = "";

}
*/
// 45번문제

function Cat(){
    //49번문제 Cat클래스에 crying()이라는 함수 넣어서 울음소리 출력하게하기.
    this.crying=function(){
        document.write("야옹")
    }
}
new Cat();
var Kitty = new Cat();
Kitty.name = "야옹이";
document.write(Kitty.name + "<br>");

// 46번 문제


Kitty.kind = "먼치킨";
document.write(Kitty.kind + "<br>");
Kitty.age = 3;
document.write(Kitty.age + "<br>");
Kitty.weight = 5;
document.write(Kitty.weight + "<br>");
Kitty.color = "white";
document.write(Kitty.color + "<br>");
document.write("<hr>")

// 47번 문제

new Cat();
var yaongi = new Cat();
yaongi.name = "고냥이"
yaongi.kind = "페르시안"
yaongi.age = 4;
yaongi.weight = 7;
yaongi.color = "black";
document.write(yaongi.name + "<br>")
document.write(yaongi.kind + "<br>")
document.write(yaongi.age + "<br>")
document.write(yaongi.weight + "<br>")
document.write(yaongi.color + "<br>")
document.write("<hr>")
if(Kitty.age > yaongi.age){
    document.write("형님고양이:"+Kitty.name)
}
else if(Kitty.age == yaongi.age){
    document.write("둘은 친구임")
}
else{
    document.write("형님고양이:"+yaongi.name+"<hr>")
}
// 48번 문제

Kitty.crying();
yaongi.crying();
// 49번 문제

