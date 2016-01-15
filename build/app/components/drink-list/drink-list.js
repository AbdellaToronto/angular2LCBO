System.register(['angular2/core', "../drink-query-input/drink-query", "angular2/common", "../../services/actions/drink-query-actions", "../../services/stores/drink-store", "../../services/drinks-api-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, drink_query_1, common_1, drink_query_actions_1, drink_store_1, drinks_api_service_1;
    var DrinkListItem, DrinkList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (drink_query_1_1) {
                drink_query_1 = drink_query_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (drink_query_actions_1_1) {
                drink_query_actions_1 = drink_query_actions_1_1;
            },
            function (drink_store_1_1) {
                drink_store_1 = drink_store_1_1;
            },
            function (drinks_api_service_1_1) {
                drinks_api_service_1 = drinks_api_service_1_1;
            }],
        execute: function() {
            DrinkListItem = (function () {
                function DrinkListItem() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DrinkListItem.prototype, "drink", void 0);
                DrinkListItem = __decorate([
                    core_1.Component({
                        selector: 'drink-list-item',
                        pipes: [common_1.CurrencyPipe],
                        directives: [common_1.NgStyle],
                        template: "\n\n      <div class=\"card\">\n    <div class=\"card-image waves-effect waves-block waves-light\">\n      <img class=\"activator\" src=\"{{drink.get('image_url')}}\">\n    </div>\n    <div class=\"card-content\">\n      <span class=\"card-title activator grey-text text-darken-4\">\n      <span>{{drink.get('name')}}</span>\n      <span [ngStyle]=\"{'color':drink.get('price_in_cents') === drink.get('regular_price_in_cents') ? 'grey' : 'green' }\"\n      >{{drink.get('price_in_cents') / 100 | currency:'USD':true:'1.2-2'}}</span>\n      </span>\n    </div>\n    <div class=\"card-reveal\">\n      <span class=\"card-title grey-text text-darken-4\">{{drink.get('name')}}<i class=\"material-icons right\">close</i></span>\n      <p>Origin: {{drink.get('origin')}}</p>\n      <p>Package: {{drink.get('package')}}</p>\n      <p>Style: {{drink.get('style')}}</p>\n      <p>Reg Price: {{drink.get('regular_price_in_cents') / 100 | currency:'USD':true:'1.2-2'}}</p>\n\n    </div>\n  </div>\n\n\n\n    ",
                        styles: ["\n    :host {\n        width: 30%;\n        margin: 10px;\n    }\n\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DrinkListItem);
                return DrinkListItem;
            })();
            DrinkList = (function () {
                function DrinkList(drinkStore) {
                    var _this = this;
                    this.drinkStore = drinkStore;
                    this.requestNewDrinks = drink_query_actions_1.DrinkActions.getDrinks;
                    drinkStore.stream
                        .subscribe(function (res) { return _this.drinkList = res.toArray(); });
                }
                DrinkList = __decorate([
                    core_1.Component({
                        providers: [drink_query_actions_1.DrinkActions, drink_store_1.DrinkStore, drinks_api_service_1.LCBOProductsRequest],
                        selector: "drink-list",
                        template: "\n\n    <section class=\"header\">\n        <drink-query (changed)=\"requestNewDrinks($event)\"></drink-query>\n    </section>\n    <section class=\"list\">\n        <drink-list-item *ngFor=\"#drink of drinkList\" [drink]=\"drink\"></drink-list-item>\n    </section>\n    ",
                        directives: [common_1.NgFor, DrinkListItem, drink_query_1.DrinkQuery],
                        styles: ["\n    :host {\n    width: 80vw;\n    height: 100vh;\n\n    }\n\n    .list {\n    overflow: scroll;\n    display: flex;\n    flex-flow: wrap;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [drink_store_1.DrinkStore])
                ], DrinkList);
                return DrinkList;
            })();
            exports_1("DrinkList", DrinkList);
        }
    }
});
//# sourceMappingURL=drink-list.js.map