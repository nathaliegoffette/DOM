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
  li.innerHTML = getElapsedTime();

  ul.appendChild(li);


  /*console.log(newDiv);*/
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

/*
const green = document.getElementsByClassName("actionsquare green")
const violet = document.getElementsByClassName("actionsquare violet")
const orange = document.getElementsByClassName("actionsquare orange")
.addEventListener('click', clickedSquare())*/
