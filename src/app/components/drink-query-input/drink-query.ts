import { Component, View, Output, EventEmitter } from 'angular2/core';

@Component({
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

    searchForDrinks = (drinkString) => this.changed.next(drinkString);

    constructor() {
        this.searchForDrinks('White');
    }
}
