'use strict';

const DEFAULT_PLAYERNAME = 'MultiMath Player';

function startGame() {
  // starting a new game
  const playerName: string | undefined = getInputValue('playername');

  logPlayer(playerName);
  postScores(100, playerName);
}

function logPlayer(name: string = DEFAULT_PLAYERNAME): void {
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementId: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScores(score: number, playerName: string = DEFAULT_PLAYERNAME): void {
  const scoreElement: HTMLElement | null = document.getElementById('postedScores');

  scoreElement!.innerText = `${score} - ${playerName}`;
}

document.getElementById('startGame')!.addEventListener('click', startGame);
