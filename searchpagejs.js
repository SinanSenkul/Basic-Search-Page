function googleOpen(){
        tB=document.getElementById("googleBox").value;
        address="https://www.google.com/search?q="+tB+"";
        if(tB != "" && document.getElementById("button1").value==="search"){
            window.open(address);
            document.getElementById("googleBox").value="";
            document.getElementById("button1").value="🔎";
            return;
        }
        if(tB===""){
            document.getElementById("button1").value="🔎";
        }
}

function youtubeOpen(){
    tB=document.getElementById("youtubeBox").value;
    address="https://youtube.com/results?search_query="+tB+"";
    if(tB != "" && document.getElementById("button2").value==="search"){
        window.open(address);
        document.getElementById("youtubeBox").value="";
        document.getElementById("button2").value="🔎";
        return;
    }
    if(tB===""){
        document.getElementById("button2").value="🔎";
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
        return;
       }
       if(document.getElementById("wikiRadio").checked === true){
        window.open("https://www.wikipedia.org");
        document.getElementById("wikiRadio").checked=false;
       }
}

var a=30;
var r=0;
var g=0;
var b=0;
var rSlide=true;

function colorChanger(){
        if(r===255 && g===255 && b===255){
            r=r-5;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(r>0 && r<255 && g===255 && b===255){
            r=r-5;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if (r===0 && g===255 && b===255){
            g=g-5;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(g>0 && g<255 && r===0 && b===255){
            g=g-5;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(r===0 && g===0 && b===255){
            b=b-5;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(b>0 && b<255 && r===0 && g===0){
            b=b-5;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if (r===0 && g===0 && b===0){
            r=r+5;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(r>g && r<255 && g===b){
            r=r+5;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(r===255 && g>=b && g<255){
            g=g+5;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
            return;
        }
        if(r===255 && g===255 && b<255){
            b=b+5;
            document.getElementById("header").style.color="rgb("+r+","+g+","+b+")";
            timer();
        }
}

function timer(){
        setTimeout(colorChanger,25);
        setTimeout(headerSlider,25);
}

/*
function buttonTextChanger(box, button){
    if(document.getElementById(""+box+"").value!=""){
        if(document.getElementById(""+button+"").value==="🔎"){
            document.getElementById(""+button+"").value="s";
            timer2();
            return;
        }
        if(document.getElementById(""+button+"").value==="s"){
            document.getElementById(""+button+"").value="se";
            timer2();
            return;
        }
        if(document.getElementById(""+button+"").value==="se"){
            document.getElementById(""+button+"").value="sea";
            timer2();
            return;
        }
        if(document.getElementById(""+button+"").value==="sea"){
            document.getElementById(""+button+"").value="sear";
            timer2();
            return;
        }
        if(document.getElementById(""+button+"").value==="sear"){
            document.getElementById(""+button+"").value="searc";
            timer2();
            return;
        }
        if(document.getElementById(""+button+"").value==="searc"){
            document.getElementById(""+button+"").value="search";
            timer2();
        }
    }
    return;
}
*/

function buttonTextChanger(num){
    if(num===1){
        box="googleBox";
        button="button1";
    }
    if(num===2){
        box="youtubeBox";
        button="button2";
    }
    if(document.getElementById(box).value!=""){
        if(document.getElementById(button).value==="🔎"){
            document.getElementById(button).value="s";
            timer2();
            return;
        }
        if(document.getElementById(button).value==="s"){
            document.getElementById(button).value="se";
            timer2();
            return;
        }
        if(document.getElementById(button).value==="se"){
            document.getElementById(button).value="sea";
            timer2();
            return;
        }
        if(document.getElementById(button).value==="sea"){
            document.getElementById(button).value="sear";
            timer2();
            return;
        }
        if(document.getElementById(button).value==="sear"){
            document.getElementById(button).value="searc";
            timer2();
            return;
        }
        if(document.getElementById(button).value==="searc"){
            document.getElementById(button).value="search";
            timer2();
        }
    }
    return;
}

function timer2(){
    setTimeout(buttonTextChanger,50);
}
/* This code below makes the header slide rightwards then leftwards continuously.
function headerSlider(){
    if(a===30 && rSlide===true){
        a=a+5;
        rSlide=true;
        document.getElementById("header").style.left= ""+a+"px";
        return;
    }
    if(a>30 && a<900 && rSlide===true){
        a=a+5;
        rSlide=true;
        document.getElementById("header").style.left= ""+a+"px";
        return;
    }
    if(a===900){
        a=a-5;
        rSlide=false;
        document.getElementById("header").style.left= ""+a+"px";
        return;
    }
    if(a>30 && rSlide===false){
        a=a-5;
        rSlide=false;
        document.getElementById("header").style.left= ""+a+"px";
        return;
    }
    if(a===30 && rSlide===false){
        a=a+5;
        rSlide=true;
        document.getElementById("header").style.left= ""+a+"px";
    }
}
*/
