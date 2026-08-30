import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorHistoryService } from '../color-history.service'; 
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-color-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-game.component.html',
  styleUrls: ['./color-game.component.css'],
})
export class ColorGameComponent {
  rows: number = 0;
  cols: number = 0;
  grid: string[][] = [];
  questions: string[][] = [];
  answers: string[][] = [];
  correctAnswersCount: number = 0;
  totalQuestions: number = 0;
  gameOver: boolean = false;
  gameWon: boolean = false;
  selectedCell: { row: number; col: number } | null = null;
  enteredColor: string = '';

  constructor(
    private historyService: ColorHistoryService, 
    private authService: AuthService
  ) {}

  generateGrid(): void {
    if (this.rows > 0 && this.cols > 0) {
      this.grid = Array.from({ length: this.rows }, () =>
        Array(this.cols).fill('#ffffff')
      );
      this.questions = Array.from({ length: this.rows }, () =>
        Array(this.cols).fill('')
      );
      this.answers = Array.from({ length: this.rows }, () =>
        Array(this.cols).fill('')
      );

      this.correctAnswersCount = 0;
      this.totalQuestions = this.rows * this.cols;
      this.gameOver = false;
      this.gameWon = false;

      this.assignQuestions();
    } else {
      this.grid = [];
      this.questions = [];
      this.answers = [];
    }
  }

  assignQuestions(): void {
    const sampleQuestions = [
      { question: 'What is the color of the sky?', answer: 'blue' },
      { question: 'What color is grass?', answer: 'green' },
      { question: 'What color is the sun?', answer: 'yellow' },
      { question: 'What color is blood?', answer: 'red' },
      { question: 'What color are bananas?', answer: 'yellow' },
      { question: 'What is the color of coal?', answer: 'black' },
      { question: 'What color are clouds?', answer: 'white' },
      { question: 'What color is an apple?', answer: 'red' },
      { question: 'What color is the ocean?', answer: 'blue' },
      { question: 'What color is a strawberry?', answer: 'red' },
      { question: 'What color is a cucumber?', answer: 'green' },
      { question: 'What color is an eggplant?', answer: 'purple' },
      { question: 'What color is a pumpkin?', answer: 'orange' },
      { question: 'What color is a lemon?', answer: 'yellow' },
      { question: 'What color is a flamingo?', answer: 'pink' },
      { question: 'What color is chocolate?', answer: 'brown' },
      { question: 'What color is a zebra?', answer: 'black and white' },
      { question: 'What color is a watermelon?', answer: 'green' },
      { question: 'What color is a blueberry?', answer: 'blue' },
      { question: 'What color is a firetruck?', answer: 'red' },
      { question: 'What color is cotton candy?', answer: 'pink' },
      { question: 'What color is an orange?', answer: 'orange' },
      { question: 'What color is snow?', answer: 'white' },
      { question: 'What color is a raven?', answer: 'black' },
      { question: 'What color is a sunflower?', answer: 'yellow' }
    ];
  
    const totalCells = this.rows * this.cols;
  
    if (totalCells > sampleQuestions.length) {
      console.error('Not enough unique questions! Add more questions.');
      return;
    }
  
    const selectedQuestions = sampleQuestions
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCells);
  
    let questionIndex = 0;
    this.questions = Array.from({ length: this.rows }, () => Array(this.cols).fill(''));
    this.answers = Array.from({ length: this.rows }, () => Array(this.cols).fill(''));
  
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.questions[i][j] = selectedQuestions[questionIndex].question;
        this.answers[i][j] = selectedQuestions[questionIndex].answer;
        questionIndex++;
      }
    }
  }

  openPopup(row: number, col: number): void {
    if (!this.gameOver) {
      this.selectedCell = { row, col };
      this.enteredColor = '';
    }
  }

  applyColor(): void {
    if (this.selectedCell) {
      const { row, col } = this.selectedCell;
      const correctAnswer = this.answers[row][col].toLowerCase();
      const userAnswer = this.enteredColor.toLowerCase();

      if (userAnswer === correctAnswer) {
        this.grid[row][col] = userAnswer; 
        this.correctAnswersCount++;
      } else {
        this.grid[row][col] = '#808080'; 
      }

      const answeredCells = this.grid.flat().filter((color) => color !== '#ffffff').length;

      if (answeredCells === this.totalQuestions) {
        this.gameOver = true;
        
        this.gameWon = this.correctAnswersCount >= this.totalQuestions * 0.8;

        if (this.gameOver) {
          const currentUser = this.authService.getCurrentUser();
          if (currentUser) {
            const result = this.gameWon ? 'won' : 'lost';
            this.historyService.logGame(currentUser.id, result).subscribe({
              next: (response) => console.log('Game logged successfully:', response),
              error: (err) => console.error('Error logging game:', err)
            });
          }
        }
      }

      this.closePopup();
    }
  }

  closePopup(): void {
    this.selectedCell = null;
    this.enteredColor = '';
  }

  replayGame(): void {
    this.rows = 0;
    this.cols = 0;
    this.grid = [];
    this.questions = [];
    this.answers = [];
    this.correctAnswersCount = 0;
    this.totalQuestions = 0;
    this.gameOver = false;
    this.gameWon = false;
    this.selectedCell = null;
    this.enteredColor = '';
  }
}
