import { Component, View } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
//import { CustomersComponent } from '../customers/customers-component';
//import { OrdersComponent } from '../orders/orders-component';
import {DrinkList} from '../drink-list/drink-list'

@Component({
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/',              as: 'DrinkList',  component: DrinkList }
  //{ path: '/drink/:id',    as: 'Drink',     component: OrdersComponent    }
])
export class AppComponent {

}
