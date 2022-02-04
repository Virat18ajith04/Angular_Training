import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerModule } from './customer/customer.module';
import { LayoutComponent } from './layout/layout.component';
const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path:'_customer',
    component:LayoutComponent,
    children : [
{
          path : '',
          loadChildren:() => import('./customer/customer.module').then(m=> m.CustomerModule)
        }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
