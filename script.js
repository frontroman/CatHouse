let offset = 0;

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("next").addEventListener("click", ()=>{
        offset = offset + 1100;
        if(offset > 2700){
            offset = 0;
        }

        document.getElementById("carousel").style.left = -offset + "px";
    })
})



document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("prev").addEventListener("click", ()=>{
        offset = offset - 1100;
        if(offset < 0){
            offset = 2200;
        }

        document.getElementById("carousel").style.left = -offset + "px";
    })
})




let questions = document.getElementsByClassName("qua-block");

for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener("click", ()=> {
        questions[i].querySelector(".answer-block").classList.toggle("open-answer")

    })
}