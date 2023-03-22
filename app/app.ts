'use strict';

function startGame() {
  // starting a new game
  const messagesElement = document.getElementById('messages');
  let playerName: string = 'Audrey';

  logPlayer(playerName);
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name: string): void {
  console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
