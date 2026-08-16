// ==========================================
// LearnSphere AI - Main JavaScript
// ==========================================

const topicInput = document.getElementById("topicInput");
const startLearning = document.getElementById("startLearning");

// Ask AI button
startLearning.addEventListener("click", function () {

    const topic = topicInput.value.trim();

    if (topic === "") {
        alert("Please enter a topic you want to learn or research.");
        return;
    }

    alert(
        "LearnSphere AI\n\n" +
        "Your topic:\n" +
        topic +
        "\n\nAI Learning will be connected in the next stage."
    );

});


// Allow Enter key
topicInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        startLearning.click();
    }

});


// Quick mode buttons
const modeButtons = document.querySelectorAll(".quick-modes button");

modeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const mode = button.textContent.trim();

        topicInput.focus();

        topicInput.placeholder =
            "What do you want to " +
            mode.replace(/^[^\w]+/, "").toLowerCase() +
            "?";

    });

});
