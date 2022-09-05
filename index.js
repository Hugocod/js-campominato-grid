let createGridBtn = document.getElementById("create-grid-btn");

createGridBtn.addEventListener("click", createNewGrid);

function createNewGrid() {
    let cellContainer = document.getElementById("grid-container");
    cellContainer.innerHTML = "";
    let list = createRandomNumberList();
    console.log(list);

    for (let index = 0; index < 100; index++) {
        let cell = document.createElement("div");
        cell.innerHTML = `${list[index]}`;
        cellContainer.appendChild(cell);

        cell.addEventListener("mouseover", () => {
            if (list[index] % 2 === 0) {
                console.log("pari");
                cell.classList.add("even");
            } else {
                console.log("dispari");
                cell.classList.add("odd");
            }
        });
    }
}

/* bonus */
function createRandomNumberList() {
    let numberList = [];

    while (numberList.length < 100) {
        let randomNumber = Math.floor(Math.random() * 100 + 1);

        if (!numberList.includes(randomNumber)) {
            numberList.push(randomNumber);
        }
    }

    return numberList;
}
