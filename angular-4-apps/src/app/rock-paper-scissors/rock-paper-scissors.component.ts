import { Component } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.css']
})
export class RockPaperScissorsComponent {
  playerMove: string = '';
  computerMove: string = '';
  result: string = '';
  options = ['Rock', 'Paper', 'Scissors'];

  play(playerChoice: string): void {
      this.playerMove = playerChoice;
      this.computerMove = this.options[Math.floor(Math.random() * this.options.length)];
      this.calculateResult();
  }

  calculateResult(): void {
      if (this.playerMove === this.computerMove) {
          this.result = 'Tie!';
      } else if (
          (this.playerMove === 'Rock' && this.computerMove === 'Scissors') ||
          (this.playerMove === 'Paper' && this.computerMove === 'Rock') ||
          (this.playerMove === 'Scissors' && this.computerMove === 'Paper')) {
          this.result = 'Winner!';
      } else {
          this.result = 'Loser!';
      }
  }
}