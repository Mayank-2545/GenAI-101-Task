const facts = [
    "I love hiking and have traveled to five national parks.",
    "I'm learning to play the guitar in my free time.",
    "I once met a celebrity at a coffee shop.",
    "I can cook a three-course meal from scratch.",
    "I have a collection of over 100 vinyl records.",
    "I enjoy painting landscapes in my spare time.",
    "I have traveled to 15 countries and counting.",
    "I can speak three languages fluently.",
    "I once ran a marathon for charity.",
    "I have a pet parrot that can mimic my voice."
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerText = facts[randomIndex];
});

// New function to add user-submitted facts
document.getElementById('submitFactButton').addEventListener('click', function() {
    const userFact = document.getElementById('userFactInput').value;
    if (userFact) {
        facts.push(userFact);
        document.getElementById('userFactInput').value = ''; // Clear input
        alert("Your fact has been added!");
    } else {
        alert("Please enter a fact before submitting.");
    }
});
