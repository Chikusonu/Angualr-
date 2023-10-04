import { Component, ComponentRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from './room.interface';
import { RoomOver18Validator } from './room.validators';


@Component({
  selector: 'app-crossfield',
  templateUrl: './crossfield.component.html',
  styleUrls: ['./crossfield.component.css']
})
export class CrossfieldComponent {
  profileForm:FormGroup;

  rooms:Room[]=[
    {text:'room 1' , value:'room-1'},
    {text:'room 2' , value:'room-2'},
    {text:'room 3' , value:'room-3'}
  ]

  constructor(private formBuilder:FormBuilder, private roomOver18Validator:RoomOver18Validator){
  }
  ngOnInit(){
    this.profileForm=this.formBuilder.group({
      firstName :['',Validators.required],
      lastName :['',Validators.required],
      room:['',Validators.required],
      age :['',[Validators.required , NoNegativeNumbers]],
    },{
validators:[this.roomOver18Validator.onlyAccesRoomsOver18(18)],
updateOn:'blur'
    }
    );
  }
}

//custom validation function 
export function NoNegativeNumbers(control:AbstractControl){
return control.value < 0 ? {negativeNumber : true} :null;
}