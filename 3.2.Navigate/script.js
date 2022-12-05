const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

const displayedSquareWrapper = document.getElementsByClassName('displayedsquare-wrapper');

  const newDiv = document.createElement("div");
  newDiv.className = "displayedsquare";
  displayedSquareWrapper.append(newDiv);



/*function submit() {
  var card = document.createElement("div");
  card.innerHTML = "Hello";
  
  var h1 = document.createElement("h1");
  h1.innerHTML = "Some h1 text";
  
  card.append(h1);
  document.body.append(card); 
}

<button onclick="submit()">Submit</button>*/
