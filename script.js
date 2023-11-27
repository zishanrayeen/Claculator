

//Dark Mode Code Start
function dark(){
    var dark = document.getElementById("section_box");
    dark.style.backgroundColor="white";



    //light mode code
    var light = document.getElementById("dark_btn");
    light.style.float="right";
    light.style.backgroundImage="url(light.png)";
    light.style.backgroundRepeat="no-repeat";
    light.style.backgroundSize="100% 100%";
    light.style.backgroundPosition="center";
    light.style.backgroundColor="white";
    light.style.transition="0.6s";
    //end light mode
}



//Light Mode Code Start
function light(){
    var dark = document.getElementById("section_box");
    dark.style.backgroundColor="rgb(1, 19, 28)";



    //light mode code
    var light = document.getElementById("dark_btn");
    light.style.float="left";
    light.style.backgroundImage="url(night-mode.png)";
    light.style.backgroundRepeat="no-repeat";
    light.style.backgroundSize="90% 90%";
    light.style.backgroundPosition="center";
    light.style.backgroundColor="black";
    //end light mode
}





/* start addtion input code*/
function add_no(){
    var a =Number (document.getElementById("one").value);
    var b =Number (document.getElementById("two").value);
    var c = a+b;


    //addtion code
    var d = document.getElementById("no_text");
    d.innerHTML=c;
    
    return false;
}
/* end addtion input code*/





/*start subtraction code*/
function sub_no(){
    var a = document.getElementById("one").value;
    var b = document.getElementById("two").value;
    var c = a-b;

    //subtraction code
    var d = document.getElementById("no_text");
    d.innerHTML=c;

    return false;
}
/*end subtraction code*/




/*start  multiplication input code*/
function mul_no(){
    var a = document.getElementById("one").value;
    var b = document.getElementById("two").value;
    var c = a*b;

    //multiply code
    var d = document.getElementById("no_text");
    d.innerHTML=c;

    return false;
}
/*end  multiplication input code*/




/*start division input code*/
function div_no(){
    var a = document.getElementById("one").value;
    var b = document.getElementById("two").value;
    var c = a/b;

    //division code
    var d = document.getElementById("no_text");
    d.innerHTML=c;

    return false;
}
/*end division input code*/




/*start remainder input code*/
function rem_no(){
    var a = document.getElementById("one").value;
    var b = document.getElementById("two").value;
    var c = a%b;

    //remainder code
    var d = document.getElementById("no_text");
    d.innerHTML=c;

    return false;
}
/*start remainder input code*/



