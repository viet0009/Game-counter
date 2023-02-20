let game1 = document.getElementById("black-board1")
let game2 = document.getElementById("black-board2")

let count1 =  0
let count2 = 0
function add1a(){
    count1 += 1
    game1.textContent = count1
}

function add1b(){
    count2 += 1
    game2.textContent = count2
}

function add2a(){
    count1 += 2
    game1.textContent = count1
}

function add2b(){
    count2 += 2
    game2.textContent = count2
}

function add3a(){
    count1 += 3
    game1.textContent = count1
}

function add3b(){
    count2 += 3
    game2.textContent = count2
}

function reset(){
    count1 = 0
    count2 =0
    game2.textContent = count2
    game1.textContent = count1
}
