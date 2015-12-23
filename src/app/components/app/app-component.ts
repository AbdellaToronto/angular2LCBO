import { Component, View } from 'angular2/core';
import {DrinkList} from '../drink-list/drink-list';

@Component({
  selector: 'app',
  template: `
  <drink-list></drink-list>
  `,
  directives: [DrinkList]
})
export class AppComponent {

}
