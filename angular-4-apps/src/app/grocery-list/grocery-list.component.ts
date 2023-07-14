import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {
  newItem = '';
  items: string[] = [];

  addItem() {
    if (this.newItem) {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  clearItems() {
    this.items = [];
  }


}
