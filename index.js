const fade_in = document.getElementById("fade-in");
if (fade_in) {
  // CSS側で初期opacityとtransitionを設定している想定
  window.addEventListener("load", () => {
    fade_in.style.opacity = "1";
  });
}
