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

    let r;
    let g;
    let b;

for (elem of z){
    function ranColor(){
        r=Math.floor(Math.random() * (255 + 1));
        g=Math.floor(Math.random() * (255 + 1));
        b=Math.floor(Math.random() * (255 + 1));
            
            return "rgb("+r+","+g+","+b+")";
        }

        elem.style.backgroundColor = ranColor();
        
                    
            let Bright = Math.sqrt((r * r * 0.241) + (g * g * 0.691) + (b * b * 0.068));
       
               if (Bright < 130){
                   elem.style.color = '#FFFFFF';
    
        }
    }

  

   

  /*let Bright = Math.sqrt((r * r * 0.241) + (g * g * 0.691) + (b * b * 0.068));
   
           if (Bright < 130){
               elem.style.color = #000000;
           }
   */
