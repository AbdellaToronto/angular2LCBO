System.register(['angular2/core', "../drink-query-input/drink-query", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, drink_query_1, common_1;
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
                        template: "\n    <span class=\"drink-name\">{{drink.name}}</span>\n    ",
                        styles: ["\n    :host {\n    width: 90vw;\n    }\n\n    .drink-name {\n    font-size: 18px;\n    }\n\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DrinkListItem);
                return DrinkListItem;
            })();
            //todo: figure out a cleaner way to handle output emissions
            DrinkList = (function () {
                function DrinkList() {
                }
                DrinkList.prototype.updateDrinkList = function (response) {
                    this.drinkList = response;
                };
                DrinkList = __decorate([
                    core_1.Component({
                        selector: 'drink-list',
                        template: "\n    <h2>Drink List</h2>\n    <drink-query #c (changed)=\"updateDrinkList($event)\"></drink-query>\n    <drink-list-item *ngFor=\"#drink of drinkList\" [drink]=\"drink\"></drink-list-item>\n    ",
                        directives: [common_1.NgFor, DrinkListItem, drink_query_1.DrinkQuery],
                        styles: [
                            "\n    :host {\n    width: 95vw;\n    display: flex;\n    flex-direction: column;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DrinkList);
                return DrinkList;
            })();
            exports_1("DrinkList", DrinkList);
        }
    }
});
//# sourceMappingURL=drink-list.js.map