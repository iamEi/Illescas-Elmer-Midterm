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

function appearance(){
    var args = []; 
    // Expected list: [content_id,header_id,midterm, yt,appearance,resources,hideportion]
    for (let i = 0; i < arguments.length; i++){
        args[i] = document.getElementById(arguments[i]);
    }

    if(args[0].style.borderRadius != "100%"){
        args[0].style.borderRadius  = "100%";
        args[0].style.backgroundColor = "rgba(175, 171, 170, 0.8)";
        args[0].style.color = "rgba(27, 30, 34, 1)";

        args[1].style.backgroundColor = "rgba(27, 30, 34, 1)";
    } else {
        args[0].style.borderRadius  = "30px";
        args[0].style.backgroundColor = "rgba(83, 83, 81,0.5)";
        args[0].style.color = "#f2f2f2de";

        args[1].style.backgroundColor = "#189AB4";
}
}

function myfunction(){
    document.write("Test");
}