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
        greenButton.textContent = "Up";
        greenButton.className = "button-green";
        greenButton.onclick = () => moveLifts("up", level); // Attach click event to the green button
        console.log(level);

        // levelElement.appendChild(greenButton);

        const redButton = document.createElement("button");
        redButton.textContent = "Down";
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

    // Create and display the lifts with doors and element2
    for (let lift = 1; lift <= numLifts; lift++) {
        const liftElement = document.createElement("div");
        liftElement.className = "lift";
        // liftElement.textContent = `Lift ${lift}`;
        liftPositions.push(0);
        liftsContainer.appendChild(liftElement);
        console.log(liftElement);

    }
    
}



const maxHeight = 5;
const minHeight = 0; 

function moveLifts(direction, level) {

    const windowWidth = window.innerWidth;
console.log(`Browser window width: ${windowWidth}px`);

    setTimeout(() => {
        liftElements[0].classList.remove('animate');
        liftElements[0].classList.remove('door-close');

        console.log(levelDifference, openTime);

    }, 1);

    // Calculate the difference between the clicked level and the current level
    const levelDifference = direction === 'up' ? level - count : count - level;
    const animationDuration = `${Math.abs(levelDifference) * 2}s`;
    const openTime = Math.abs(levelDifference) * 2;


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
    
    for (let i = 0; i < liftPositions.length; i++) {
        const newPosition = liftPositions[i] * 147.5;
        console.log(newPosition);
        console.log(liftPositions[i] );
        liftElements[0].style.top = `${newPosition - 80}px`; // Adjust the lift position in pixels

        setTimeout(() => {
            liftElements[0].classList.add('animate');
            console.log("test", animationDuration);
            console.log("door-open");

            setTimeout(() => {
                liftElements[0].classList.add('door-close');
                console.log(levelDifference, openTime);
                console.log("door-close");
            }, 2500);

        }, (openTime * 1000) + 1500);

        
        liftElements[0].style.transitionDuration = animationDuration;
    }
}






