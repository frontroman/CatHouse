let offset = 0;

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("next").addEventListener("click", ()=>{
        offset = offset + 370;
        if(offset > 2570){
            offset = 0;
        }

        document.getElementById("carousel").style.left = -offset + "px";
    })
})



document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("prev").addEventListener("click", ()=>{
        offset = offset - 370;
        console.log(offset)
        if(offset < 0){
            offset = 2590;
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




document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.getElementById("nav").classList.toggle("open");
        document.getElementById("header").classList.toggle("open");
    })
});