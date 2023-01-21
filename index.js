const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.querySelector('button')

const passwordOne = document.querySelector('#password-1')
const passwordTwo = document.querySelector('#password-2')

const length = document.querySelector('#length')

function generatePassword(){
    passwordOne.value=""
    passwordTwo.value=""

    for(let i=0; i<length.value;i++){
        passwordOne.value += characters[Math.floor(Math.random()*characters.length)]
    }

    
    for(let i=0; i<length.value;i++){
        passwordTwo.value += characters[Math.floor(Math.random()*characters.length)]
    }

}

generateBtn.addEventListener("click",generatePassword)