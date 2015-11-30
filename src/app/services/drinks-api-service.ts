import { Http, Response } from 'angular2/http';
import { Injectable, Observable } from 'angular2/angular2';


@Injectable()
export class LCBOStore{

    http: Http;

    private apiKey = 'MDphNDBhNTc4ZS05N2E2LTExZTUtOWFjNC0wM2ZlYzliMmYyMDI6ZzR4eWpKTzY3dGJIOUVHZVNDQlliMFhOdnF5MHJwYnA1bmEz';

    public getDrinks(queryString){
        return this.http.get('https://lcboapi.com/v2/products?',
            {
                search: 'q=' + queryString,
                headers:{
                Authorization: 'Token ' + this.apiKey
                }
            })
            .map(res => JSON.parse(res._body))
            .map(res => res.data); //Todo: probably don't run this map to get access to meta data
    }

    constructor(http: Http){
        this.http = http;
    }

}
