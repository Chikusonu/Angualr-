import { Injectable } from "@angular/core";
import { FormGroup ,ValidatorFn} from "@angular/forms";

@Injectable({providedIn:'root'})
export class RoomOver18Validator {

public onlyAccesRoomsOver18(minAge:number): ValidatorFn{
    return (FormGroup:FormGroup)=> {
    const ageControl = FormGroup.get('age');
    const roomControl = FormGroup.get('room');
     const ageValue =  ageControl.value;
     const roomsValue =  roomControl.value;

     if(ageValue >= minAge){
        return null;
     }
     if(roomsValue == 'room-1' || roomsValue === 'room-2' || roomsValue === 'rooms-3'){
        return {roomOnlyWith18 :true};
     }
     return null;

    }

}

}