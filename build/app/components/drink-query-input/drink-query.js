var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var drinks_api_service_1 = require("../../services/drinks-api-service");
var DrinkQuery = (function () {
    function DrinkQuery(lcbo) {
        this.change = new angular2_1.EventEmitter();
        this.query = [];
        this.lcbo = lcbo;
    }
    //todo: this feels clumsy, ask about better handling of event updates w/ data
    DrinkQuery.prototype.searchForDrinks = function (drinkString) {
        var _this = this;
        this.lcbo.getDrinks(drinkString)
            .do(function (drinks) { return _this.query = drinks; })
            .subscribe(function (drinks) { return _this.change.next(drinks); });
    };
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], DrinkQuery.prototype, "change");
    DrinkQuery = __decorate([
        angular2_1.Component({
            provider: [drinks_api_service_1.LCBOStore],
            selector: 'drink-query',
            template: "\n    <label for=\"drinkInput\">Query: </label>\n    <input id=\"drinkInput\" type=\"text\" #q>\n    <button (click)=\"searchForDrinks(q.value)\">Search</button>\n    ",
            styles: ["\n    :host {\n    width: 90vw;\n    }\n "]
        }), 
        __metadata('design:paramtypes', [drinks_api_service_1.LCBOStore])
    ], DrinkQuery);
    return DrinkQuery;
})();
exports.DrinkQuery = DrinkQuery;
//# sourceMappingURL=drink-query.js.map