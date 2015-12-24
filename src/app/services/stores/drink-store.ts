import { Injectable } from 'angular2/core';
import {ActionDispatcher} from '../action-dispatcher';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {ReplaySubject} from "rxjs/Rx";
import {LCBOProductsRequest} from "../drinks-api-service";
import {Http} from "angular2/http";


@Injectable()
export class DrinkStore {

    private _getDrinkAction: Observable = ActionDispatcher
        .get('getDrink');

    public stream = new ReplaySubject(1);

    constructor(private lcbo: LCBOProductsRequest){
        this._getDrinkAction
            .flatMap((action) => lcbo.getDrinks(action.data.q))
            .subscribe((list)=> this.stream.next(list));

    }

}