function display()
{
    var text= document.getElementById("name").value;
    document.getElementById("display-head").innerHTML= text;

    if(text=="anu"){
        window.alert("Hooy! this is my owner");
    }
}
// calculator
function clicks(val) 
{
    document.getElementById("screen").value= document.getElementById("screen").value+val;
}

function clearit() 
{
    document.getElementById("screen").value="";
}

function equal() 
{
    var nums=document.getElementById("screen").value;
    var result= eval(nums);
    document.getElementById("screen").value= result;
}