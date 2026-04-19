const text = "This page is just for you... You make my life beautiful, and I’m so lucky to have you ❤️";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

window.onload = typeEffect;

function showMessage() {
    document.getElementById("loveMessage").style.display = "block";
}

window.addEventListener("click", function () {
    document.getElementById("bgMusic").play();
});
