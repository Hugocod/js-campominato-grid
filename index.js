let createGridBtn = document.getElementById("create-grid-btn");

createGridBtn.addEventListener("click", createNewGrid);

function createNewGrid() {
    let cellContainer = document.getElementById("grid-container");

    cellContainer.innerHTML = "";
    for (let index = 1; index <= 100; index++) {
        let cell = document.createElement("div");

        cell.addEventListener("mouseover", () => {
            if (index % 2 === 0) {
                console.log("pari");
                cell.classList.add("even");
            } else {
                console.log("dispari");
                cell.classList.add("odd");
            }
        });

        cell.innerHTML = `${index}`;
        cellContainer.appendChild(cell);
    }
}
