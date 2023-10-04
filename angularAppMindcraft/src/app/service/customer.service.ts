import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";
import { Customer } from "../customer/customer.model";






@Injectable({
    providedIn:'root',
})
export class CustomerRestApiService {
    //api define
    apiURL='http://localhost:3000';


    constructor(private http : HttpClient){}

    //crud methoda for consuming restfill APi

    //hrrp options

    httpOptions={
        headers:new HttpHeaders({
            'Content-Type':'application/json'
        }),
    };

    //hhtp client api get() method to fetch cutsomer

    getCustomers():Observable<Customer[]>{
        return this.http.get<Customer[]>(this.apiURL +'/customer')
        .pipe(retry(1),catchError(this.handleError));
    }


    postCustomers(customer: any) : Observable<Customer[]> {
        console.log(customer)
       
        return this.http.post<Customer[]>(this.apiURL + '/customer', JSON.stringify(customer), this.httpOptions).pipe(retry(1), catchError(this.handleError))
    }

    deleteCustomer(id: any){
        return this.http
        .delete<Customer>(this.apiURL+'/customer/'+id, this.httpOptions)
        .pipe(retry(1), catchError(this.handleError));
    }

    updateCustomer(id:any,customer:any):Observable<Customer>{
        return this.http.put<Customer>(this.apiURL+'/customer/'+id,JSON.stringify(customer),this.httpOptions).pipe(retry(1),catchError(this.handleError));
    }

    //error handling 

    handleError(error: any){
        let errorMessage ='';
        if(error.error instanceof ErrorEvent){
            //get client side error
            errorMessage=error.error.message;
        }else{
            //server side error
            errorMessage=`error code : ${error.status}\nMessage : ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }
}