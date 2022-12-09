/* display the input in the "firstname" field */
const firstname = document.getElementById("firstname")
const displayFirstname = document.getElementById("display-firstname")

firstname.addEventListener('keyup',() => {
    displayFirstname.textContent = firstname.value
})

/* display "a-hard-truth" when the age is over or equal to 18 */

const age = document.getElementById('age');
const truth = document.getElementById('a-hard-truth');

age.addEventListener('keyup', () => {
if (age.value >= 18) {
    truth.setAttribute("style", "visibility:visible");
 
}});

/* turning background red or green if password confirm is not the same or if the length is minor than 6 */

const pwd = document.getElementById('pwd');
const confirm = document.getElementById('pwd-confirm');


pwd.addEventListener('keyup', () =>{
    if (pwd.value.length > 6 ){
        pwd.setAttribute("style", "background-color:green"); 
    }
    else {
        pwd.setAttribute("style", "background-color:red"); 
    }
});

confirm.addEventListener('keyup', () => {
    if (confirm.value!== pwd.value){
    confirm.setAttribute("style", "background-color:red");
    }
    else {
    confirm.setAttribute("style", "background-color:green");
    }
});

/* Turning background in black and text in white when selecting dark mode */

const selectDM = document.getElementById('toggle-darkmode');
const body = document.querySelector('body');

selectDM.addEventListener('change', () => {
if (selectDM.value=='light'){
body.style.backgroundColor = "white"; 
body.style.color= "black";
  }
else {
body.style.backgroundColor = "black"; 
body.style.color= "white";
}
});



