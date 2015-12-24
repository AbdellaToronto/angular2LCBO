import { Component, View, Input } from 'angular2/core';
import {DrinkQuery} from "../drink-query-input/drink-query";
import {NgFor} from "angular2/common";
import {DrinkActions} from "../../services/actions/drink-query-actions";
import {DrinkStore} from "../../services/stores/drink-store";


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
    providers: [DrinkActions],
    selector: `drink-list`,
    template: `
    <h2>Drink List</h2>
    <drink-query #c (changed)="requestNewDrinks($event)"></drink-query>
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

    requestNewDrinks = DrinkActions.getDrinks;

    constructor(){
        DrinkStore.stream.subscribe();
    }
}
