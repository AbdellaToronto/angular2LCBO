import { Component, View, Input, Output, EventEmitter } from 'angular2/core';
import {NgFor} from "angular2/common";
import {CategoryStore} from '../../services/stores/category-store'
import {CategoryActions} from "../../services/actions/category-actions";
import {LCBOCategoriesRequest} from "../../services/drinks-api-service";
import {DrinkActions} from "../../services/actions/drink-query-actions";


@Component({
    selector: 'category-item',
    directives: [NgFor, CategoryItem],
    template: `
    <div class="category-name">
    <h4 (click)="searchForDrinks(category.name)" >{{category.name}}</h4>
    <div class="sub-cats">
        <category-item
        *ngFor="#subcategory of category.children"
        [category]="subcategory" (selected)="searchForDrinks($event)"></category-item>
    </div>
    </div>
    `,
    styles: [`
    :host {
    width: 200px;
    }

    .sub-cats {
    padding-left: 20px;
    }

    .category-name {
    font-size: 18px;
    }

    `]
})
class CategoryItem {
    @Input() category: any;
    @Output() selected:EventEmitter = new EventEmitter();

    searchForDrinks = (drinkString) => this.selected.next(drinkString);


    constructor() {
    }
}

@Component({
    providers: [CategoryActions, DrinkActions, CategoryStore, LCBOCategoriesRequest],
    selector: `category-list`,
    template: `
        <span>**Sub Categories not working as intended yet**</span>
    <category-item *ngFor="#category of categoryList" [category]="category" (selected)="requestNewDrinks($event)"></category-item>
    `,
    directives: [NgFor, CategoryItem],
    styles: [`
    :host {
    width: 30vw;
    display: flex;
    flex-direction: column;
    }`]
})
export class CategoryList {
    categoryList: Array<any>;

    requestNewCategories = CategoryActions.getCategories;
    requestNewDrinks = (res)=>{
        DrinkActions.getDrinksByCategory(res);
    };

    constructor(private _categoryStore: CategoryStore){

        this.requestNewCategories();

        _categoryStore.stream.subscribe(res => this.categoryList = res);
    }
}
