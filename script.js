const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const backgroundImage = new Image();
const overlayImage = new Image();

backgroundImage.src = "https://i.imgur.com/XDqWaGX.png";
overlayImage.src = "https://i.imgur.com/RpX18uv.png";

let isErasing = false;

//backgroundImage.onload = () => {
 //   ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
//};

overlayImage.onload = () => {
    ctx.drawImage(overlayImage, 0, 0, canvas.width, canvas.height);
};

canvas.addEventListener("mousedown", () => {
    isErasing = true;
  // Set a timer to trigger the alert after 6 seconds (6000 milliseconds)
    setTimeout(() => {
        alert("Game Over! You lose. You made (1) mistake: joining the army. Please try again.");
    }, 4000);
});

canvas.addEventListener("mouseup", () => {
    isErasing = false;
});

canvas.addEventListener("mousemove", (e) => {
    if (isErasing) {
        const x = e.offsetX;
        const y = e.offsetY;
        ctx.clearRect(x - 10, y - 10, 20, 20); // Adjust the size of the eraser as needed
    }
});

document.getElementById("resetButton").addEventListener("click", () => {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(overlayImage, 0, 0, canvas.width, canvas.height);
});
