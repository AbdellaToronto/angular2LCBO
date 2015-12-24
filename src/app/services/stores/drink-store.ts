import { Injectable } from 'angular2/core';
import {ActionDispatcher} from '../action-dispatcher';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {ReplaySubject} from "rxjs/Rx";
import {LCBOProductsRequest} from "../drinks-api-service";
import {Http} from "angular2/http";


export class DrinkStore {


    private static _getDrinkAction: Observable = ActionDispatcher
        .get('getDrink');


    private static _updateDrinks = DrinkStore._getDrinkAction
    .flatMap((action) => new LCBOProductsRequest(action.data.q))
    .subscribe((n) => {
        debugger;
        DrinkStore.stream.next([]);
    });

    public static stream = new ReplaySubject(1);



    constructor(){}

}