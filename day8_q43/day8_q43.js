function a(x){
    var c = x+1
    return c;
}

// var add = a(100);
// document.write(add)
//q43

var add = a(7);
var add_sec = a(add)
document.write(add_sec)

//또는
// var add = a(a(7));
// document.write(add);