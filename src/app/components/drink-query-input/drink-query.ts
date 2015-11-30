import { Component, View, NgFor, Output, Observable, EventEmitter } from 'angular2/angular2';
import {LCBOStore} from "../../services/drinks-api-service";

@Component({
    provider: [LCBOStore],
    selector: 'drink-query',
    template: `
    <label for="drinkInput">Query: </label>
    <input id="drinkInput" type="text" #q>
    <button (click)="searchForDrinks(q.value)">Search</button>
    `,
    styles: [`
    :host {
    width: 90vw;
    }
 `]
})
export class DrinkQuery {
    lcbo: LCBOStore;
    @Output() change:EventEmitter = new EventEmitter();
    query: Array<any> = [];

    //todo: this feels clumsy, ask about better handling of event updates w/ data
    searchForDrinks(drinkString){
        this.lcbo.getDrinks(drinkString)
        .do(drinks => this.query = drinks)
        .subscribe(drinks => this.change.next(drinks));
    }

    constructor(lcbo: LCBOStore) {
        this.lcbo = lcbo;
    }
}
