import { Http, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import 'rxjs/add/operator/map';
import {RequestOptions} from "angular2/http";


@Injectable()
export class LCBOProductsRequest {

    //private static apiKey = 'MDphNDBhNTc4ZS05N2E2LTExZTUtOWFjNC0wM2ZlYzliMmYyMDI6ZzR4eWpKTzY3dGJIOUVHZVNDQlliMFhOdnF5MHJwYnA1bmEz';
    //
    //getDrinks(queryString){
    //
    //    let options = {
    //        search: 'q=' + queryString,
    //        headers: {
    //            Authorization: 'Token ' + LCBOAPI.apiKey
    //        }
    //    };
    //
    //    debugger;
    //
    //    return this.http.get('https://lcboapi.com/v2/products?', options)
    //        .map((res: Response) => res.json())
    //        .map(res => res.data); //Todo: probably don't run this map to get access to meta data
    //};

    constructor(http: Http, queryString:String) {

        let apiKey = 'MDphNDBhNTc4ZS05N2E2LTExZTUtOWFjNC0wM2ZlYzliMmYyMDI6ZzR4eWpKTzY3dGJIOUVHZVNDQlliMFhOdnF5MHJwYnA1bmEz';
        let options = new RequestOptions('GET', {
            Authorization: 'Token ' + apiKey
        }, null, '', `q=${queryString}`);



        debugger;
        return http.get('https://lcboapi.com/v2/products?', options).map((res:Response) => res.json())
            .map(res => res.data); //Todo: probably don't run this map to get access to meta data
    }

}
