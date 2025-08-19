
let homePoints = 0
function add1() {
    document.getElementById("Home-p").textContent = homePoints
    homePoints++  
}
function add2() {
 document.getElementById("Home-p").textContent = homePoints
 homePoints+= 2
}
function add3() {
 document.getElementById("Home-p").textContent = homePoints
 homePoints+= 3
}

let guestPoints = 0
function plus1() {
    document.getElementById("Guest-p").textContent = guestPoints
    guestPoints+=1  
}
function plus2() {
 document.getElementById("Guest-p").textContent = guestPoints
 guestPoints+= 2
}
function plus3() {
 document.getElementById("Guest-p").textContent = guestPoints
 guestPoints+= 3
}

function reset() {
   homePoints = 0
    document.getElementById("Home-p").textContent = homePoints
   guestPoints = 0  
   document.getElementById("Guest-p").textContent = guestPoints
}