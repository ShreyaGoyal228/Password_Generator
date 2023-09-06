let input_slider=document.querySelector('.range');
let sliderValue=document.querySelector('.sliderValue');
let choices=document.querySelectorAll('.option input');
let text=document.querySelector('.text');
let btn=document.getElementById('btn');

let arr=Array.from(choices);
const characters= {
     lowercase:"abcdefghijklmnopqrstuvwxyz",
     uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
     symbols:"!@#$%^&*()/><+-",
     numbers:"0123456789"
}
btn.addEventListener('click',()=>{
    text.value=generatePassword();
});
function generatePassword(){
    let genPass="";
    let output="";
    let excludeDuplicate=false;
    const len = input_slider.value;
    arr.forEach( option =>{
      if(option.checked)
      { 
        if(option.id!='duplicates'&&option.id!='spaces')
        {genPass+=characters[option.id];}
        else if(option.id==='spaces')
        {
            genPass+=`                    ${genPass}                       `;
        }
        else{
            excludeDuplicate=true;
        }
}
});
for(let i=0;i<len;i++)
{    outputChar=genPass[Math.floor(Math.random()*genPass.length)];
    if(excludeDuplicate)
    {  
        if(!output.includes(outputChar)||outputChar==" ")
        {
            output+=outputChar;
        }
        else{
            i--;
        }
}
else{
    output+=outputChar;
}
}
return output;
}


//Shows the value when the code load in the start
sliderValue.innerHTML=input_slider.value;

//updates the values as we move the slider
input_slider.addEventListener('input',()=>{
    sliderValue.innerHTML=input_slider.value;
});