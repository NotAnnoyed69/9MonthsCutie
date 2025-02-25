document.addEventListener("DOMContentLoaded", () => {
    let countdownElement = document.getElementById("countdown");
    let preloaderContainer = document.querySelector(".preloader-container");
    let count = 5;

    let countdownInterval = setInterval(() => {
        count--;
        countdownElement.textContent = count;

        if (count === 0) {
            clearInterval(countdownInterval);
            preloaderContainer.style.animation = "fadeOut 1s forwards"; // Apply fade out

            setTimeout(() => {
                window.location.href = "index.html"; // Redirect after fade effect
            }, 1000); // Wait for fade out animation before redirecting
        }
    }, 1000);
});
