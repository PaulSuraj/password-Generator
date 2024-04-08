let inputSlider =document.getElementById("inputSlider");
let sliderValue= document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let LowerCase =document.getElementById("LowerCase");
let UpperCase =document.getElementById("UpperCase");
let Numbers =document.getElementById("Numbers");
let Symbol =document.getElementById("Symbol");
let genBtn=document.getElementById("genBtn");
let icon=document.getElementById("icon");


//showing for js slider value
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent=inputSlider.value;

});
  genBtn.addEventListener("click" ,()=>{
passBox.value=generatePassword();
});

// for generate uppercase value
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num="0123456789";
let syl="@#$&*?/=<>~!"



//function to generate Password
function generatePassword(){
let genPassword =" ";

// genPassword= Math.floor(Math.random()*upperChars.length );


let allChars="";
allChars += LowerCase.checked ? lowerChars :"";
allChars += UpperCase.checked ? upperChars :"";
allChars += Numbers  .checked ? num        :"";
allChars += Symbol   .checked ? syl        :"";

if(allChars == "" || allChars.length==0){
    return genPassword;
}

// let i=1;
// while(i<=inputSlider.value)
for(i=1;i<=inputSlider.value;i++)
{

genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length ));
// i++;
}


return genPassword;
}
icon.addEventListener("click", ()=>{
    if(passBox.value!="" || passBox.value.length>=1){

        navigator.clipboard.writeText(passBox.value);
        icon.innerText="✔️";
        icon.title ="Password copied";

        setTimeout(() => {
            icon.innerHTML="";
            icon.title ="";
        }, 3000);
    }
});