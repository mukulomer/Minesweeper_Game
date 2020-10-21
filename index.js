let noOfrow = 9;
let noOfcolm = 9;
const initgrid = () => {
  noOfrow = 9;
  noOfcolm = 9;
  let gamecontainer = document.getElementById("gamecontainer");
  for (let i = 0; i < noOfrow; i++) {
    let rowel = document.createElement("div");
    rowel.classList.add("row");
    rowel.setAttribute("div", `row${i}`);
    for (let j = 0; j < noOfcolm; j++) {
      let colel = document.createElement("div");
      colel.classList.add("col");
      colel.setAttribute("id", `${i}${j}`);
      colel.addEventListener("click", () => {
        handelclick(`${i}`, `${j}`);
      });
      rowel.appendChild(colel);
    }
    gamecontainer.appendChild(rowel);
  }
};

let arr = [];
for (let i = 0; i < 10; i++) {
  let i = Math.ceil(Math.random() * 8);
  let j = Math.ceil(Math.random() * 8);
  let idno = `${i}${j}`;

  arr.push(idno);
}

let bombclicked = false;
let countscore = 0;

let handelclick = (I, J) => {
  let id = document.getElementById(`${I}${J}`);
  let idno = `${I}${J}`;
  let gameover = document.getElementById("gameover");

  for (let i = 0; i < 10; i++) {
    if (idno === arr[i]) {
      bombclicked = true;
      //alert("bomb is clicked");

      if (bombclicked) {
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {
            for (let k = 0; k < 10; k++) {
              if (arr[k] === `${i}${j}`) {
                let id = document.getElementById(`${i}${j}`);
                id.innerHTML = "blast";
                id.classList.add("blast");
                gameover.classList.remove("hide");
              }
            }
          }
        }
      }
      return;
    }
  }

  let count = 0;
  let tempI = I - 1;
  let tempJ = J - 1;

  let tempId = `${I}${J}`;

  for (let i = 0; i < 10; i++) {
    for (let k = tempI; k < tempI + 3; k++) {
      for (let j = tempJ; j < tempJ + 3; j++) {
        tempId = `${k}${j}`;

        if (tempId === arr[i]) {
          console.log(tempId);
          console.log(arr[i]);
          count++;
          console.log(count);
        }
      }
    }
  }

  id.innerHTML = count;
  let score = document.getElementById("score");

  countscore++;
  score.innerHTML = countscore;
};

let winner = document.getElementById("winner");

if (countscore === 50) {
  winner.innerHTML = "You Won";
}

initgrid();
