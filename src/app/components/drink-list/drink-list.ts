import { Component, View, NgFor, Input } from 'angular2/angular2';
import {LCBOStore} from "../../services/drinks-api-service";


@Component({
    selector: 'drink-list-item',
    template: `
    <span class="drink-name">{{drink.name}}</span>
    `,
    styles: [`
    :host {
    width: 75vw;
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


@Component({
    providers: [LCBOStore],
    selector: 'drink-list',
    template: `
    <h2>Drink List</h2>
    <drink-list-item *ng-for="#drink of drinkList" [drink]="drink"></drink-list-item>
    `,
    directives: [NgFor, DrinkListItem],
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
    constructor(lcbo: LCBOStore){
        lcbo.drinks.subscribe(drinks=> this.drinkList = drinks);
    }
}
