import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from '../usercontrol/grid.component';
import { customerdetail } from './customer.customerdetail.component';




@NgModule({
  declarations: [CustomerComponent,GridComponent],
  imports: [
    CommonModule,CustomerRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers:[],
  bootstrap:[CustomerComponent]
})
export class CustomerModule { }
