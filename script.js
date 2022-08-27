let textarea = document.getElementById("textarea");
let words = document.getElementById("words");
let cartirs = document.getElementById("cartirs");

textarea.addEventListener("input" , function(){
    cartirs.innerHTML = textarea.value.length;
    let txt = textarea.value.trim();
    words.textContent = txt.split(" ").length
})