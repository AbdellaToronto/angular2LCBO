System.register(['angular2/core', "../../services/drinks-api-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, drinks_api_service_1;
    var DrinkQuery;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (drinks_api_service_1_1) {
                drinks_api_service_1 = drinks_api_service_1_1;
            }],
        execute: function() {
            DrinkQuery = (function () {
                function DrinkQuery(lcbo) {
                    this.lcbo = lcbo;
                    this.changed = new core_1.EventEmitter();
                    this.searchForDrinks('White');
                }
                //todo: this feels clumsy, ask about better handling of event updates w/ data
                DrinkQuery.prototype.searchForDrinks = function (drinkString) {
                    var _this = this;
                    this.lcbo.getDrinks(drinkString)
                        .subscribe(function (drinks) { return _this.changed.next(drinks); });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], DrinkQuery.prototype, "changed", void 0);
                DrinkQuery = __decorate([
                    core_1.Component({
                        providers: [drinks_api_service_1.LCBOStore],
                        selector: 'drink-query',
                        template: "\n    <label for=\"drinkInput\">Query: </label>\n    <input id=\"drinkInput\" type=\"text\" #q>\n    <button (click)=\"searchForDrinks(q.value)\">Search</button>\n    ",
                        styles: ["\n    :host {\n    width: 90vw;\n    }\n "]
                    }), 
                    __metadata('design:paramtypes', [drinks_api_service_1.LCBOStore])
                ], DrinkQuery);
                return DrinkQuery;
            })();
            exports_1("DrinkQuery", DrinkQuery);
        }
    }
});
//# sourceMappingURL=drink-query.js.map