let inputEl = document.getElementById("password-length")
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passwordCharacters = []
let password1 = ""
let password2 = ""
let passwords = []
function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    let randomCharacter = characters[randomIndex]
    passwordCharacters.push(randomCharacter)
}
function generatePasswords() {
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < inputEl.value; i++) {
            getRandomCharacter()
        }
        passwords.push(passwordCharacters)
        passwordCharacters = []
    }
    for (let k = 0; k < passwords[0].length; k++) {
        //console.log(passwords[0][k])
        password1 += passwords[0][k]
    }
    password1El.textContent = password1
    password1 = ""
    for (let k = 0; k < passwords[1].length; k++) {
        //console.log(passwords[1][k])
        password2 += passwords[1][k]
    }
    password2El.textContent = password2
    password2 = ""

    passwords = []
}



