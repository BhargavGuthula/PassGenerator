  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
  
  console.log(charObject);
  


function passwordGenerator (){
    let password = '';
    for(let i = 0 ; i<15; i++){

        let index = Math.floor(Math.random()*characters.length);
        password+=characters[index];
    }

    return password;
}

function ButtonClicked() {
    console.log("Generating Password");
    let password1 = passwordGenerator();
    let password2 = passwordGenerator();
    let pass1 = document.getElementById('pass1');
    let pass2 = document.getElementById('pass2');

    if (pass1 && pass2) {
        pass1.textContent = password1;
        pass2.textContent = password2;
    } else {
        console.error('Elements with id "pass1" or "pass2" not found.');
    }
}
    