// Write your code in this file!

const currentUser = 'Grace Hopper';


// Use if + operator for string concatenation

// const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';


// String interpolation

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;


const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;

// OR
// const shortGreeting = `Welcome, ${currentUser[0]}!`;

