//here are the number of times interest would compound per year
var c_1 = ["365", "36", "24", "12","1"];

//variables
var btn1 = document.getElementById("go");
var output = document.getElementById("months1");
var output1 = document.getElementById("tci1");
const ci_sel = document.getElementById("compounded");

//this is the result buton
btn1.addEventListener("click", interestCalc);

//here is where I made the pull down menu for the interest compounding 
document.addEventListener('DOMContentLoaded', function(e) {
   
    for (let i=0;i<c_1.length;i++){
        let opt = document.createElement("option");
        
        //i'm pretty sure the reason it isn't working is because of the variables
        //i'm not sure how to do those in JQ
        opt.value = c_1[i];
        opt.text = c_1[i];
        
        ci_sel.add(opt);
        
    }
    
    
});


//here is the compounding interest formula
function interestCalc(e) {
    var n1 = document.getElementById("loan1").value;
    var n2 = document.getElementById("interest1").value;
    var n3 = document.getElementById("years1").value;
    
 
    
  let compound = ci_sel.value;
    var comp_int = (n1)*Math.pow((1+(n2)/compound),compound*(n3));
    
    console.log(compound);
    
    //this would equal the monthly payment
    output.innerHTML= (comp_int.toFixed(2)/12);
    //and this would be the total coumounded interest payed 
    output1.innerHTML = (comp_int.toFixed(2) - (n1));
    
}

