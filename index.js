let HOME = document.getElementById("HOME")
let GUEST = document.getElementById("GUEST")
let rel = document.getElementById("reload")

let count1 = 0
let count2 = 0

function h_one(){
    count1+=1
    HOME.textContent = count1
}

function h_two(){
    count1+=2
    HOME.textContent = count1
}

function h_three(){
    count1+=3
    HOME.textContent = count1
}

function g_one(){
    count2+=1
    GUEST.textContent = count2
}

function g_two(){
    count2+=2
    GUEST.textContent = count2
}

function g_three(){
    count2+=3
    GUEST.textContent = count2
}

function reload(){
    count1=0
    count2=0
    HOME.textContent = count1
    GUEST.textContent = count2
}