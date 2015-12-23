import { Component, View, Input } from 'angular2/core';
import {DrinkQuery} from "../drink-query-input/drink-query";
import {NgFor} from "angular2/common";

@Component({
    selector: 'drink-list-item',
    template: `
    <span class="drink-name">{{drink.name}}</span>
    `,
    styles: [`
    :host {
    width: 90vw;
    }

    .drink-name {
    font-size: 18px;
    }

    `]
})
class DrinkListItem {
    @Input() drink: any;
    constructor() {
    }
}


//todo: figure out a cleaner way to handle output emissions
@Component({
    selector: 'drink-list',
    template: `
    <h2>Drink List</h2>
    <drink-query #c (changed)="updateDrinkList($event)"></drink-query>
    <drink-list-item *ngFor="#drink of drinkList" [drink]="drink"></drink-list-item>
    `,
    directives: [NgFor, DrinkListItem, DrinkQuery],
    styles: [
        `
    :host {
    width: 95vw;
    display: flex;
    flex-direction: column;
    }
    `]
})
export class DrinkList {
    drinkList: Array<any>;

    updateDrinkList(response){
        this.drinkList = response;
    }
    constructor(){}
}
