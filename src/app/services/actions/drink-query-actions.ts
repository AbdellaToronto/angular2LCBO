import { Injectable } from 'angular2/core';
import {ActionDispatcher} from "../action-dispatcher";


@Injectable()
export class DrinkActions {

    public static getDrinks = (query:String) => {
        ActionDispatcher.dispatch({name: 'getDrink', data: {q: query}});
    };

    public static getDrinksByCategory = (query: Number) => {
        ActionDispatcher.dispatch({name: 'getDrinkByCategory', data: {category: query}})
    };

    constructor(){}
}