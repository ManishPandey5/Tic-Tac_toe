var box = document.querySelectorAll(".box");
var light = true;

let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

box.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (light) {
            elem.innerText = "X";
            light = false;
        }
        else {
            elem.innerText = "0";
            light = true;
        }
        elem.disabled = true;
    })
})

