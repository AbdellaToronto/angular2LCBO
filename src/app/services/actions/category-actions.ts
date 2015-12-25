import { Injectable } from 'angular2/core';
import {ActionDispatcher} from "../action-dispatcher";


@Injectable()
export class CategoryActions {

    public static getCategories = () => {
        ActionDispatcher.dispatch({name: 'getCategories', data: null});
    };

    constructor(){}
}