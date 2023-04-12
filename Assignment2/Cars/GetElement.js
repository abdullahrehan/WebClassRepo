
function check(){
   var i;
    var msg="This field is required";
    var x =document.getElementById("ip").value;
    var n =document.getElementsByTagName("input");


    for(i=0;i<5;i++){
if(n[i].value==""){


var z=document.getElementsByClassName("text");
z[i].innerHTML=msg;
}
    }
}




