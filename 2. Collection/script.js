

const collection = [
    {
    title : "Send me on my way",
    singer : "Rusted Root",
    releaseYear : 1994,
    style : "Roots Rock",
    label : "Warner Records",
    picture : "./assets/send-me-on-my-way.jpeg",
    },

    {
    title : "Little Bitty Pretty One",
    singer : "Thurston Harris",
    releaseYear : 1957,
    style :"Rock'n roll", 
    label : "Aladdin",
    picture :"./assets/littleBittyPrettyOne.jpeg",
    },

    {
    title : "One Way or Another",
    singer : "Blondie",
    releaseYear : 1978,
    style : "Rock",
    label : "Chrysalis\EMI Records (USA)",
    picture : "./assets/blondie-one-way-or-another.jpg",
    },

    {
    title : "Didn't Want to Be This Lonely",
    singer : "Pretenders",
    releaseYear : 2020,
    style : "Rock",
    label : "BMG Rights Management",
    picture :"./assets/DidntWantToBeThisLonely.jpeg",
    },

    {
    title : "Lonely Boy",
    singer : "The Black Keys",
    releaseYear : 2011,
    style : "Rock",
    label : "Wixen Music Publishing, Inc.",
    picture :"./assets/The-Black-Keys-Lonely-Boy.jpg",
    },

    {
    title : "Pressure",
    singer : "Billy Joel",
    releaseYear : 1982,
    style : "Classic Rock",
    label : "Columbia",
    picture :"./assets/PressureBillyJoel.jpg",
    },

    {
    title :"Country House",
    singer :"Blur",
    releaseYear : 1995,
    style : "Rock",
    label :"Parlophone UK",
    picture :"./assets/CountryHouse.jpeg",
    },

    {
    title :"Got My Mind Set On You",
    singer :"George Harrison",
    releaseYear : 1987,
    style : "Rock Folk",
    label :"Parlophone",
    picture :"./assets/gotMyMindSetOnYou.jpg",
    },

    {
    title :"Handle With Care",
    singer :"Travaling Wilsbury",
    releaseYear : 1988,
    style : "Folk Rock",
    label :"Concord Records",
    picture :"./assets/Handle_with_Care_Single.jpg",
    },

    {
    title :"Livin'On The Edge",
    singer :"Aerosmith",
    releaseYear : 1993,
    style : "Rock",
    label :"Geffen",
    picture :"./assets/LivinOnTheEdge.jpeg",
    },

    {
    title :"Bigmouth Strikes Again - 2011 Remastered",
    singer :"The Smiths",
    releaseYear : 1986,
    style : "Pop Rock",
    label :"WM UK",
    picture :"./assets/BigmouthStrikesAgain.jpeg",
    },

    {
    title :"Gimme Dat Ding",
    singer :"The Pipkins",
    releaseYear : 1970,
    style : "Pop",
    label :"Chrysalis Copyrights",
    picture :"./assets/GimmeDatDing.jpeg",
    },
]

let htmlCode = ``;


collection.forEach(function(singleSongObjects) {

  htmlCode =
    htmlCode +
    `
    <article>
      <div>
      <img src="${singleSongObjects.picture}">
      </div>
      <div>
      <h3>Title: ${singleSongObjects.title}</h3>
      <p>Singer: ${singleSongObjects.singer}</p>
      <p>Style: ${singleSongObjects.style}</p>
      <p>Label: ${singleSongObjects.label}</p>
      <p>Year of release: ${singleSongObjects.releaseYear}</p>
      </div>
    </article>
  `;
});

const songCards = document.querySelector(".all-songs-cards");

songCards.innerHTML = htmlCode;

/*let body = document.querySelector('body');

let container = document.createElement("div");
    container.className = "container";

body.append(container);

for(let i=0; i<collection.length;i++){
    const song = document.createElement("div")
    song.className = "song"

    const list = document.createElement("p")

    list.innerText = `${collection[i].title} ${collection[i].singer} ${collection[i].releaseYear} ${collection[i].style} ${collection[i].label} ${collection[i].picture}`
    song.appendChild(list)

    let container = document.createElement("div");
    container.className = "container"
    
    song.appendChild(list);

    container.appendChild(song);

    
}
*/
