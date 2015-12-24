System.register(['../action-dispatcher', 'rxjs/add/operator/map', "rxjs/Rx", "../drinks-api-service"], function(exports_1) {
    var action_dispatcher_1, Rx_1, drinks_api_service_1;
    var DrinkStore;
    return {
        setters:[
            function (action_dispatcher_1_1) {
                action_dispatcher_1 = action_dispatcher_1_1;
            },
            function (_1) {},
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (drinks_api_service_1_1) {
                drinks_api_service_1 = drinks_api_service_1_1;
            }],
        execute: function() {
            DrinkStore = (function () {
                function DrinkStore() {
                }
                DrinkStore._getDrinkAction = action_dispatcher_1.ActionDispatcher
                    .get('getDrink');
                DrinkStore._updateDrinks = DrinkStore._getDrinkAction
                    .flatMap(function (action) { return new drinks_api_service_1.LCBOProductsRequest(action.data.q); })
                    .subscribe(function (n) {
                    debugger;
                    DrinkStore.stream.next([]);
                });
                DrinkStore.stream = new Rx_1.ReplaySubject(1);
                return DrinkStore;
            })();
            exports_1("DrinkStore", DrinkStore);
        }
    }
});
//# sourceMappingURL=drink-store.js.map