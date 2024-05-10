let testText="The quick brown for jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    //set the test text
    document.getElementById("inputText").value=testText;
//Reset results and timer
document.getElementById("output").innerHTML="";
startTime=new Date().getTime();

//change button text and functionality
var button= document.getElementById("btn");
button.innerHTML="End Test";
button.onclick=endTest;
}

function endTest() {
    endTime=new Date().getTime();

    //Disabel user  input
    document.getElementById("userInput").readOnly=true;

    //Calculate time elapsed and words per minute(WPM)
    var timeElapsed=(endTime-startTime)/1000;//in seconds
    var userTypedText=document.getElementById("userInput").value;

    //split the text using regex to count words correctly
    var typedWords=userTypedText.split(/\s+/).filter(function (word){
        return word !=="";
    }).length;

    var wpm=0; //Default Value

    if(timeElapsed !==0 && !isNaN(typeWords)){
        wpm=Math.round((typeWords/timeElapsed)*60);

    }
    //Display the results
    var outputDiv=document.getElementById("output");
    outputDiv.innerHTML="<h2>Typing Test Results:</h2>"+
    "<p>Words Typed: "+ typedWords+"</p>"+"<p>Time Elapsed:"+ timeElapsed.toFixed(2)+"second</p>"+
    "<p>Words Per Minute(WPM): "+wpm+"</p>";

    //Reset the button
    var button=document.getElementById("btn");
    button.innerHTML="Start Test";
    button.onclick= startTest;
}