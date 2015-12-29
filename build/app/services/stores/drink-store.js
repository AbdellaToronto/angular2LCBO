System.register(['angular2/core', '../action-dispatcher', 'rxjs/add/operator/map', "rxjs/Rx", "../drinks-api-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, action_dispatcher_1, Rx_1, drinks_api_service_1;
    var DrinkStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
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
                function DrinkStore(lcbo) {
                    var _this = this;
                    this.lcbo = lcbo;
                    this._getDrinkAction = action_dispatcher_1.ActionDispatcher
                        .get('getDrink');
                    this._getDrinkByCategoryAction = action_dispatcher_1.ActionDispatcher
                        .get('getDrinkByCategory');
                    this.stream = new Rx_1.ReplaySubject(1);
                    this._getDrinkAction
                        .flatMap(function (action) { return lcbo.getDrinks(action.data.q); })
                        .subscribe(function (list) { return _this.stream.next(list); });
                    this._getDrinkByCategoryAction
                        .flatMap(function (action) { return lcbo.getDrinksByCat(action.data.category); })
                        .subscribe(function (list) { return _this.stream.next(list); });
                }
                DrinkStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [drinks_api_service_1.LCBOProductsRequest])
                ], DrinkStore);
                return DrinkStore;
            })();
            exports_1("DrinkStore", DrinkStore);
        }
    }
});
//# sourceMappingURL=drink-store.js.map