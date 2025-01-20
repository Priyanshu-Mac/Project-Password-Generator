const passwordBox = document.querySelector("#password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%&*?<>|~";

const passBtn = document.querySelector("#pass-btn");
const copyBtn = document.querySelector(".fa-copy")

const allChars = upperCase + lowerCase + number + symbol;

const creatPass = () => {
    let password = "";
    // Ensure at least one character from each character set
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password = password + number[Math.floor(Math.random() * number.length)];
    password = password + symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the rest of the password with random characters from allChars
    while(length > password.length){
        password = password + allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

const copyPass = () => {
    passwordBox.select();
    document.execCommand("copy");
}

passBtn.addEventListener("click", creatPass);
copyBtn.addEventListener("click", copyPass);

