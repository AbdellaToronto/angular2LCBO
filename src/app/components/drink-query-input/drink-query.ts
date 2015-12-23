import { Component, View, Output, EventEmitter } from 'angular2/core';
import {LCBOStore} from "../../services/drinks-api-service";

@Component({
    providers: [LCBOStore],
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
    @Output() changed:EventEmitter = new EventEmitter();


    //todo: this feels clumsy, ask about better handling of event updates w/ data
    searchForDrinks(drinkString){
        this.lcbo.getDrinks(drinkString)
        .subscribe(drinks => this.changed.next(drinks));
    }

    constructor(private lcbo: LCBOStore) {
        this.searchForDrinks('White');
    }
}
