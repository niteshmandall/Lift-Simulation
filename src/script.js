// Store the current level of each lift (initialized to 1)
const liftLevels = [];

function createSimulation() {
    const numLevels = parseInt(document.getElementById("numLevels").value);
    const numLifts = parseInt(document.getElementById("numLifts").value);

    // Clear any previous content
    const levelsContainer = document.getElementById("levelsContainer");
    const liftsContainer = document.getElementById("liftsContainer");
    levelsContainer.innerHTML = "";
    liftsContainer.innerHTML = "";

    // Initialize lift levels and positions
    for (let lift = 1; lift <= numLifts; lift++) {
        liftLevels.push(1); // Initialize lift levels to 1
        // testing
    }

    // Create and display the levels
    for (let level = 1; level <= numLevels; level++) {
        const levelElement = document.createElement("div");
        levelElement.className = "level";
        levelElement.textContent = `Level ${level}`;

        // Create green and red buttons for each level
        const greenButton = document.createElement("button");
        greenButton.textContent = "Green";
        greenButton.className = "button-green";
        greenButton.onclick = () => moveLiftsToLevel(level); // Attach click event to the green button
        levelElement.appendChild(greenButton);

        const redButton = document.createElement("button");
        redButton.textContent = "Red";
        redButton.className = "button-red";
        redButton.onclick = () => moveLiftsToLevel(level); // Attach click event to the red button
        levelElement.appendChild(redButton);

        levelsContainer.appendChild(levelElement);
    }

    // Create and display the lifts
    for (let lift = 1; lift <= numLifts; lift++) {
        const liftElement = document.createElement("div");
        liftElement.className = "lift";
        liftElement.textContent = `Lift ${lift}`;
        liftsContainer.appendChild(liftElement);
    }
}

function moveLiftsToLevel(targetLevel) {
    // Update the current level for each lift
    for (let i = 0; i < liftLevels.length; i++) {
        liftLevels[i] = targetLevel;
    }

    // Display the level number as output
    const outputContainer = document.getElementById("outputContainer");
    outputContainer.textContent = `Lifts are now at Level ${targetLevel}`;

    // Move the lifts to their respective levels
    for (let i = 0; i < liftLevels.length; i++) {
        const liftElement = document.querySelectorAll('.lift')[i];
        const targetPosition = (targetLevel - 1) * 30; // Adjust the lift position in pixels
        liftElement.style.transform = `translateY(${targetPosition}px)`;
    }
}
