//local variable
function abc(){
    let x=10;
    x=20;
    document.writeln(x);
}
abc();
function bac(){
    var a=10;
    var a=20;
    document.writeln(a);
}
bac();

// global variable
let e=10;
function a(){
    document.writeln(e);
}
function b(){
    document.writeln(e);
}
a();
b();

var u=10;
var u=20;
function c(){
    document.writeln(u);
}
function d(){
    document.writeln(u);
}
c();
d();



