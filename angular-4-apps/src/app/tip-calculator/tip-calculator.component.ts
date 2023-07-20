import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css'],
  animations: [
    trigger('fadeInAnimation', [
        state('in', style({opacity: 1})),
        transition(':enter', [
          style({opacity: 0}),
          animate(600)
        ]),
    ])
  ]
})
export class TipCalculatorComponent {
  billAmount = 0;
  tipPercentage = 0;
  tipAmount = 0;
  totalBillWithTip = 0;
  numberOfPeople = 1;
  eachPersonPays = 0;
  splitBill: boolean = false;

  calculateTip() {
    this.tipAmount = (this.billAmount * this.tipPercentage) / 100;
    this.totalBillWithTip = this.billAmount + this.tipAmount;
    this.eachPersonPays = this.totalBillWithTip / this.numberOfPeople;
  }

  resetValues() {
    this.billAmount = 0;
    this.tipPercentage = 0;
    this.numberOfPeople = 1;
    this.tipAmount = 0;
    this.totalBillWithTip = 0;
    this.eachPersonPays = 0;
}

}