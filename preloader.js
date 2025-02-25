document.addEventListener("DOMContentLoaded", () => {
    let countdownElement = document.getElementById("countdown");
    let preloaderContainer = document.querySelector(".preloader-container");
    let count = 5;

    let countdownInterval = setInterval(() => {
        count--;
        countdownElement.textContent = count;

        if (count === 0) {
            clearInterval(countdownInterval);
            preloaderContainer.style.animation = "fadeOut 1s forwards"; 

            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000); 
        }
    }, 1000);
});
