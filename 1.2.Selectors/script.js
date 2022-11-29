/*Exercice 1*/

var title = document.querySelectorAll ('.important');
for (elem of title){
    elem.setAttribute('title','This is an important item');
}

/*Exercice 2*/

let chat =document.querySelectorAll('img');

for (elem of chat){
    if (elem.classList.contains('important')){
        elem.style.display ='block';
    }

    else {
        elem.style.display = "none";
    }
}

/*Exercice 3*/

let x =document.querySelectorAll('p');

for (elem of x){
    if (elem.hasAttribute("Class"));
        console.log(elem.innerHTML, elem.classList);

}

/*Exercice 4*/




let z = document.querySelectorAll('p');

for (elem of z){
    if (elem.hasAttribute("Class")){
        elem.style.color = "rgb(0,0,0)";
    }
    else{
        function ranColor(){
            let r=Math.floor(Math.random() * (255 + 1));
            let g=Math.floor(Math.random() * (255 + 1));
            let b=Math.floor(Math.random() * (255 + 1));
            return "rgb("+r+","+g+","+b+")";
        }
        elem.style.color = ranColor();
    }
}

