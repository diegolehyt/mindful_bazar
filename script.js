//JS

// Element Var
let generateBtn = document.querySelector("#generate");

// Event listener to generate button by clicking
generateBtn.addEventListener("click", function() {
//Prompt variables
let Psize = prompt('Choose a length of at least 8 characters and no more than 128 characters')


//Libraries
let up = [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
let low = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
let sym = [ "#", "$", "%", "&", "(",")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//Function Variables 
let pass = [];
let Q

//Functions
        
function Rdm(arr){
    if (arr == low){
        return Math.floor(Math.random() * low.length)
    }
    else if (arr == up) {
      return Math.floor(Math.random() * up.length)
    }
    else if (arr == num) {
      return Math.floor(Math.random() * num.length)
    }
    else {
      return Math.floor(Math.random() * sym.length)
    }
}

//Program

if (Psize < 8 || Psize > 128) {
    alert('invalid password lenght')
    
}
else {
    //Part 1
    //Prompt Local variables
    let l = confirm('Would you like lowercase characters?')
    let u = confirm('Would you like uppercase characters?')
    let s = confirm('Would you like symbol characters?')
    let n = confirm('Would you like numeric characters?')
    // all 4
    if (l === true & u === true & s === true & n === true){
        Q = Psize / 4
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + low[Rdm(low)]
            pass = pass + up[Rdm(up)]
            pass = pass + sym[Rdm(sym)]
            pass = pass + num[Rdm(num)]
        }
    }
    // 3
    else if (l === true & u === true & s === true & n === false){
        Q = Psize / 3
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + low[Rdm(low)]
            pass = pass + up[Rdm(up)]
            pass = pass + sym[Rdm(sym)]
        }
    }
    else if (l === false & u === true & s === true & n === true){
        Q = Psize / 3
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + up[Rdm(up)]
            pass = pass + sym[Rdm(sym)]
            pass = pass + num[Rdm(num)]
        }
    }
    else if (l === true & u === false & s === true & n === true){
        Q = Psize / 3
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + low[Rdm(low)]
            pass = pass + sym[Rdm(sym)]
            pass = pass + num[Rdm(num)]
        }
    }
    else if (l === true & u === true & s === false & n === true){
        Q = Psize / 3
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + low[Rdm(low)]
            pass = pass + up[Rdm(up)]
            pass = pass + num[Rdm(num)]
        }
    }
    // 2
    else if (l === false & u === false & s === true & n === true){
        Q = Psize / 2
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + sym[Rdm(sym)]
            pass = pass + num[Rdm(num)]
        }
    }
    else if (l === true & u === true & s === false & n === false){
        Q = Psize / 2
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + low[Rdm(low)]
            pass = pass + up[Rdm(up)]
        }
    }
    else if (l === false & u === true & s === false & n === true){
        Q = Psize / 2
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + up[Rdm(up)]
            pass = pass + num[Rdm(num)]
        }
    }
    else if (l === true & u === false & s === true & n === false){
        Q = Psize / 2
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + low[Rdm(low)]
            pass = pass + sym[Rdm(sym)]
        }
    }
    else if (l === false & u === true & s === true & n === false){
        Q = Psize / 2
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + up[Rdm(up)]
            pass = pass + sym[Rdm(sym)]
        }
    }
    else if (l === true & u === false & s === false & n === true){
        Q = Psize / 2
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + low[Rdm(low)]
            pass = pass + num[Rdm(num)]
        }
    }
    // 1
    else if (l === true & u === false & s === false & n === false){
        Q = Psize / 1
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + low[Rdm(low)]
        }
    }
    else if (l === false & u === true & s === false & n === false){
        Q = Psize / 1
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + up[Rdm(up)]
        }
    }
    else if (l === false & u === false & s === true & n === false){
        Q = Psize / 1
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + sym[Rdm(sym)]
        }
    }
    else if (l === false & u === false & s === false & n === true){
        Q = Psize / 1
        Q = Math.ceil(Q)
        for (let i = 0; i < Q; i++) {
            pass = pass + num[Rdm(num)]
        }
    }
    // 0
    else {
        alert('You have to select at least one criteria')
    }
}
//part 2
//Final lenght formula
let Q2 = pass.length - Psize
pass = pass.substr(0, (pass.length - Q2))
    let password = pass; //"pass" Variable inside here to display after clicking "Generate" button.
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
});
