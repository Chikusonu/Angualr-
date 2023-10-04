import { FormGroup,FormControl,Validator,FormBuilder, Validators } from "@angular/forms";

export class Customer {
    Id : string;
    Name : string;
    Amount : number;
    formCustomerGroup :FormGroup;
    constructor(){
        var _builder=new FormBuilder();
        this.formCustomerGroup=_builder.group({});
        this.formCustomerGroup.addControl("CustomerNameControl",new FormControl('',Validators.required));
        var validationcollection=[];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern("^[0-9]{4,4}$"))

        this.formCustomerGroup.addControl("CustomerIdControl",new FormControl('',Validators.compose(validationcollection)));

    }
}
