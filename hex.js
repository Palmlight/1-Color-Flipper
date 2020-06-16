const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");

const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    let hexColor = "#";

    // randomNum function would generate a new number to add the the hex code statement
    const randomNum = () => Math.floor(Math.random() * hex.length);

    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNum()];
       
    }

    // console.log(hexColor);

    document.body.style.backgroundColor = hexColor;

    color.textContent = hexColor;


})