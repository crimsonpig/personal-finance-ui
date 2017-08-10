import { Component, Input, OnInit } from '@angular/core';

import { BudgetItem } from '../budgetitem';

@Component({
  selector: 'app-budget-crud-entries',
  templateUrl: './budget-crud-entries.component.html',
  styleUrls: ['./budget-crud-entries.component.css']
})
export class BudgetCrudEntriesComponent implements OnInit {

  @Input() parentCategory: string;
  @Input() newBudgetItems: BudgetItem[];
  @Input() budgetItems: BudgetItem[];

  constructor() { }

  ngOnInit() {
  }

  addNewItem(){
    this.newBudgetItems.push(new BudgetItem());
  }

  saveNewItem(itemToSave: BudgetItem){
    //Call backend web-service IRL
    this.budgetItems.push(itemToSave);
    this.removeNewItem(itemToSave);
  }

  removeNewItem(itemToRemove: BudgetItem){
    const idx: number = this.newBudgetItems.indexOf(itemToRemove);
    this.newBudgetItems.splice(idx, 1);
  }

  ascendingOrder: boolean = true;
  lastSortField: string = '';

  sortItems(sortField: string){
    if(sortField != this.lastSortField){
        this.ascendingOrder = true;
    }

    this.budgetItems.sort((a: BudgetItem, b: BudgetItem) => {
        if(a[sortField] < b[sortField]){
            return -1;
        } else if (a[sortField] > b[sortField]){
            return 1;
        } else {
            return 0;
        }
    });
    if(!this.ascendingOrder){
        this.budgetItems.reverse();
    }
    this.ascendingOrder = !this.ascendingOrder;
    this.lastSortField = sortField;
  }

  removeExistingItem(itemToRemove: BudgetItem){
    if(confirm('Are you sure you want to delete this item?')){
        const idx: number = this.budgetItems.indexOf(itemToRemove);
        this.budgetItems.splice(idx, 1);
    }
  }

}
