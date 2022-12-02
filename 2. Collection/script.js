

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
      <h3> ${singleSongObjects.title}</h3>
      <p class="singer"> ${singleSongObjects.singer}</p>
      <p class="style"> ${singleSongObjects.style}</p>
      <p class="label"> ${singleSongObjects.label}</p>
      <p class="releaseYear"> ${singleSongObjects.releaseYear}</p>
      </div>
    </article>
  `;
});

const songCards = document.querySelector(".all-songs-cards");

songCards.innerHTML = htmlCode;

/*
function listElement(){
  let main = document.createElement ("main");
  let section = document.createElement ("section");

  for(let element of collection){
    let article= document.createElement("article");
    article.className=element.name;

    let title = document.createElement("h3");
    title.innerText=element.title;
    article.appendChild(title);

    let singer = document.createElement("h4");
    singer.innerText=element.singer;
    article.appendChild(singer);

    let releaseYear = document.createElement("p");
    releaseYear.innerText=element.releaseYear;
    article.appendChild(releaseYear);

    let style = document.createElement("p");
    style.innerText=element.style;
    article.appendChild(style);

    let label = document.createElement ("p");
    label.innerText=element.label;
    article.appendChild(label);

    let picture = document.createElement("picture");
    picture.setAttribute("picture", element.picture);
    article.appendChild(picture);

    section.appendChild(article);
    main.appendChild(section);
    document.body.insertBefore(main,document.getElementsByTagName ("footer")[0])

  }
}
listElement(); */