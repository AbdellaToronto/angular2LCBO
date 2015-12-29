import { Component, View } from 'angular2/core';
import {DrinkList} from '../drink-list/drink-list';
import {CategoryList} from "../category-list/category-list";

@Component({
  selector: 'app',
  styles: [`

  :host {

  display: flex;


  }
  `],
  template: `
  <category-list></category-list>
  <drink-list></drink-list>
  `,
  directives: [DrinkList, CategoryList]
})
export class AppComponent {

}
