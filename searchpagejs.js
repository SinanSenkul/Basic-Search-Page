function googleOpen(){
        tB=document.getElementById("googleBox").value;
        address="https://www.google.com/search?q="+tB+"";
        if(tB != ""){
            window.open(address);
            document.getElementById("googleBox").value="";
            return;
        }
}

function youtubeOpen(){
    tB=document.getElementById("youtubeBox").value;
    address="https://youtube.com/results?search_query="+tB+"";
    if(tB != ""){
        window.open(address);
        document.getElementById("youtubeBox").value="";
        return;
    }
}

function radioCheckOpen(){
       if(document.getElementById("googleRadio").checked === true){
        window.open("https://www.google.com");
        document.getElementById("googleRadio").checked=false;
        return;
       }
       if(document.getElementById("youtubeRadio").checked === true){
        window.open("https://www.youtube.com");
        document.getElementById("youtubeRadio").checked=false;
        document.getElementById("button3").value="➥";
        return;
       }
       if(document.getElementById("wikiRadio").checked === true){
        window.open("https://www.wikipedia.org");
        document.getElementById("wikiRadio").checked=false;
        document.getElementById("button3").value="➥";
       }
}

var r=0;
var g=0;
var b=0;
var rSlide=true;

function colorChanger(){
        if(r===255 && g===255 && b===255){
            r=r-1;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(r>0 && r<255 && g===255 && b===255){
            r=r-1;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if (r===0 && g===255 && b===255){
            g=g-1;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(g>0 && g<255 && r===0 && b===255){
            g=g-1;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(r===0 && g===0 && b===255){
            b=b-1;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(b>0 && b<255 && r===0 && g===0){
            b=b-1;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if (r===0 && g===0 && b===0){
            r=r+1;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(r>g && r<255 && g===b){
            r=r+1;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(r===255 && g>=b && g<255){
            g=g+1;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(r===255 && g===255 && b<255){
            b=b+1;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
        }
}

function timer(){
        setTimeout(colorChanger,25);
}

function pageColor(){
    if(document.getElementById("nightButton").value==="🌙"){
        document.getElementById("body").style="background-color: #2d2d2d";
        document.getElementById("sec1").style="background-color: #264653";
        document.getElementById("sec2").style="background-color: #264653";
        document.getElementById("sec3").style="background-color: #264653";
        document.getElementById("p1").style="color: white";
        document.getElementById("p2").style="color: white";
        document.getElementById("p3").style="color: white";
        document.getElementById("l1").style="color: white";
        document.getElementById("l2").style="color: white";
        document.getElementById("l3").style="color: white";
        document.getElementById("button3").style="color: white";
        document.getElementById("nightButton").value="💡";
        return;
    }
    if(document.getElementById("nightButton").value==="💡"){
        document.getElementById("body").style="background-color: white";
        document.getElementById("sec1").style="background-color: lightgrey";
        document.getElementById("sec2").style="background-color: lightgrey";
        document.getElementById("sec3").style="background-color: lightgrey";
        document.getElementById("p1").style="color: black";
        document.getElementById("p2").style="color: black";
        document.getElementById("p3").style="color: black";
        document.getElementById("l1").style="color: black";
        document.getElementById("l2").style="color: black";
        document.getElementById("l3").style="color: black";
        document.getElementById("button3").style="color: black";
        document.getElementById("nightButton").value="🌙";
    }
}
