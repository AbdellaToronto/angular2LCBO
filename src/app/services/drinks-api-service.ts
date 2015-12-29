import { Http, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import 'rxjs/add/operator/map';
import {RequestOptions, Headers} from "angular2/http";


@Injectable()
export class LCBOProductsRequest {

    getDrinks(queryString){
        let apiKey = 'MDphNDBhNTc4ZS05N2E2LTExZTUtOWFjNC0wM2ZlYzliMmYyMDI6ZzR4eWpKTzY3dGJIOUVHZVNDQlliMFhOdnF5MHJwYnA1bmEz';

        let options = {
            search: 'q=' + queryString,
            headers: new Headers({
                'Authorization': `Token ${apiKey}`
            })
        };

        return this.http.get('https://lcboapi.com/v2/products?', options)
            .map((res:Response) => res.json())
            .map(res => res.data); //Todo: probably don't run this map to get access to meta data
    };


    getDrinksByCat(catName){
        let apiKey = 'MDphNDBhNTc4ZS05N2E2LTExZTUtOWFjNC0wM2ZlYzliMmYyMDI6ZzR4eWpKTzY3dGJIOUVHZVNDQlliMFhOdnF5MHJwYnA1bmEz';

        let options = {
            search: 'q=' + catName,
            headers: new Headers({
                'Authorization': `Token ${apiKey}`
            })
        };

        return this.http.get(`https://lcboapi.com/v2/products?`, options)
            .map((res:Response) => res.json())
            .map(res => res.data); //Todo: probably don't run this map to get access to meta data
    };

    constructor(private http: Http) {}

}


@Injectable()
export class LCBOCategoriesRequest {

    getCategories(){
        let apiKey = 'MDphNDBhNTc4ZS05N2E2LTExZTUtOWFjNC0wM2ZlYzliMmYyMDI6ZzR4eWpKTzY3dGJIOUVHZVNDQlliMFhOdnF5MHJwYnA1bmEz';

        let options = {
            headers: new Headers({
                'Authorization': `Token ${apiKey}`
            })
        };

        return this.http.get('https://lcboapi.com/v2/categories', options)
            .map((res:Response) => res.json())
            .map(res => res.data);
    };

    constructor(private http: Http) {}

}
