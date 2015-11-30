var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var DrinkListItem = (function () {
    function DrinkListItem() {
        this.name = 'Test';
    }
    DrinkListItem = __decorate([
        angular2_1.Component({
            selector: 'drink-list-item',
            template: "\n    <div>{{name}}</div>\n    "
        })
    ], DrinkListItem);
    return DrinkListItem;
})();
var DrinkList = (function () {
    function DrinkList() {
        this.drinkList = new Array(5);
    }
    DrinkList = __decorate([
        angular2_1.Component({
            selector: 'drink-list',
            template: "\n    <h2>Drink List</h2>\n    <drink-list-item *ng-for=\"#drink of drinkList\"></drink-list-item>\n    ",
            directives: [angular2_1.NgFor, DrinkListItem]
        })
    ], DrinkList);
    return DrinkList;
})();
exports.DrinkList = DrinkList;
