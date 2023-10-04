import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name : 'reversestring'})
export class ReverseStringPipe {
    transform(value : string) : string {
        return value.split('').reverse().join("");
    }
}

