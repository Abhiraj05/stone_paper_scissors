// variables 
let computer, user, restart_game, headline, user_v, comp_v, btns, new_game, tiptextone, tiptexttwo, tiptextthree, credit, vs_text, spinner
    , stone, paper, scissors, userip, computerip, result_text, flag = 1, picone, pictwo, picthree, revpicone, revpictwo, revpicthree
stone = document.getElementById("stone")
paper = document.getElementById("paper")
scissors = document.getElementById("scissors")
userip = document.getElementById("userip")
computerip = document.getElementById("computerip")
result_text = document.getElementById("result-text")
result_text = document.getElementById("result-text")
restart_game = document.getElementById("restartgame")
picone = document.getElementById("picone")
pictwo = document.getElementById("pictwo")
picthree = document.getElementById("picthree")
revpicone = document.getElementById("revpicone")
revpictwo = document.getElementById("revpictwo")
revpicthree = document.getElementById("revpicthree")
headline = document.getElementById("headline")
user_v = document.getElementById("user-v")
comp_v = document.getElementById("comp-v")
new_game = document.getElementById("newgame")
btns = document.getElementById("btns")
tiptextone = document.getElementById("tip-text-one")
tiptexttwo = document.getElementById("tip-text-two")
tiptextthree = document.getElementById("tip-text-three")
credit = document.getElementById("credit")
vs_text = document.getElementById("vs-text")
spinner = document.getElementById("spinner")
options = ["Stone", "Paper", "Scissors"]

// scissors button 
scissors.addEventListener("click", function () {
    headline.hidden = true
    user_v.hidden = false
    comp_v.hidden = false
    if (flag == 1) {
        picone.hidden = true
        pictwo.hidden = true
        picthree.hidden = false
        computer = Math.floor(Math.random() * 3)
        let text = "Scissors"
        userip.innerHTML = text
        computerip.innerHTML = `${options[computer]}`
        if (text == "Scissors" && options[computer] == "Paper") {
            result_text.innerHTML = "You won &#128526 !"
            revpicone.hidden = true
            revpictwo.hidden = false
            revpicthree.hidden = true
        }
        if (text == "Scissors" && options[computer] == "Scissors") {
            result_text.innerHTML = "Tie &#128540 !"
            revpicone.hidden = true
            revpictwo.hidden = true
            revpicthree.hidden = false
        }
        if (text == "Scissors" && options[computer] == "Stone") {
            result_text.innerHTML = "you lost &#128557 !"
            revpicone.hidden = false
            revpictwo.hidden = true
            revpicthree.hidden = true
        }
    }
    flag = 0
    tiptexttwo.hidden = false
    tiptextthree.hidden = true
    vs_text.hidden = false
    restart_game.hidden = false
    btns.hidden = true
    result_text.hidden=false
    userip.hidden=false
    computerip.hidden=false
    
})

// paper button
paper.addEventListener("click", function () {
    headline.hidden = true
    user_v.hidden = false
    comp_v.hidden = false
    if (flag == 1) {
        picone.hidden = true
        pictwo.hidden = false
        picthree.hidden = true
        computer = Math.floor(Math.random() * 3)
        let text = "Paper"
        userip.innerHTML = text
        computerip.innerHTML = `${options[computer]}`
        if (text == "Paper" && options[computer] == "Stone") {
            result_text.innerHTML = "You won &#128526 !"
            revpicone.hidden = false
            revpictwo.hidden = true
            revpicthree.hidden = true
        }
        if (text == "Paper" && options[computer] == "Paper") {
            result_text.innerHTML = "Tie &#128540 !"
            revpicone.hidden = true
            revpictwo.hidden = false
            revpicthree.hidden = true
        }
        if (text == "Paper" && options[computer] == "Scissors") {
            result_text.innerHTML = "you lost &#128557 !"
            revpicone.hidden = true
            revpictwo.hidden = true
            revpicthree.hidden = false
        }
    }
    flag = 0
    tiptexttwo.hidden = false
    tiptextthree.hidden = true
    vs_text.hidden = false
    restart_game.hidden = false
    btns.hidden = true
    result_text.hidden=false
    userip.hidden=false
    computerip.hidden=false

})

// stone button
stone.addEventListener("click", function () {
    headline.hidden = true
    user_v.hidden = false
    comp_v.hidden = false
    if (flag == 1) {
        picone.hidden = false
        pictwo.hidden = true
        picthree.hidden = true
        computer = Math.floor(Math.random() * 3)
        let text = "Stone"
        userip.innerHTML = text
        computerip.innerHTML = `${options[computer]}`
        if (text == "Stone" && options[computer] == "Scissors") {
            result_text.innerHTML = "You won &#128526 !"
            revpicone.hidden = true
            revpictwo.hidden = true
            revpicthree.hidden = false
        }
        if (text == "Stone" && options[computer] == "Stone") {
            result_text.innerHTML = "Tie &#128540 !"
            revpicone.hidden = false
            revpictwo.hidden = true
            revpicthree.hidden = true
        }
        if (text == "Stone" && options[computer] == "Paper") {
            result_text.innerHTML = "you lost &#128557 !"
            revpicone.hidden = true
            revpictwo.hidden = false
            revpicthree.hidden = true
        }
    }
    flag = 0
    tiptexttwo.hidden = false
    tiptextthree.hidden = true
    vs_text.hidden = false
    restart_game.hidden = false
    btns.hidden = true
    result_text.hidden=false
    userip.hidden=false
    computerip.hidden=false

})

// game restart button
restart_game.addEventListener("click", function () {
    // if (flag == 0) {
        flag = 1
    // }
    restart_game.hidden = true
    spinner.hidden = false
    setTimeout(() => {
        spinner.hidden = true
        btns.hidden = false
        user_v.hidden = true
        comp_v.hidden = true
        revpicone.hidden = true
        revpictwo.hidden = true
        revpicthree.hidden = true
        picone.hidden = true
        pictwo.hidden = true
        picthree.hidden = true
        vs_text.hidden = true
        tiptextthree.hidden=false
        tiptexttwo.hidden=true
        userip.hidden=true
        computerip.hidden=true
        result_text.hidden=true

    }, 1000);
})

// new game button
new_game.addEventListener("click", function () {
    new_game.hidden = true
    spinner.hidden = false
    setTimeout(() => {
        spinner.hidden = true
        btns.hidden = false
        restart_game.hidden = true
        tiptextthree.hidden = false
        tiptextone.hidden = true
        headline.hidden = true
        credit.hidden = true
    }, 1000);
})