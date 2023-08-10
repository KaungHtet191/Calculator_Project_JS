let btn=document.getElementById("btnCalculate")
let result=document.getElementById("result")
let numOneError=document.getElementById("numOneError")
let numTwoError=document.getElementById("numTwoError")
let operatorError=document.getElementById("operatorError")
let finalResult;
let numOnesStatus,numTwosStatus,operatorStatus=false; // Data tae phyae htar lo
numOneError.style.display="none";
numTwoError.style.display="none";
operatorError.style.display="none";

btn.addEventListener("click",function(){
    let num1=document.getElementById("firstNumber")
    let num2=document.getElementById("secNumber")
    let operator=document.getElementById("operation")

    checkValidation(num1,num2,operator);
    if(numOnesStatus==false && numTwosStatus==false && operatorStatus==false){
        num1=parseInt(num1.value)
        num2=parseInt(num2.value)
        switch(operator.value){
            case "add":
                finalResult=num1 + num2;
                break;
            case "minus":
                finalResult=num1-num2;
                 break;
            case "multiply":
                finalResult=num1*num2;
                break;
            case "division":
                finalResult=num1/num2;
                break;
            case "default":
                console.log("Operation Failed");
                break;
        }
       result.innerHTML=finalResult; 
    }
})

function checkValidation(num1,num2,operator){
    if(num1.value=="" || num1.value==null || num1.value==undefined){
        numOneError.style.display="block";
        numOnesStatus=true;
    }else{
        numOneError.style.display="none";
        numOnesStatus=false;
    }
    if(num2.value=="" || num2.value==null || num2.value==undefined){
        numTwoError.style.display="block";
        numTwosStatus=true;
    }else{
        numTwoError.style.display="none";
        numTwosStatus=false;
    }
    if(operator.value== "empty"){
        operatorError.style.display="block";
        operatorStatus=true;
    }else{
        operatorError.style.display="none";
        operatorStatus=false;
    }
}
