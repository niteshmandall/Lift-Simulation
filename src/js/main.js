// Store the current position of each lift (initialized to 0)
const liftPositions = [];
const liftLevels = [];
let count = 1;
let val;

function createSimulation() {
    const numLevels = parseInt(document.getElementById("numLevels").value);
    const numLifts = parseInt(document.getElementById("numLifts").value);

    // Clear any previous content
    const levelsContainer = document.getElementById("levelsContainer");
    const liftsContainer = document.getElementById("liftsContainer");
    const doorsContainer = document.getElementById("doorsContainer");

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
        greenButton.onclick = () => moveLifts("up", level); // Attach click event to the green button
        console.log(level);

        // levelElement.appendChild(greenButton);

        const redButton = document.createElement("button");
        redButton.textContent = "Red";
        redButton.className = "button-red";
        redButton.onclick = () => moveLifts("down",level); // Attach click event to the red button
        // levelElement.appendChild(redButton);

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
        liftPositions.push(0); // Initialize lift positions
        liftsContainer.appendChild(liftElement);
        console.log(liftElement);
    }

    for (let lift = 1; lift <= numLifts; lift++) {
        const liftElement = document.createElement("div");
        liftElement.className = "door";
        liftElement.textContent = `Gift ${lift}`;
        doorsContainer.appendChild(liftElement);
        console.log(liftElement);
    }
}

const maxHeight = 5;
const minHeight = 0; 

// function moveLiftsUp(level) {
//     // Calculate the difference between the clicked level and the current level
//     const levelDifference = level - count;

//     // Check if the lift is within the allowed range
//     if (count + levelDifference <= maxHeight) {
//         // Update count with the current level
//         count += levelDifference;

//         // Move all lifts up by the calculated level difference
//         for (let i = 0; i < liftPositions.length; i++) {
//             liftPositions[i] -= levelDifference; // Adjust the position
//             document.querySelectorAll('.lift')[i].style.transform = `translateY(${liftPositions[i] * 97}px)`; // Adjust the lift position in pixels
//         }
//     } else {
//         console.log('Lift cannot go higher than the maximum allowed height.');
//     }
// }

// function moveLiftsDown(level) {
//     // Calculate the difference between the clicked level and the current level
//     const levelDifference = count - level;

//     // Check if the lift is within the allowed range
//     if (count - levelDifference >= minHeight) {
//         // Update count with the current level
//         count -= levelDifference;

//         // Move all lifts down by the calculated level difference
//         for (let i = 0; i < liftPositions.length; i++) {
//             liftPositions[i] += levelDifference; // Adjust the position
//             document.querySelectorAll('.lift')[i].style.transform = `translateY(${liftPositions[i] * 97}px)`; // Adjust the lift position in pixels
//         }
//     } else {
//         console.log('Lift cannot go lower than the minimum allowed height.');
//     }
// }

function moveLifts(direction, level) {
    // Calculate the difference between the clicked level and the current level
    const levelDifference = direction === 'up' ? level - count : count - level;
    const animationDuration = `${Math.abs(levelDifference) * 2}s`;

    // Check if the lift is within the allowed range
    if (direction === 'up' && count + levelDifference <= maxHeight) {
        // Move all lifts up by the calculated level difference
        for (let i = 0; i < liftPositions.length; i++) {
            liftPositions[i] -= levelDifference; // Adjust the position
        }
        count += levelDifference;
    } else if (direction === 'down' && count - levelDifference >= minHeight) {
        // Move all lifts down by the calculated level difference
        for (let i = 0; i < liftPositions.length; i++) {
            liftPositions[i] += levelDifference; // Adjust the position
        }
        count -= levelDifference;
    } else {
        console.log('Lift cannot go beyond the allowed height range.');
    }

    // Update the lift positions and their doors in the DOM
    const liftElements = document.querySelectorAll('.lift');
    const doorElements = document.querySelectorAll('.door');
    
    for (let i = 0; i < liftPositions.length; i++) {
        const newPosition = liftPositions[i] * 147.5;
        liftElements[0].style.top = `${newPosition}px`; // Adjust the lift position in pixels
        doorElements[0].style.top = `${newPosition}px`; // Adjust the door position in pixels0
        liftElements[0].style.transitionDuration = animationDuration;
        doorElements[0].style.transitionDuration = animationDuration; // Set the animation duration
    }
}






