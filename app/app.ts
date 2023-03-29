const DEFAULT_PLAYERNAME = 'MultiMath Player';

// * Starting a new game
function startGame() {
  const playerName: string | undefined = getInputValue('playername');

  logPlayer(playerName);
  postScore(80, playerName);
  postScore(-5, playerName);
}

function getInputValue(elementId: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string = DEFAULT_PLAYERNAME): void {
  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');

  scoreElement!.innerText = `${score} - ${playerName}`;
  logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

// * Loggers
function logPlayer(name: string = DEFAULT_PLAYERNAME): void {
  console.log(`New game starting for player: ${name}`);
}

function logMessage(message: string): void {
  console.log(message);
}

function logError(err: string): void {
  console.error(err);
}

let myResult: Result = {
  playerName: 'Marie',
  score: 5,
  problemCount: 5,
  factor: 7,
};

let player: Person = {
  name: 'Daniel',
  formatName: () => 'Dan',
};
