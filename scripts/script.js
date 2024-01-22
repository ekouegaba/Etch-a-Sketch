let h2 = document.querySelector("h2");
let sketchpad = document.querySelector(".sketchpad");

let slider = document.querySelector("#myRange")



function makeGrid(amount) {
    let box;

    for (i = 0; i < amount; i++) {
        row = document.createElement("div");
        sketchpad.appendChild(row);
        row.className = "row";

        for (j = 0; j < amount; j++) {
            box = document.createElement("div");
            box.className = "grid-box";
            row.append(box);

        }


    }
    addHoverEffect();
}




function addHoverEffect() {
    let selectedColor;

    colorPicker.on("color:change", function (color) {
        colorIndicator.style.backgroundColor = color.hexString;
        selectedColor = color.hexString;
    });

    document.querySelector(".slider").style.backgroundColor = selectedColor;

    let gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach(element => {
        element.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = selectedColor;
        });
    });
}



let colorIndicator = document.getElementById("color-indicator");
const colorPicker = new iro.ColorPicker("#color-picker",{
    width:180, color: "#fff"
});

var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)



slider.onmouseup = function () {
    makeGrid(this.value);
    
}

slider.oninput = function () {
    output.innerHTML = `${this.value} x ${this.value}`;
}

slider.onmousedown = function(){
    if (sketchpad.children.length > 0) {
        clearSketchpad();
    }
}

function clearSketchpad() {
    let board = document.querySelector(".sketchpad");

    //e.firstElementChild can be used. 
    let child = board.lastElementChild;
    while (child) {
        board.removeChild(child);
        child = board.lastElementChild;
    }
}
