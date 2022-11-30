/*
*/

let students = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan Bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"];

for (var i=0; i<students.length;i++){   
    let newSection = document.createElement('section');
    let newPara = document.createElement('p');
    let newContent = document.createTextNode(students[i]);

    newPara.appendChild(newContent);
    
    newSection.appendChild(newPara);

    let article = document.querySelector('article');

    article.append(newSection);


    
}

let z = document.querySelectorAll('section');

for (elem of z){
    function ranColor(){
            let r=Math.floor(Math.random() * (255 + 1));
            let g=Math.floor(Math.random() * (255 + 1));
            let b=Math.floor(Math.random() * (255 + 1));
            return "rgb("+r+","+g+","+b+")";
        }
        elem.style.backgroundColor = ranColor();
    }

/*for (var i=0; i<students.length;i++){   
    let newSection = document.createElement('section');
    let newP = document.createElement('p');
    let newContent = document.createTextNode(students[i]);

    newSection.appendChild(newContent);

    let article = document.querySelector('article');

    article.append(newSection);


    
}
*/