import { Http, Response } from 'angular2/http';
import { Injectable, Observable } from 'angular2/angular2';


@Injectable()
export class LCBOStore{

    drinks: Observable;

    private apiKey = 'MDpjYmEyYzk4NC05Nzk3LTExZTUtOWU1OS00NzQ2ODZmYzkyMWQ6bGZkQ0hGZWY5Q3ZHUHIwSmxISEFCeTRVYTh3NzdHV1FpUm00';

    constructor(http: Http){
        this.drinks = http.get('https://lcboapi.com/v2/products',
            {search: 'red wine', headers:{
                Authorization: 'Token ' + this.apiKey
            }})
            .map(res => JSON.parse(res._body))
            .map(res => res.data); //Todo: probably don't run this map to get access to meta data
    }

}
