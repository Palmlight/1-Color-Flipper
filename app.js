const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn");

const color = document.querySelector(".color");

btn.addEventListener("click", () => {
//    get random number 
    const randomNum = Math.floor(Math.random() * colors.length);

    // console.log(randomNum);

    document.body.style.backgroundColor = colors[randomNum];

    color.textContent = colors[randomNum];

});