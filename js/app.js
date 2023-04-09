var DEFAULT_PLAYERNAME = 'MultiMath Player';
// * Starting a new game
function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function getInputValue(elementId) {
    var inputElement = document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = DEFAULT_PLAYERNAME; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = "".concat(score, " - ").concat(playerName);
    logger("Score: ".concat(score));
}
document.getElementById('startGame').addEventListener('click', startGame);
// * Loggers
function logPlayer(name) {
    if (name === void 0) { name = DEFAULT_PLAYERNAME; }
    console.log("New game starting for player: ".concat(name));
}
function logMessage(message) {
    console.log(message);
}
function logError(err) {
    console.error(err);
}
var firstPlayer = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());
