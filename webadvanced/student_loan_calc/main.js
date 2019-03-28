jQuery.noConflict();

(function( $ ) {
   
   $(function(){
       var c_1 = ["365", "36", "24", "12","1"];
       var btn1 = $("#go");
       var output = $("#months1");
       var output1 = $("#tci1");
       const ci_sel = $("#compounded");
       
 for (let i=0;i<c_1.length;i++){
        let opt = document.createElement("option");
        
        opt.value = c_1[i];
        opt.text = c_1[i];
        
        ci_sel.add(opt);
        
    };
        });
    
    
    $("#go").click(function(){
        var n1 = $("#loan1").value;
        var n2 = 
        $("#interest1").value;
        var n3 = $("#years1").value;
        
    let compound = ci_sel.value;
    var comp_int = (n1)*Math.pow((1+(n2)/compound),compound*(n3));
    
    console.log(compound);
    
    output.innerHTML= (comp_int/12);
    output1.innerHTML = (comp_int - (n1));  
        
        
    });
    })(jQuery);
    


//here is the compounding interest formula
//function interestCalc(e) {
//    var n1 = $("loan1").value;
//    var n2 = 
//        $("interest1").value;
//    var n3 = $("years1").value;
//    
// 
//    
//  let compound = ci_sel.value;
//    var comp_int = (n1)*Math.pow((1+(n2)/compound),compound*(n3));
//    
//    console.log(compound);
//    
//    //this would equal the monthly payment
//    output.innerHTML= (comp_int/12);
//    //and this would be the total coumounded interest payed 
//    output1.innerHTML = (comp_int - (n1));
    


