function show(Div) {
    var x = document.getElementById(Div);
    if(x.style.display=="none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function reveal(my_element){
    var x = document.getElementById(my_element);
    if(x.style.transform != "scale(0)"){
        x.style.transform  = "scale(0)";
    } else {
        x.style.transform  = "scale(1)";
    }
    console.log("test");
}

function hidePortion(my_element,my_class,mypar){
    var x = document.getElementById(my_element);
    var y = document.getElementById(mypar);
    var btn = document.getElementsByClassName(my_class)[0];
    if(x.style.flexBasis!="30%"){
        x.style.flexBasis = "30%";
        btn.style.display = "block"
        y.style.display = "block"

    } else {
        x.style.flexBasis = "0%";
        btn.style.display = "none"
        y.style.display = "none"
    }
}

function changeShape(my_div){
    var x = document.getElementById(my_div);
    if(x.style.borderRadius != "100%"){
        x.style.borderRadius  = "100%";
    } else {
        x.style.borderRadius  = "30px";
}
}

function myfunction(){
    document.write("Test");
}