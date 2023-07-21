import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-manual-bill-split',
  templateUrl: './manual-bill-split.component.html',
  styleUrls: ['./manual-bill-split.component.css']
})

export class ManualBillSplitComponent 
{
  displayedColumns: string[] = ['item', 'cost'];
  transactionsList: Transaction[][] = [[]];
  itemForm = new FormGroup({
    item: new FormControl(''),
    cost: new FormControl(''),
  });

  addTable() {
    this.transactionsList.push([]);
  }

  addItem(i: number) {
    if (this.itemForm.valid) {
        const formValue = this.itemForm.value;
        const newItem: Transaction = { 
            item: formValue.item ?? '', 
            cost: parseFloat(formValue.cost ?? '0') 
        };
        this.transactionsList[i] = [...this.transactionsList[i], newItem];
        this.itemForm.reset();
    }
}



  /** Gets the total cost of all transactions in a specific table. */
  getTotalCost(index: number) {
    return this.transactionsList[index].map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
