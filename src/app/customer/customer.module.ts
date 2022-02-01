import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router, RouterModule, Routes } from '@angular/router';



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
       }

]
@NgModule({
  declarations: [
    SalesOrderComponent,
    InvoiceComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
}
)
export class CustomerModule { }
