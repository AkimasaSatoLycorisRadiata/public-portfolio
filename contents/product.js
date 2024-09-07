// メインコンテンツのフェードイン
var fade_in = document.getElementById("fade-in");

fade_in.parentElement.opacity = "0";

fade_in.style.opacity = "0";

fade_in.style.transition = "opacity 1s ease-in-out";

window.addEventListener("load", function() {
    fade_in.style.opacity = "1";
    fade_in.parentElement.opacity = "1";   
});