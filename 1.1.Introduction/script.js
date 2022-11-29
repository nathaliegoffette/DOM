/*Exercice 1*/
console.log(document.title);

/* Exercice 2*/

document.title = "Modifying the DOM"; 

/* Exercice 3*/

document.body.style.backgroundColor = "#FF69B4";

/* Exercice 3 Bonus*/
document.body.style.backgroundColor = "rgb(237, 44, 83)";

/* Exercice 4 */
for (elem of document.body.children){
    console.log(elem);
}
