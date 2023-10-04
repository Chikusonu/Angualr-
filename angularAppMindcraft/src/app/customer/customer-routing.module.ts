import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { customerdetail } from './customer.customerdetail.component';

const customerroutes:Routes=[
    {path:'',component:CustomerComponent},
    {path:':id',component:customerdetail}
];
@NgModule({
    imports: [RouterModule.forChild(customerroutes)],
    exports: [RouterModule]
  })
  export class CustomerRoutingModule { }
  