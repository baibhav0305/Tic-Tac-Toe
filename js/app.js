
let button = document.querySelectorAll("button");
let fill = ["", "", "", "", "", "", "", "", ""];
console.log(fill.length);

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {

        console.log("CLICKED !!! : " + i);
        fill[i] = i;
        // fill.sort();
        console.log(fill);
        button[i].innerHTML = "X";

        setTimeout(function () {
            let randomNumber = Math.floor(Math.random() * 9);
            button[(i + 1)].innerHTML = "O";
            console.log("abcd: " + i + " " + randomNumber);
        }, 1000);

    });

    // function abcd(){
    //     let randomNumber = Math.floor(Math.random()*9);
    //     button[i+1].innerHTML = "O";
    //     console.log("abcd: " + i + " " + randomNumber);
    // }
}