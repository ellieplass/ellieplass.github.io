//holds slides 
var slideshow = [];
//JSON file w images, captions, titles
var datafile = "data/elliepics.json";
var curr, prev, next;

function preload(file) {
    //load json data file
    $.getJSON(file, function(data) { 
            
        $.each(data.elliepics, function( i, obj ) {
            //preload images
            var img = new Image();
            img.src = obj.image;
            console.log(obj.image);
        }); 
    });
}

//preload JSON
 preload(datafile);


//function that loops through the slides 
$(function() { 
    curr=0;
    //here is where i load in the variable "datafile that holds my images
    $.getJSON(datafile, function(data) { 
        //store json data in array called slideshow
        slideshow = data.elliepics;
        //here all of the slides have the title, caption, and image 
        $.each(slideshow, function( i, obj ) {
         $("#ellieslides").append("<li id="+i+"><img  src="+obj.image+"><div class='text'><span class='title'>"+obj.title+"</span><span class='caption'>"+obj.caption+"</span></div></li>");
         
            
           //places current slide on top// 
        $("#ellieslides").find("li:eq("+i+")").css(
             {"z-index":slideshow.length-curr,
             "left":curr*1024+"px"}
         );
        //increases current slide every time looped through
         curr++;
    });
    
        //when the slideshow gets to the last slide
    $("nav button").css({"z-index":slideshow.length});
    //reset current to 0
    curr = 0;
   
    //function to move slides back and forth depending on button pressed
    function changeSlide(d){
        // next image
        if (d==="n"){
            $("#ellieslides").animate({
                left: "-=1024"},1000); 
            curr++;
        //previous image
        } else if (d==="p") {
            $("#ellieslides").animate({
                left: "+=1024"},1000); 
            curr--;  
        // beginning    
        } else {
            $("#ellieslides").animate({left: "0"},500);
            curr=0;
        }
    }
    
    //automatically advance slides 5 seconds
    var auto = window.setInterval(function(){ 
        if (curr===slideshow.length-1){
            //reset if at the end
            changeSlide("b");
        } else {
            changeSlide("n");
        }
    }, 5000);

    $("#prev").click(function(){ 
        clearInterval(auto);
        //check the current index, if it's greater than the first slide, go to the previous slide 
        if (curr>0){   
            //slide in previous image
            changeSlide("p");
        }
    });
    
    $("#next").click(function(){
        clearInterval(auto);
        console.log("current:"+curr);
//if the slide isn't the last slide, do this
        if (curr<slideshow.length-1){
            //slide in next image
            changeSlide("n");
        } else {
            //reset to beginning
            changeSlide("b"); 
        } 
    });
});
});