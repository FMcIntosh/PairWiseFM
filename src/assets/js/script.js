$("ul").on("click", "span", function(e){
  // stop events applied to li occurring
  e.stopPropagation();
  $(this).parent().fadeOut(300, function(){
  $(this).remove();
  });
  
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var names = [];

function adjustBorderRadius() {
    // see if there is a last element
     $("input").css( { borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" } );
       $("input").attr("id", "");
    if($("#last")) {
       $("#last").css( { borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" } );
       $("#last").attr("id", "");
    }
}
var borderRadius = "5px" ;
// Adding a person
$("form").on("submit", function(e){
  // stop page refresh
  e.preventDefault();
  // stop events applied to li occurring
  e.stopPropagation();
// adjust the border radius
    adjustBorderRadius();
  //get input
   var values = $("input").val();
    names.push(values);
   // create to-do and add to list, then clear input field
   $("ul").append("<li id = 'last'>"+ values +  "<span id= 'right'><i class='fa fa-times' aria-hidden='true'></i></span></li>");
   $("input").val("");
  $("#last").css( { borderBottomLeftRadius: borderRadius, borderBottomRightRadius: borderRadius } );
    //Print all the names in names array
    names.forEach(function(s) {
    console.log(s);
});
});

//$("$makePairs").on("click", function(e) {
//    
//})

function makePairs(objs) {
    var pairs = [];
    while(objs.size != 0) {
        var pair = [];
        var rand1 = getRandomInt(0, objs.length);
        pair.push(objs.pop(rand1));
        var rand2 = getRandomInt(0, objs.length);
        pair.push(objs.pop(rand2));
        pairs.push(pair);
    }
}
    
