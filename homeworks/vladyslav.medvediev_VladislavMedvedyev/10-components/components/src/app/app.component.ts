import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components';

  changePlayer(): void {
      if (playerTurn) {
          playerTurn = false;
          playerTurnShow();
          item1Change();
          item1Color();
      } else {
          playerTurn = true; 
          playerTurnShow();
          item1Change();
          item1Color();
      }
  }

  resetCurrentGame(): void {
      newArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      item1Color();
      console.log('resetCurrentGame');
  }
}

let playerTurn: boolean;

function playerTurnShow(): void {
    const player1TurnEl = document.querySelector('[data-player-1-turn]');
    const player2TurnEl = document.querySelector('[data-player-2-turn]');
    if (playerTurn) {
        console.log('player1');
        player1TurnEl?.classList.add('player-1-turn-container');
        player2TurnEl?.classList.remove('player-2-turn-container-visible');
    } else {
        console.log('player2');
        player1TurnEl?.classList.remove('player-1-turn-container');
        player2TurnEl?.classList.add('player-2-turn-container-visible');
    }
}

window.onload = function () {
    playerTurn = true;
    playerTurnShow();
}

let newArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function item1Change() {
    if(playerTurn) {
        newArr[0] = 1;
    } else {
        newArr[0] = 2;
    }
}

function item1Color() {
    const item1Player1 = document.querySelector('[data-item-1-player-1]');
    const item1Player2 = document.querySelector('[data-item-1-player-2]');
    if (newArr[0] == 0) {
        item1Player1?.classList.remove('item-1-player-1-visible');
        item1Player2?.classList.remove('item-1-player-2-visible');
    } else if (newArr[0] == 1) {
        item1Player1?.classList.remove('item-1-player-1-visible');
        item1Player2?.classList.add('item-1-player-2-visible');
    } else {
        item1Player1?.classList.add('item-1-player-1-visible');
        item1Player2?.classList.remove('item-1-player-2-visible');
    }
}
