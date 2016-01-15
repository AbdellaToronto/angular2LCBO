import { Component, View, Input } from 'angular2/core';
import {DrinkQuery} from "../drink-query-input/drink-query";
import {NgFor, CurrencyPipe, NgStyle} from "angular2/common";
import {DrinkActions} from "../../services/actions/drink-query-actions";
import {DrinkStore} from "../../services/stores/drink-store";
import {LCBOProductsRequest} from "../../services/drinks-api-service";


@Component({
    selector: 'drink-list-item',
    pipes: [CurrencyPipe],
    directives: [NgStyle],
    template: `

      <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="{{drink.get('image_url')}}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">
      <span>{{drink.get('name')}}</span>
      <span [ngStyle]="{'color':drink.get('price_in_cents') === drink.get('regular_price_in_cents') ? 'grey' : 'green' }"
      >{{drink.get('price_in_cents') / 100 | currency:'USD':true:'1.2-2'}}</span>
      </span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{{drink.get('name')}}<i class="material-icons right">close</i></span>
      <p>Origin: {{drink.get('origin')}}</p>
      <p>Package: {{drink.get('package')}}</p>
      <p>Style: {{drink.get('style')}}</p>
      <p>Reg Price: {{drink.get('regular_price_in_cents') / 100 | currency:'USD':true:'1.2-2'}}</p>

    </div>
  </div>



    `,
    styles: [`
    :host {
        width: 30%;
        margin: 10px;
    }

    `]
})
class DrinkListItem {
    @Input() drink: any;
    constructor() {
    }
}


@Component({
    providers: [DrinkActions, DrinkStore, LCBOProductsRequest],
    selector: `drink-list`,
    template: `

    <section class="header">
        <drink-query (changed)="requestNewDrinks($event)"></drink-query>
    </section>
    <section class="list">
        <drink-list-item *ngFor="#drink of drinkList" [drink]="drink"></drink-list-item>
    </section>
    `,
    directives: [NgFor, DrinkListItem, DrinkQuery],
    styles: [`
    :host {
    width: 80vw;
    height: 100vh;

    }

    .list {
    overflow: scroll;
    display: flex;
    flex-flow: wrap;
    }
    `]
})
export class DrinkList {
    drinkList: Array<any>;

    requestNewDrinks = DrinkActions.getDrinks;

    constructor(private drinkStore: DrinkStore){
        drinkStore.stream
            .subscribe(res => this.drinkList = res.toArray());
    }
}
