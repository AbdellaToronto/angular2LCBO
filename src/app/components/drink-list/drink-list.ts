import { Component, View, NgFor, Input } from 'angular2/angular2';
import {LCBOStore} from "../../services/drinks-api-service";
import {DrinkQuery} from "../drink-query-input/drink-query";

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
    providers: [LCBOStore],
    selector: 'drink-list',
    template: `
    <h2>Drink List</h2>
    <drink-query #c (change)="updateDrinkList(c.query)"></drink-query>
    <drink-list-item *ng-for="#drink of drinkList" [drink]="drink"></drink-list-item>
    `,
    directives: [NgFor, DrinkListItem, DrinkQuery],
    styles: [`
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
    constructor(lcbo: LCBOStore){
        lcbo.getDrinks('white wine').subscribe(drinks=> this.drinkList = drinks);
    }
}
