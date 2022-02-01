import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailysalesComponent } from './dailysales/dailysales.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { NeworderComponent } from './neworder/neworder.component';



@NgModule({
  declarations: [
    DailysalesComponent,
    ExpensesComponent,
    NeworderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventoryModule { }
