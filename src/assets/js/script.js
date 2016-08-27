function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var names = [];

var pading = "      ";
// Adding a person
$("form").on("submit", function(e){
  // stop page refresh
  e.preventDefault();
  // stop events applied to li occurring
  e.stopPropagation();
  //get input
   var values = $("input").val();
    names.push(values);
   // create to-do and add to list, then clear input field
   $("ul").append("<li>"+ values +  "<span id= 'right'><i class='fa fa-times' aria-hidden='true'></i></span></li>");
   $("input").val("");
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
    
