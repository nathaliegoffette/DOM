const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

  const newDiv = document.createElement("div");
  newDiv.className = ("displayedsquare "+ e.target.classList[1]);

  const displayedSquareWrapper = document.querySelector('.displayedsquare-wrapper');
  /*console.log(displayedSquareWrapper);*/

  displayedSquareWrapper.appendChild(newDiv);


  const ul = document.querySelector('ul');
  const li = document.createElement("li");
  li.innerHTML = getElapsedTime() + (" Create a new " + e.target.classList[1] + " square.");

  ul.appendChild(li);

}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

function ranColor(){
  r=Math.floor(Math.random() * (255 + 1));
  g=Math.floor(Math.random() * (255 + 1));
  b=Math.floor(Math.random() * (255 + 1));
      
      return "rgb("+r+","+g+","+b+")";
  }

const body = document.querySelector('body')

body.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 32) {
    body.style.backgroundColor = ranColor();
    
    const ul = document.querySelector('ul');
    const li = document.createElement("li");
    li.innerHTML = ("The spacebar has been used") + ("- rgb("+r+","+g+","+b+")");

    ul.appendChild(li);
  }

});

