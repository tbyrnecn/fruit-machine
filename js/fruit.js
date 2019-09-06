alert("Welcome to the Fruit Machine")

document.getElementById("b").addEventListener("click",spin)

function spin(){
    alert("You are spinning the wheels")
    spinReel("r1")
    spinReel("r2")
    spinReel("r3")
}

function spinReel(reel){
    let i = Math.floor(Math.random()*3)
    if(i == 0){
        document.getElementById(reel).src = "images/orange.jpg"
    }
    if(i == 1){
        document.getElementById(reel).src = "images/watermelon.jpg"
    }
    if(i == 2){
        document.getElementById(reel).src = "images/pineapple.jpg"
    }
}