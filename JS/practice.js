
/* var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line

var checkFirstName = false, checkProperty = false;

  for(var i =0; i< contacts.length; i++)
{
 if(contacts[i].firstName == firstName)
{
    checkFirstName = true;
    index = i;
}
  
if(contacts[i].hasOwnProperty([prop]))
{
    checkProperty = true;
  
}
if(checkFirstName == true && checkProperty == true)
{
    break;
}

  
 
}

if(checkFirstName == true && checkProperty == true)
{

    return contacts[index][prop];
}
else if(checkFirstName == false)
{
    return("No such contact");

}
else{

    return("No such property");
}
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "address"); */


/* var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  if(prop != "tracks" && value != "")
  {

collection[id][prop] = value;
console.log(collection[id][prop]);
      
  }
  else if(prop == "tracks" && value != "" && collection[id].hasOwnProperty([prop]))
  {

      collection[id][prop].push(value);
      console.log(collection[id][prop]);
  }
  else if(!(collection[id].hasOwnProperty([prop])))
  {

collection[id][prop] = [];
collection[id][prop].push(value);
console.log(collection[id][prop]);
  }

  
  //console.log(collection[id][prop][0]);
  
  //return collection;
}
updateRecords(2548, "tracks", "") */

/*var str  = "Visit#@;/ My/;'schools";

var n = str.replace(/[^a-zA-Z0-9]/g, '');
console.log(n);*/
var myquotes= [
{
    quote: "The only difference between me and a madman is that I'm not mad.",
    author: " Salvador Dali"
},
{
    quote: "Do, or do not. There is no 'try'.",
    author: "Star Wars: Empire Strikes Back"
},
{
    quote: "Forget it, Jake, it's Chinatown.",
    author: "Chinatown"
},
{
    quote: "Tell 'em to go out there with all they got and win just one for the Gipper",
    author: "Knute Rockne All American"
},
{
    quote: "May the Force be with you.",
    author: "Star Wars"

},
{
    quote: "Louis, I think this is the beginning of a beautiful friendship.",
    author: "Casablanca"
}

];
var quotetoSet = "";
var randomQuoteNum;
changeColor();
window.onload = function(){
    document.getElementById("newQuote").onclick = changeColor;
    document.getElementById("tweet").onclick = tweetIt;
}
function returnColor()
{ 
    var myColor =["Blue","green","darkcyan","brown","red","purple"];
    var randomNum = Math.floor((Math.random() * myColor.length));
    randomQuoteNum = randomNum;
    return myColor[randomNum];
}
function changeColor()
{
var randomColor = returnColor();
document.getElementById("newQuote").style.backgroundColor = randomColor;
document.getElementById("authorName").style.color = randomColor;
document.getElementById("quoteText").style.color = randomColor;
document.getElementById("tweet").style.backgroundColor = randomColor;
document.body.style.backgroundColor = randomColor;
changeQuote();
changeAuthor();
}

function returnQuote(){

   var randomNum = Math.floor((Math.random()* myquotes.length));
   quotetoSet = myquotes[randomNum].quote;
   return myquotes[randomNum].quote;
}
function changeQuote()
{
       document.getElementById("quoteText").innerHTML =returnQuote() ;

}
function tweetIt()
{
    var myloc = quotetoSet;
    var myurl = "https://twitter.com/intent/tweet?text="+myloc+"&hashtags=quotes";
    document.getElementById("fortweet").setAttribute("href",myurl);
}

function changeAuthor()
{
 
      document.getElementById("authorName").innerHTML = "- "+ myquotes[randomQuoteNum].author;
}