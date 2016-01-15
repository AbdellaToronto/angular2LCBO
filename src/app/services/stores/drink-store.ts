import { Injectable } from 'angular2/core';
import {ActionDispatcher} from '../action-dispatcher';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {ReplaySubject, Observable} from "rxjs/Rx";
import {LCBOProductsRequest} from "../drinks-api-service";
import {Http} from "angular2/http";
//import  {Set, Map} from 'immutable';
declare const Immutable: any;


@Injectable()
export class DrinkStore {

    private _getDrinkAction:Observable = ActionDispatcher
        .get('getDrink')
        .flatMap((action) => this.lcbo.getDrinks(action.data.q));

    private _getDrinkByCategoryAction:Observable = ActionDispatcher
        .get('getDrinkByCategory')
        .flatMap((action) => this.lcbo.getDrinksByCat(action.data.category));

    private _drinkActions = [this._getDrinkAction, this._getDrinkByCategoryAction];

    public stream = new ReplaySubject(1);

    constructor(private lcbo:LCBOProductsRequest) {

        Observable.merge(...this._drinkActions)
            .flatMap((list)=> Observable.fromArray(list).map((drink)=> Immutable.Map(drink)).toArray())
            .map((list)=> Immutable.List.of(...list))
            .subscribe((list)=> this.stream.next(list));

    }

}