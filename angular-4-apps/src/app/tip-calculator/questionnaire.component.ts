import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { TipDialogComponent } from './tip-dialog.component';  // Import the dialog component

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class QuestionnaireComponent {
  currentQuestion = 0;
  tip = 0;
  questions = [
    { 
      title: "I Have the Ability to Quickly Determine Your Tip", 
      options: ["Let's Do It"],
      answer: ''
    },
    { 
      title: 'Was the meal buffet style or did a server attend to you?', 
      options: ['Buffet', 'Server attended', 'Mixed - some buffet, some server attendance'],
      answer: ''
    },
    { 
      title: 'How quickly did the server take your order?', 
      options: ['Immediately', 'Took a while', 'Had to flag them down'],
      answer: ''
    },
    { 
      title: 'How was the quality of your meal?', 
      options: ['Excellent', 'Good', 'Average', 'Poor'],
      answer: ''
    },
    { 
      title: 'Was your food delivered in a timely manner?', 
      options: ['Very timely', 'Acceptable wait', 'Long wait'],
      answer: ''
    },
    { 
      title: 'How was the server’s attitude?', 
      options: ['Very friendly', 'Polite', 'Unfriendly'],
      answer: ''
    }
  ];

  constructor(public dialog: MatDialog) {} 

  selectAnswer(answer: string) {
    this.questions[this.currentQuestion].answer = answer;
  
    setTimeout(() => {
      if (this.currentQuestion < this.questions.length - 1) {
        this.nextQuestion();
      } else {
        this.calculateTip();
      }
    }, 500);
  }
  
  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1 && this.questions[this.currentQuestion].answer !== '') {
      this.currentQuestion++;
    }
    else if (this.currentQuestion === this.questions.length - 1 && this.questions[this.currentQuestion].answer !== '') {
      this.calculateTip();
    }
  }

  prevQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
    }
  }

  calculateTip() {
    let tip = 12;    
    this.questions.forEach(question => {
      switch(question.title) {
        case "I Have the Ability to Quickly Determine Your Tip":
          // no tip change for this question
          break;
        case 'Was the meal buffet style or did a server attend to you?':
          if (question.answer === 'Buffet') tip -= 1;
          if (question.answer === 'Server attended') tip += 2;
          if (question.answer === 'Mixed - some buffet, some server attendance') tip += 1;
          break;
        case 'How quickly did the server take your order?':
          if (question.answer === 'Immediately') tip += 2;
          if (question.answer === 'Took a while') tip -= 1;
          if (question.answer === 'Had to flag them down') tip -= 2;
          break;
        case 'How was the quality of your meal?':
          if (question.answer === 'Excellent') tip += 3;
          if (question.answer === 'Good') tip += 2;
          if (question.answer === 'Average') tip -= 1;
          if (question.answer === 'Poor') tip -= 3;
          break;
        case 'Was your food delivered in a timely manner?':
          if (question.answer === 'Very timely') tip += 2;
          if (question.answer === 'Acceptable wait') tip -= 1;
          if (question.answer === 'Long wait') tip -= 2;
          break;
        case 'How was the server’s attitude?':
          if (question.answer === 'Very friendly') tip += 3;
          if (question.answer === 'Polite') tip += 1;
          if (question.answer === 'Unfriendly') tip -= 2;
          break;
        default:
          break;
      }
    });

    // Open the dialog with the calculated tip
    const dialogRef = this.dialog.open(TipDialogComponent, {
      data: { tip: tip }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'retake') {
        this.reset();
      }
    });
  }

  reset() {
    this.currentQuestion = 0;
    this.questions.forEach(question => {
      question.answer = '';
    });
  }

  getSmileyPosition(): string {
    const tipPercentage = Math.max(0, Math.min(100, this.tip)) / 100;
    const position = tipPercentage * 100; /* Adjust based on your image */
  
    // Return the position as a percentage
    return `-${position}%`;
  }

  getOptionRows() {
    let options = this.questions[this.currentQuestion].options;
    let optionRows = [];
    for (let i = 0; i < options.length; i += 2) {
      optionRows.push(options.slice(i, i + 2));
    }
    return optionRows;
  }
  


}
