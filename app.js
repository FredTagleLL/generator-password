
const charLength=document.getElementById("charlenght");
const charResult=document.getElementById("form__length-result");
const password=document.getElementById("txtResult");
const mayus=document.getElementById("uppercase");
const checkMayus=document.getElementById("uppercase");
const checkMinus=document.getElementById("lowercase");
const checkNumbers=document.getElementById("numbers");
const checkSymbols=document.getElementById("symbols");
const  tamaño=document.querySelector(".form__length-range");

const uppercaseLetters  = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers=["1" ,"2","3","4","5","6","7","8","9","0"];
const specialCharacters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?', '\\', '|', '`', '~'];



    function estilos() {
        tamaño.style.setProperty("--width" , `${(parseInt(charLength.value)-6)*17.5}px`);
        if (charLength.value=="6") {
            tamaño.style.setProperty("--borde" ,"none");
        }else{
            tamaño.style.setProperty("--borde" ,"2px solid #8F52B8");
    
        }
    }

charLength.addEventListener('input', () => {
    charResult.innerHTML=charLength.value;
    estilos();
    

});

function copiar() {
    navigator.clipboard.writeText(password.value);
    
}
function restart() {
    charLength.value="6";
    charResult.innerHTML="12";
    password.value="";
    checkMayus.checked=false;
    checkMinus.checked=true;
    checkNumbers.checked=false;
    checkSymbols.checked=false;
    estilos();
    
}
function optionMayus() {
    let letter;
    const indiceRandom= Math.floor(Math.random()*uppercaseLetters.length);
    return letter=uppercaseLetters[indiceRandom];
}
function optionMinus() {
    let letter;
    const indiceRandom= Math.floor(Math.random()*lowercaseLetters.length);
    return letter=lowercaseLetters[indiceRandom];
}
function optionNumbers() {
    let letter;
    const indiceRandom= Math.floor(Math.random()*numbers.length);
    return letter=numbers[indiceRandom];
}
function optionSpecial() {
    let letter;
    const indiceRandom= Math.floor(Math.random()*specialCharacters.length);
    return letter=specialCharacters[indiceRandom];
}

function generator() {
    password.value=" ".repeat(charLength.value);
    
    do {
        if (checkMayus.checked){
            let indice =Math.floor(Math.random()*password.value.length)
            if (password.value[indice] == " "){
                password.value=password.value.slice(0,indice) + optionMayus() + password.value.slice(indice + 1 );
            }        
        }    
        if (checkMinus.checked){
            let indice =Math.floor(Math.random()*password.value.length)
            if (password.value[indice] == " "){
                password.value=password.value.slice(0,indice) + optionMinus() + password.value.slice(indice + 1 );
            }        
        }  
        if ((checkMayus.checked || checkMinus.checked)  &&checkSymbols.checked){
            let indice =Math.floor(Math.random()*password.value.length)
            if (password.value[indice] == " "){
                password.value=password.value.slice(0,indice) + optionSpecial() + password.value.slice(indice + 1 );
            }        
        }

        if ((checkMayus.checked || checkMinus.checked)  &&checkNumbers.checked){
            let indice =Math.floor(Math.random()*password.value.length)
            if (password.value[indice] == " "){
                password.value=password.value.slice(0,indice) + optionNumbers() + password.value.slice(indice + 1 );
            }        
        }
        if (!checkMayus.checked){
            checkMinus.checked=true;

        }
        
        
        if (!checkMinus.checked && !checkMayus.checked && !checkSymbols.checked && !checkNumbers.checked) {
            break;
        }
    
    } while (password.value.includes(" "));


            
}
