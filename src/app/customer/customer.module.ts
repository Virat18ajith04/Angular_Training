import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditpersonComponent } from '../editperson/editperson.component';



const routes : Routes= [
       {
        path : 'dashboard',
        component : DashboardComponent
       },
       {
         path:'invoice',
         component:InvoiceComponent
       },
       {
         path : 'salesorder',
         component : SalesOrderComponent
       },
       {
        path : 'edit/:id',
        component : EditpersonComponent
       },

]
@NgModule({
  declarations: [
    SalesOrderComponent,
    InvoiceComponent,
    DashboardComponent,
    EditpersonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
}
)
export class CustomerModule { }
