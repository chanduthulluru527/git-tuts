const OTPinput = document.querySelectorAll("input");
const button = document.querySelector("button");

window.addEventListener("load",()=>OTPinput[0].focus());

OTPinput.forEach((input) => {
    input.addEventListener("input",() =>{
        const currentinput = input;
        const nextInput=input.nextElementSibling;

        if(currentinput.value.length >1 && currentinput.value.length==2){
            currentinput.value="";
        }
        if(nextInput !==null && nextInput.hasAttribute("disabled") && currentinput.value!==""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }
        if(!OTPinput[3].disabled && OTPinput[3].value !==""){
            button.classList.add("active");

        }
        else{
            button.classList.remove("active");
        }

    });
    input.addEventListener("keyup",(e)=>{
        if(e.key ==="Backspace"){
            if(input.previousElementSibling!==null){
                e.targget.value ="";
                e.setAttribute("disabled",true);
                input.previousElementSibling.focus();
            }
        }
    })
});