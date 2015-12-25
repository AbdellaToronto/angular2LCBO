import { Component, View, Input } from 'angular2/core';
import {NgFor} from "angular2/common";
import {CategoryStore} from '../../services/stores/category-store'
import {CategoryActions} from "../../services/actions/category-actions";
import {LCBOCategoriesRequest} from "../../services/drinks-api-service";


@Component({

    selector: 'category-item',
    template: `
    <span class="category-name">{{category.name}}</span>
    `,
    styles: [`
    :host {
    width: 90vw;
    }

    .category-name {
    font-size: 18px;
    }

    `]
})
class CategoryItem {
    @Input() category: any;
    constructor() {
    }
}

@Component({
    providers: [CategoryActions, CategoryStore, LCBOCategoriesRequest],
    selector: `category-list`,
    template: `
    <category-item *ngFor="#category of categoryList" [category]="category"></category-item>
    `,
    directives: [NgFor, CategoryItem],
    styles: [`
    :host {
    width: 95vw;
    display: flex;
    flex-direction: column;
    }
    `]
})
export class CategoryList {
    categoryList: Array<any>;

    requestNewCategories = CategoryActions.getCategories;

    constructor(private _categoryStore: CategoryStore){

        this.requestNewCategories();

        _categoryStore.stream.subscribe(res => this.categoryList = res);
    }
}
