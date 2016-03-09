function getWeight()
{

    var theForm = document.forms["BMIform"];

    var weight_pre = theForm.elements["weight"];
    var weight = 0;

    if(weight_pre.value!="")
    {
        weight = parseInt(weight_pre.value);
    }
return weight;
}

function getHeight()
{

    var theForm = document.forms["BMIform"];

    var height_pre = theForm.elements["height"];
    var height = 0;

    if(height_pre.value!="")
    {
        height = parseInt(height_pre.value);
    }
return height;
}

function calculateTotal()
{
    var output = (getWeight() / Math.pow(getHeight(), 2)) * 703;
    var total = (Math.round(100*output)/100);

    var divobj = document.getElementById('totalBMI');
    divobj.style.display='block';
    divobj.innerHTML = "Your BMI is "+total;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
