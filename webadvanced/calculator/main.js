var n1;
var n2;
var output = document.getElementById("output");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");
//I'm having so much trouble with this! I honestly am very confused as to why it's not working. I just followed what we did in class, but somehow it got messed up.

function addMeToo() {
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    var s1 = Number(n1) + Number(n2);
    console.log(s1);
    output.innerHTML = s1;
}

function subtractMe() {
    n3 = document.getElementById("num3").value;
    n4 = document.getElementById("num4").value;
    var s2 = Number(n3) - Number(n4);
    console.log(s2);
    output2.innerHTML = s2;
    
}

function divideMe() {
    n5 = document.getElementById("num5").value;
    n6 = document.getElementById("num6").value;
    var s3 = Number(n5) / Number(n6);
    console.log(s3);
    output3.innerHTML = s3;
    
}

function multiplyMe(){   
    n7 = document.getElementById("num7").value;
    n8 = document.getElementById("num8").value;
    var s4 = Number(n7) * Number(n8);
    console.log(s4);
    output4.innerHTML = s4;
}
 