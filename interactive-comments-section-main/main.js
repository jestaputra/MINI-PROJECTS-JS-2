
let cardComment = document.querySelectorAll(".card-comment")
let editComment = document.getElementById("editComment").value = "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant."
let myComment = document.querySelector(".myComment")
let containerPopup = document.querySelector(".container-pop-up")
let start;
let four = document.querySelector(".four")

function showComment(tab){
    document.querySelector(`.${tab}`).classList.add("active")
}


function hideComment(tab){
    document.querySelector(`.${tab}`).classList.remove("active")
    myComment.innerHTML = editComment
}

function deleteComment(){
    containerPopup.style.display = "flex"
}

function deleted(){
    four.style.display = "none"
    containerPopup.style.display = "none"
}

function cancel(){
    containerPopup.style.display = "none"
}

let data = document.getElementsByTagName

// function increase(tab){
//     start = 12
//     start++
    
// }