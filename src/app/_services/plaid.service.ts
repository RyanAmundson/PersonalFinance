import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';



@Injectable() 
export class Plaid {

    constructor(private http:HttpClient){}

    test() {
        return this.http.get('https://sandbox.plaid.com/institutions/get',
        {
            params: {
                "client_id": "[CLIENT_ID]",
                "secret": "[SECRET]",
                "count": "200",
                "offset": "0"
            }
        });
    }


}