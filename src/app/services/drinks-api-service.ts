import { Http, Response, RequestOptionsArgs } from 'angular2/http';
import { Injectable } from 'angular2/core';
import 'rxjs/add/operator/map';


@Injectable()
export class LCBOStore{

    private apiKey = 'MDphNDBhNTc4ZS05N2E2LTExZTUtOWFjNC0wM2ZlYzliMmYyMDI6ZzR4eWpKTzY3dGJIOUVHZVNDQlliMFhOdnF5MHJwYnA1bmEz';

    private options: Object;

    public getDrinks(queryString){

        this.options = {
            search: 'q=' + queryString,
            headers: {
                Authorization: 'Token ' + this.apiKey
            }
        };

        return this.http.get('https://lcboapi.com/v2/products?', this.options)
            .map((res: Response) => res.json())
            .map(res => res.data); //Todo: probably don't run this map to get access to meta data
    }

    constructor(private http: Http){}

}
