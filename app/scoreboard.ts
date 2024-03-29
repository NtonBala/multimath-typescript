import { Result } from './result';
import * as _ from 'lodash';

export class Scoreboard {
  private results: Result[] = [];

  addResult(newResult: Result): void {
    const allCapsName = _.upperCase(newResult.playerName);

    this.results.push(newResult);

    console.log(`${allCapsName}: ${newResult.score}`);
  }

  updateScoreboard(): void {
    let output: string = '<h2>Scoreboard</h2>';

    for (let index = 0; index < this.results.length; index++) {
      const result = this.results[index];

      output += '<h4>';
      output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
      output += '</h4>';
    }

    const scoresElement: HTMLElement = document.getElementById('scores')!;

    scoresElement.innerHTML = output;
  }
}
