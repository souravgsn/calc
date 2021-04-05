var btn = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
var result = 0;
var temp =0.0;
function Sum(val1, val2)
{
    return val1 + val2;
}
function Sub(val1, val2)
{
    return val1 - val2;
}
function prod(val1, val2)
{
    return val1 * val2;
}
function divide(val1, val2)
{
    return val1 / val2;
}
for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value == "+")
        {   
            operator = '+';
            operand1 = parseFloat(display.textContent);
            
            display.textContent = null;
        }
        else if(value == "-")
        {   
            operator = '-';
            operand1 = parseFloat(display.textContent);
            
            display.textContent = null;
        }
        else if(value == "*")
        {   
            operator = '*';
            operand1 = parseFloat(display.textContent);
            
            display.textContent = null;
        }
        else if(value == "/")
        {   
            operator = '/';
            operand1 = parseFloat(display.textContent);
            
            display.textContent = null;
        }
        else if(value == "="){
            operand2 = parseFloat(display.textContent);
            display.textContent =null;
            if(operator=="+"){
                display.innerText = eval(Sum(operand1,operand2));
            }
            else if(operator=="-"){
                display.innerText = eval(Sub(operand1,operand2));
            }
            else if(operator=="*"){
                display.innerText = eval(prod(operand1,operand2));
            }
            else if(operator=="/"){
                display.innerText = eval(divide(operand1,operand2));
            }
            

        }
        else if(value=="+/-"){
            temp = parseFloat(display.textContent);
            temp= -temp;
            display.textContent =temp;
            
        }
        else if(value == "AC"){

        display.textContent =null;
        }
        else{
            display.innerText += value;
        }
        
    });
}