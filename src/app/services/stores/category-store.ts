import { Injectable } from 'angular2/core';
import {ActionDispatcher} from '../action-dispatcher';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {ReplaySubject} from "rxjs/Rx";
import {LCBOCategoriesRequest} from "../drinks-api-service";
import {Http} from "angular2/http";


@Injectable()
export class CategoryStore {

    private _getCategories:Observable = ActionDispatcher
        .get('getCategories');

    public stream = new ReplaySubject(1);

    constructor(private lcbo:LCBOCategoriesRequest) {
        this._getCategories
            .flatMap(() => lcbo.getCategories())
            .map((list)=> list.sort((a, b) => a.depth - b.depth).reverse())
            .flatMap((unStructuredCategoriesArray) => {
                return Observable.fromArray(unStructuredCategoriesArray)
                .groupBy((category) => category.depth)
                .flatMap(($catByDepth)=> $catByDepth.toArray())
                .reduce((prev, next)=>{
                    return next.map((nextItem)=> {
                        nextItem.children = prev.filter((pItem)=> pItem.links.parent_category === nextItem.id);
                        return nextItem;
                    })
                }, []);
            })
            .subscribe((list)=> this.stream.next(list));

    }

}