function googleOpen(){
        tB=document.getElementById("googleBox").value;
        address="https://www.google.com/search?q="+tB+"";
        if(tB != ""){
            window.open(address);
            document.getElementById("googleBox").value="";
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