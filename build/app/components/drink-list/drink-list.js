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
var DrinkListItem = (function () {
    function DrinkListItem() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], DrinkListItem.prototype, "drink");
    DrinkListItem = __decorate([
        angular2_1.Component({
            selector: 'drink-list-item',
            template: "\n    <span class=\"drink-name\">{{drink.name}}</span>\n    ",
            styles: ["\n    :host {\n    width: 75vw;\n    }\n\n    .drink-name {\n    font-size: 18px;\n    }\n\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], DrinkListItem);
    return DrinkListItem;
})();
var DrinkList = (function () {
    function DrinkList(lcbo) {
        var _this = this;
        lcbo.drinks.subscribe(function (drinks) { return _this.drinkList = drinks; });
    }
    DrinkList = __decorate([
        angular2_1.Component({
            providers: [drinks_api_service_1.LCBOStore],
            selector: 'drink-list',
            template: "\n    <h2>Drink List</h2>\n    <drink-list-item *ng-for=\"#drink of drinkList\" [drink]=\"drink\"></drink-list-item>\n    ",
            directives: [angular2_1.NgFor, DrinkListItem],
            styles: ["\n    :host {\n    width: 95vw;\n    display: flex;\n    flex-direction: column;\n    }\n\n    "]
        }), 
        __metadata('design:paramtypes', [drinks_api_service_1.LCBOStore])
    ], DrinkList);
    return DrinkList;
})();
exports.DrinkList = DrinkList;
//# sourceMappingURL=drink-list.js.map