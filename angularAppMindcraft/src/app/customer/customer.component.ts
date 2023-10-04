import { Component } from '@angular/core';
import { Customer } from './customer.model';
import { CustomerRestApiService } from '../service/customer.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent {

  custObject: Customer = new Customer();
  customers: Array<Customer> = new Array<Customer>();
  route: any;
loginUserFirstName:string="Dummy";
  constructor(private customerRestApiservice: CustomerRestApiService,private router:Router) {
    this.loadCustomer();
    this.loginUserFirstName=JSON.parse(localStorage.getItem("UserName")||"")
  }

  clear() {
    this.custObject = new Customer();
  }

  add() {
    this.customers.push(this.custObject);
    this.clear();
  }

  select(selectedCustomer: Customer) {
    this.custObject = Object.assign({}, selectedCustomer);
  }

  update() {
    const customerToUpdateIndex = this.customers.findIndex(customer => customer.Id === this.custObject.Id);

    if (customerToUpdateIndex !== -1) {
      this.customers[customerToUpdateIndex].Name = this.custObject.Name;
      this.customers[customerToUpdateIndex].Amount = this.custObject.Amount;
      this.clear();
    } else {
      alert(`Customer with ID ${this.custObject.Id} does not exist.`);
    }
  }

  delete() {
    if (this.custObject.Id) {
      const index = this.customers.findIndex(item => item.Id === this.custObject.Id);

      if (index !== -1) {
        this.customers.splice(index, 1); // Remove the customer from the array
        this.clear();
      } else {
        window.alert("Customer with the specified ID not found.");
      }
    } else {
      window.alert("Please select a customer to delete.");
    }
  }

  hasError(typeofvalidator: string, controlname: string): Boolean {
    return this.custObject.formCustomerGroup.controls[controlname].hasError(typeofvalidator);
  }

  loadCustomer() {
    return this.customerRestApiservice.getCustomers().subscribe((data: Customer[]) => {
      console.log(data);
      this.customers = data;
    });
  }

  postToServer() {
    var customerdto: any = {};
    customerdto.id = this.custObject.Id;
    customerdto.Name = this.custObject.Name;
    customerdto.Amount = this.custObject.Amount;

    this.customerRestApiservice.postCustomers(customerdto).subscribe((data: {}) => {
      window.alert('data inserted!!!');
      this.loadCustomer(); // Call the function to refresh the customer list after inserting.
    });
  }

  deleteFromServer(){
    let id= this.custObject.Id;
    this.customerRestApiservice.deleteCustomer(id).
    subscribe((data:{})=>{
      window.alert("date deleted")
    });
    this.loadCustomer()
  }

  // loadCustomers(){
  //   return this.customerRestApiservice.getCustomers().subscribe((data:Customer[])=>{
  //     console.log(data)
  //     this.customers=data;
  //     this.customers=new Array<Customer>();
  //     for(let item of data){

  //       let cust :Customer=new Customer();
  //       cust.id
  //     }
  //   })
  // }

  loadCustomers(){
    return this.customerRestApiservice.getCustomers().subscribe((data:Customer[])=>{
      console.log(data)
     // this.customers=data;
     this.customers=new Array<Customer>();//clear all element
     for(let item of data){
      let cust:Customer=new Customer();
      cust.Id=item.Id;
      cust.Name=item.Name;
      cust.Amount=item.Amount;
      this.customers.push(cust);
     }
    });
  }

  updateToServer(){
    var customerdto:any={};
    customerdto.id=this.custObject.Id;
    customerdto.CustName=this.custObject.Name;
    customerdto.Amount=this.custObject.Amount;

    this.customerRestApiservice.updateCustomer(customerdto.id,
      customerdto).subscribe((data:{})=>{
        window.alert("data is updated")
      });
      this.loadCustomers();
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("UserName");
    this.router.navigate(['login']);
  }
}