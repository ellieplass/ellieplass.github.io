//here is where create variables to represent the buttons in the html
const add_btn = document.getElementById("add");

const sub_btn = document.getElementById("sub");

const mult_btn = document.getElementById("mult");

const div_btn = document.getElementById("divi");

const output = document.getElementById("output");


//this is where I call the function anyClick on the event listener "click" for the add, subtract, multiply, and divide buttons
add_btn.addEventListener("click",anyClick);
sub_btn.addEventListener("click",anyClick);
mult_btn.addEventListener("click", anyClick);
div_btn.addEventListener("click", anyClick);

//this is the function that occurs 
function anyClick(e){
    let btn = e.target.id;
        console.log(btn);
    //here are the two inputted numbers for the calculator
      const n1 = document.getElementById("num1").value;
        const n2 = document.getElementById("num2").value;
    //this is the function to add the two numbers, and makes the output the sum
    if(btn == "add"){
        var sum1 = Number(n1) + Number(n2);
        console.log(sum1);
        output.innerHTML = sum1; 
          //this is the function to subtract the two numbers, and makes the output the result
    } else if (btn == "sub"){
          var sum2 = (n1) - (n2);
        output.innerHTML = sum2; 
  //this is the function to multiply the two numbers, and makes the output the product
    }else if (btn == "mult"){
         var sum3 = (n1) * (n2);
        output.innerHTML = sum3;
        
  //this is the function to divide the two numbers, and makes the output the remainder
    }else if (btn == "divi"){
         var sum4 = (n1) / (n2);
        output.innerHTML = sum4;
    }
}