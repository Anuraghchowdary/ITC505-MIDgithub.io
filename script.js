const story = {
    start: {
        text: "Welcome to the mysterious forest. You stand at a crossroads. Which path will you choose?",
        choices: ["Go left", "Go right"],
        consequences: ["left", "right"],
        image: "forest.jpg"
    },
    left: {
        text: "You chose to go left and encounter a magical creature.",
        choices: ["Talk to the creature", "Run away"],
        consequences: ["talk", "run"],
        image: "creature.jpg"
    },
    right: {
        text: "You chose to go right and find a hidden treasure chest.",
        choices: ["Open the chest", "Leave it alone"],
        consequences: ["open", "leave"],
        image: "treasure.jpg"
    },
    talk: {
        text: "You engage in conversation with the creature and learn about its enchanted forest.",
        choices: ["Continue talking", "Bid farewell"],
        consequences: ["talk", "start"],
        image: "talk.jpg"
    },
    run: {
        text: "You run away from the creature and stumble upon a magical portal.",
        choices: ["Enter the portal", "Ignore it"],
        consequences: ["portal", "start"],
        image: "portal.jpg"
    },
    open: {
        text: "You open the chest and find it filled with gold coins.",
        choices: [],
        image: "open.jpg"
    },
    leave: {
        text: "You decide to leave the chest alone and continue your journey.",
        choices: [],
        image: "leave.jpg"
    },
    portal: {
        text: "You enter the portal and find yourself in a different dimension.",
        choices: [],
        image: "dimension.jpg"
    }
};

function startGame() {
    currentStage = "start";
    displayStage(currentStage);
}

function displayStage(stage) {
    const stageObj = story[stage];
    document.getElementById("story").innerHTML = "<p>" + stageObj.text + "</p>";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("image").innerHTML = "<img src='" + stageObj.image + "' alt='" + stage + "'>";
    if (stageObj.choices.length > 0) {
        stageObj.choices.forEach(function(choice, index) {
            const button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click", function() {
                navigate(stageObj.consequences[index]);
            });
            document.getElementById("choices").appendChild(button);
        });
    }
}


function navigate(nextStage) {
    if (story[nextStage]) {
        displayStage(nextStage);
    } else {
        endGame("The end. Thanks for playing!");
    }
}


function endGame(message) {
    document.getElementById("story").innerHTML = "<p>" + message + "</p>";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("image").innerHTML = "";
}


startGame();
