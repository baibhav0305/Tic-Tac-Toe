
let button = document.querySelectorAll("button");
let fill = ["", "", "", "", "", "", "", "", ""];
console.log(fill.length);

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {

        if (fill[i] == "") {
            console.log("CLICKED !!! : " + i);
            fill[i] += i;
            // fill.sort();
            button[i].innerHTML = "X";

            // setTimeout(function () {
            //     let randomNumber = Math.floor(Math.random() * 9);
            //     button[(i + 1)].innerHTML = "O";
            //     console.log("abcd: " + i + " " + randomNumber);
            // }, 1000);

            computerChoice();
            console.log(fill);
        }

    });

    function computerChoice() {
        let randomNumber = Math.floor(Math.random() * 9);
        console.log(randomNumber);
        if (fill[randomNumber] == "") {
            fill[randomNumber] += randomNumber;
            button[randomNumber].innerHTML = "O";
        }
        else {
            for (let i = 0; i < fill.length; i++) {
                if (fill[i] == "") {
                    fill[i] += i;
                    button[i].innerHTML = "O";
                    break;
                }

            }
        }
    }

    // function abcd(){
    //     let randomNumber = Math.floor(Math.random()*9);
    //     button[i+1].innerHTML = "O";
    //     console.log("abcd: " + i + " " + randomNumber);
    // }
}

// 1. generate random number
// 2. check if that index is empty
// 3. if not empty then search for the first empty index 
// 4. select that index 