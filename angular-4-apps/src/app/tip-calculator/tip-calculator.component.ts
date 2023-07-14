import { Component } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent {
  billAmount: number =  0; // initial bill amount
  tipPercentage: number = 0; // initial tip percentage
  tipAmount: number = 0; // initial tip amount
  totalBillWithTip: number = 0; // initial total bill

  // This function is called whenever the bill amount or tip percentage changes
  calculateTip(): void {
    this.tipAmount = this.billAmount * (this.tipPercentage / 100);
    this.totalBillWithTip = this.billAmount + this.tipAmount;
    console.log(this.totalBillWithTip);
  }
  
}
