$("ul").on("click", "span", function(e){

  //add last class to (what will be) the last li
   var lis = document.querySelectorAll("li");
    
    if($("ul li").length === 1) {
      //if removing the last element     
        $("input").addClass("last");
    } else {
        lis[lis.length - 2].classList.add("last");
    }
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
    
    // If we are adding elements
        //remove bottom curves from input elemnt
        $("input").removeClass("last");
        // remove last class from all li's
        $("li").removeClass("last");
        // add last class to last li
        $("li").last().addClass("last");
}

var borderRadius = "5px" ;
// Adding a person
$("form").on("submit", function(e){
  // stop page refresh
  e.preventDefault();
  // stop events applied to li occurring
  e.stopPropagation();
// adjust the border radius
   
  //get input
   var values = $("input").val();
    names.push(values);
   // create to-do and add to list, then clear input field
   $("ul").append("<li class = 'last'>"+ values +  "<span id= 'right'><i class='fa fa-times' aria-hidden='true'></i></span></li>");
   $("input").val("");
//  $("#last").css( { borderBottomLeftRadius: borderRadius, borderBottomRightRadius: borderRadius } );
    //Print all the names in names array
     adjustBorderRadius("add");
    names.forEach(function(s) {
    console.log(s);
    
});
});

//$("$makePairs").on("click", function(e) {
//    
//})

function pairsButton() {
    //pair people up
  var pairedPeople =  makePairs(names);
    // get height
   var height =  jQuery(window).height();
    // get no pairs
    var noPairs = pairedPeople.pairs.length;
    //divide height by number of pairs
    var divHeight = height / noPairs;
// clear body
    var body = $("body");
   body.html("");
    for(var i = 0; i < noPairs; i++) {
        var div = 
    }
    }

var oddOneOut = -1;

function makePairs(objs) {
    var peoplePaired = {
        pairs: [],
        oddOneOut: -1
    }
    var pairs = [];
    //While still two people
    while(objs.size / 2 != 0) {
        var pair = [];
        // do this twice
        [1,2].forEach(function(i) {
            // get random numbers
            var index = getRandomInt(0, objs.length);
            // push selected person into pair
            pair.push(objs[index]);
            // remove person from objs
           objs.splice(index, 1)
          
        })
        peoplePaired.pairs.push(pair);
    }
    if(objs.size ===1 ) {
       peoplePaired.oddOneOut = ojs.pop();
    }
    returnp peoplePaired;
}

    
