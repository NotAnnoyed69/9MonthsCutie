document.addEventListener("DOMContentLoaded", () => {
    const messageCard = document.querySelector(".message-card");
    const heartContainer = document.getElementById("heart-container");

    // Click to reveal a hidden message
    messageCard.addEventListener("click", () => {
        messageCard.textContent = "I'm so lucky to have you❤️";
        messageCard.style.backgroundColor = "#D8BFD8";
    });

    // Function to create floating hearts
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💜"; 
        heart.style.left = Math.random() * 100 + "vw"; 
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; 

        heartContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Generate hearts every 400ms
    setInterval(createHeart, 400);
});

