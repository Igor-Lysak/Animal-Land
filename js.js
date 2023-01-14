let pag_link = document.querySelector(".pag-link");

pag_link.addEventListener("click", function(){
    this.pag_link.classList.add("active")
    console.log("great!")
});


let mask = document.querySelector(".mask");

window.addEventListener("load", () => {
    mask.classList.add("hide");
    setTimeout(() => {
        mask.remove();
    },600);
});