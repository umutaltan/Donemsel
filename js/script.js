/*const dark = document.getElementById("dark");

window.onmousemove = function (e) {
  const x = (e.x / window.innerWidth) * 100;
  const y = (e.y / window.innerHeight) * 100;
  dark.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent, rgba(0, 0, 0, 0.9) 150px, black)`;
};*/

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
        btn.style.opacity = "1";
    } else {
        btn.style.opacity = "0";
        setTimeout(function() {
            btn.style.display = "none";
        }, 300); // opacity animasyon süresi
    }
}

function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}


