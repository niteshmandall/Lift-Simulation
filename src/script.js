// Store the current level of each lift (initialized to 1)
const liftLevels = [];
const maxHeight = 5; // Adjust the maximum height as needed
const minHeight = 1; // Adjust the minimum height as needed

function createSimulation() {
    const numLevels = parseInt(document.getElementById("numLevels").value);
    const numLifts = parseInt(document.getElementById("numLifts").value);

    // Clear any previous content
    const levelsContainer = document.getElementById("levelsContainer");
    const liftsContainer = document.getElementById("liftsContainer");
    levelsContainer.innerHTML = "";
    liftsContainer.innerHTML = "";

    // Create and display the levels
    for (let level = numLevels; level >= 1; level--) {
        const levelElement = document.createElement("div");
        levelElement.className = "level";

        // Create green and red buttons for each level
        const greenButton = document.createElement("button");
        greenButton.textContent = "Green";
        greenButton.className = "button-green";
        greenButton.onclick = () => moveLiftToLevel(level); // Attach click event to the green button

        const redButton = document.createElement("button");
        redButton.textContent = "Red";
        redButton.className = "button-red";
        redButton.onclick = () => moveLiftToLevel(level); // Attach click event to the red button

        levelsContainer.appendChild(levelElement);

        if (level === 1) {
            levelElement.appendChild(redButton); // At the top, add only the red button
        } else if (level === numLevels) {
            levelElement.appendChild(greenButton); // At the bottom, add only the green button
        } else {
            // For levels in between, add both green and red buttons
            levelElement.appendChild(greenButton);
            levelElement.appendChild(redButton);
        }
    }

    // Create and display the lifts
    for (let lift = 1; lift <= numLifts; lift++) {
        const liftElement = document.createElement("div");
        liftElement.className = "lift";
        liftElement.textContent = `Lift ${lift}`;
        liftLevels.push(1); // Initialize lift levels to 1
        liftsContainer.appendChild(liftElement);
    }
}

function moveLiftToLevel(targetLevel) {
    // Check if the target level is within the allowed range
    if (targetLevel >= minHeight && targetLevel <= maxHeight) {
        // Update the current level for each lift
        for (let i = 0; i < liftLevels.length; i++) {
            liftLevels[i] = targetLevel;
            const liftElement = document.querySelectorAll('.lift')[i];
            liftElement.style.top = `${targetLevel * 97}px`; // Adjust the lift position based on levels
        }

        // Display the level number as output
        const outputContainer = document.getElementById("outputContainer");
        outputContainer.textContent = `Lifts are now at Level ${targetLevel}`;
    } else {
        console.log('Invalid level. Lift cannot go higher than the maximum allowed height or lower than the minimum allowed height.');
    }
}
