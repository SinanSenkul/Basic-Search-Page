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
        document.getElementById("nightButton").value="💡";
        document.getElementById("nightButton").title="Day Mode";
        return;
    }
    if(document.getElementById("nightButton").value==="💡"){
        document.getElementById("body").style="background-color: white";
        document.getElementById("sec1").style="background-color: lightgrey";
        document.getElementById("sec2").style="background-color: lightgrey";
        document.getElementById("sec3").style="background-color: lightgrey";
        document.getElementById("nightButton").value="🌙";
        document.getElementById("nightButton").title="Night Mode";
    }
}
