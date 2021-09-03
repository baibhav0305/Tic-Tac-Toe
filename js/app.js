
// open console 🙂

let button = document.querySelectorAll(".btn");
let reset = document.getElementById("reset");
let result = document.getElementById("result");

reset.addEventListener("click", () => {

    location.reload();
});

let fill = ["", "", "", "", "", "", "", "", ""];
console.log(fill.length);

let win = false;

for (let i = 0; i < button.length; i++) {

    button[i].addEventListener("click", () => {

        if (fill[i] == "") {

            console.log("CLICKED !!! : " + i);
            // fill.sort();

            if (win == false) {
                fill[i] += "X";
                button[i].innerHTML = "X";
            }

            if ((check() == true) && (win == false)) {
                win = true;
                console.log("HURRAY !!!!!");
                result.innerHTML = "!!! YOU WON !!!";
                // return;
            }


            if (win == false) {
                computerChoice();
            }

            console.log(fill);

            if ((check() == true) && (win == false)) {
                win = true;
                console.log("Uffffffff !!!!>>>>>");
                result.innerHTML = "COMPUTER WON";
                // return;
            }
        }
    });

    function computerChoice() {

        let randomNumber = Math.floor(Math.random() * 9);
        console.log(randomNumber);

        if (fill[randomNumber] == "") {
            fill[randomNumber] += "O";
            button[randomNumber].innerHTML = "O";
        }
        else {
            for (let i = 0; i < fill.length; i++) {

                if (fill[i] == "") {
                    fill[i] += "O";
                    button[i].innerHTML = "O";
                    break;
                }
            }
        }
    }

    let permutations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ];


    function check() {
        for (let i = 0; i < 8; i++) {

            let x = fill[permutations[i][0]];
            let y = fill[permutations[i][1]];
            let z = fill[permutations[i][2]];

            console.log(x, y, z);

            if ((x === "") || (y === "") || (z === "")) {
                continue
            }

            if ((x === y) && (x === z)) {
                // console.log("COMPLETED !!!");
                return true;
            }
        }
    }
}
















// $$$$$$$$$$$       TO-DO         $$$$$$$$$$$$$$


// 1. generate random number
// 2. check if that index is empty
// 3. if not empty then search for the first empty index 
// 4. select that index 

