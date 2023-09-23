// Store the current position of each lift (initialized to 0)
const liftPositions = [];
const liftLevels = [];


function createSimulation() {
    const numLevels = parseInt(document.getElementById("numLevels").value);
    const numLifts = parseInt(document.getElementById("numLifts").value);

    // Clear any previous content
    const levelsContainer = document.getElementById("levelsContainer");
    const liftsContainer = document.getElementById("liftsContainer");
    levelsContainer.innerHTML = "";
    liftsContainer.innerHTML = "";

    for (let lift = 1; lift <= numLifts; lift++) {
        liftLevels.push(1); // Initialize lift levels to 1
    }

    // Create and display the levels
    for (let level = numLevels; level >= 1; level--) {
        const levelElement = document.createElement("div");
        levelElement.className = "level";

        // Create green and red buttons for each level
        const greenButton = document.createElement("button");
        greenButton.textContent = "Green";
        greenButton.className = "button-green";
        greenButton.onclick = () => moveLiftsUp(level); // Attach click event to the green button
        console.log(level);
        
        levelElement.appendChild(greenButton);

        const redButton = document.createElement("button");
        redButton.textContent = "Red";
        redButton.className = "button-red";
        redButton.onclick = () => moveLiftsDown(level); // Attach click event to the red button
        levelElement.appendChild(redButton);

        levelsContainer.appendChild(levelElement);
    }

    // Create and display the lifts
    for (let lift = 1; lift <= numLifts; lift++) {
        const liftElement = document.createElement("div");
        liftElement.className = "lift";
        liftElement.textContent = `Lift ${lift}`;
        liftPositions.push(0); // Initialize lift positions
        liftsContainer.appendChild(liftElement);
        console.log(liftElement);
    }
}

function moveLiftsUp(level) {
    moveLiftsToLevel(level);
    // Move all lifts up (you can adjust the distance they move)
    for (let i = 0; i < liftPositions.length; i++) {
        liftPositions[i] -= 1; // Adjust the position (e.g., move up by 1)
        document.querySelectorAll('.lift')[i].style.transform = `translateY(${liftPositions[i] * 97}px)`; // Adjust the lift position in pixels
    }
}

function moveLiftsDown() {
    // Move all lifts down (you can adjust the distance they move)
    for (let i = 0; i < liftPositions.length; i++) {
        liftPositions[i] += 1; // Adjust the position (e.g., move down by 1)
        document.querySelectorAll('.lift')[i].style.transform = `translateY(${liftPositions[i] * 97}px)`; // Adjust the lift position in pixels
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

}

