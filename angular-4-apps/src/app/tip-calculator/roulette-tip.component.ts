import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-roulette-tip',
  templateUrl: './roulette-tip.component.html',
  styleUrls: ['./roulette-tip.component.css']
})
export class RouletteTipComponent implements OnInit {
  billAmount: number = 0;
  myTip: number = 0;
  finalTip: number = 0;
  power: number = 0;

  // Define the tip values in the same order as the wheel slices
  tips = [this.myTip, 100, 1, 0.10, 0.12, 0.15, 0.18, 0.2];

  @ViewChild('container', { static: true }) container!: ElementRef;
  number = Math.ceil(Math.random() * 1000);

  // Add a property to track the start time of the spin
  spinInterval: any;

  ngOnInit() {}

  setMyTip(value: number) {
    this.myTip = value;
    this.tips[0] = this.myTip;
  }
  

  // Start the spin when the button is pressed
  startSpin() {
    this.spinInterval = setInterval(() => {
      this.power = Math.min(this.power + 10, 100);  // increment power by 10 each tick, limit to 100
    }, 100);  // run every 100 ms
  }

  // Stop the spin when the button is released, and calculate the power based on the elapsed time
  stopSpin() {
    clearInterval(this.spinInterval);
    let power = this.power;  // use the power as set by the interval

    this.number += power * Math.ceil(Math.random() * 10) * 5;
    this.container.nativeElement.style.transform = `rotate(${this.number}deg)`;

    // Reset the power bar
    this.power = 0;

    // Wait for the CSS transition to finish, then calculate the tip
    setTimeout(() => {
      this.calculateTip();
    }, 5000); // Transition from spin finish for next available spin is 1s
  }

  calculateTip() {
    // Calculate the slice index
    let degrees = this.number % 360; // Get the angle relative to a full circle
    let reversedDegrees = (360 - degrees + 22.5) % 360; // Reverse the direction and adjust for the starting point
    let slice = Math.floor(reversedDegrees / 45); // Each slice is 45 degrees

    let tip = this.tips[slice];

    if (tip < 1) {
      this.finalTip = this.billAmount * tip ;
    } 
    if (tip > 1) {
      this.finalTip = tip;
    }
    if (tip == 1) {
      this.finalTip = this.billAmount * 2 ;
    }

  }
}
