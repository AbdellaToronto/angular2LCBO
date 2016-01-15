System.register(['angular2/core', "angular2/common", '../../services/stores/category-store', "../../services/actions/category-actions", "../../services/drinks-api-service", "../../services/actions/drink-query-actions"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, category_store_1, category_actions_1, drinks_api_service_1, drink_query_actions_1;
    var CategoryItem, CategoryList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (category_store_1_1) {
                category_store_1 = category_store_1_1;
            },
            function (category_actions_1_1) {
                category_actions_1 = category_actions_1_1;
            },
            function (drinks_api_service_1_1) {
                drinks_api_service_1 = drinks_api_service_1_1;
            },
            function (drink_query_actions_1_1) {
                drink_query_actions_1 = drink_query_actions_1_1;
            }],
        execute: function() {
            CategoryItem = (function () {
                function CategoryItem() {
                    var _this = this;
                    this.selected = new core_1.EventEmitter();
                    this.searchForDrinks = function (drinkString) { return _this.selected.next(drinkString); };
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CategoryItem.prototype, "category", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CategoryItem.prototype, "selected", void 0);
                CategoryItem = __decorate([
                    core_1.Component({
                        selector: 'category-item',
                        directives: [common_1.NgFor, CategoryItem],
                        template: "\n    <div class=\"category-name\">\n    <a (click)=\"searchForDrinks(category.name)\" >{{category.name}}</a>\n    <div class=\"sub-cats\">\n        <category-item\n        *ngFor=\"#subcategory of category.children\"\n        [category]=\"subcategory\" (selected)=\"searchForDrinks($event)\"></category-item>\n    </div>\n    </div>\n    ",
                        styles: ["\n    :host {\n    width: 200px;\n    }\n\n    a {\n        margin: 6px 0;\n        font-size: 18px;\n    }\n\n    .sub-cats {\n        padding-left: 20px;\n    }\n\n    .sub-cats a {\n        margin: 3px 0;\n        font-size: 15px;\n        font-weight: 400;\n    }\n\n    .category-name {\n    font-size: 18px;\n    }\n\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CategoryItem);
                return CategoryItem;
            })();
            CategoryList = (function () {
                function CategoryList(_categoryStore) {
                    var _this = this;
                    this._categoryStore = _categoryStore;
                    this.requestNewCategories = category_actions_1.CategoryActions.getCategories;
                    this.requestNewDrinks = function (res) {
                        drink_query_actions_1.DrinkActions.getDrinksByCategory(res);
                    };
                    this.requestNewCategories();
                    _categoryStore.stream.subscribe(function (res) { return _this.categoryList = res; });
                }
                CategoryList = __decorate([
                    core_1.Component({
                        providers: [category_actions_1.CategoryActions, drink_query_actions_1.DrinkActions, category_store_1.CategoryStore, drinks_api_service_1.LCBOCategoriesRequest],
                        selector: "category-list",
                        template: "\n        <span>**Sub Categories WIP**</span>\n    <category-item *ngFor=\"#category of categoryList\" [category]=\"category\" (selected)=\"requestNewDrinks($event)\"></category-item>\n    ",
                        directives: [common_1.NgFor, CategoryItem],
                        styles: ["\n    :host {\n    width: 20vw;\n    height: 100vw;\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n    }"]
                    }), 
                    __metadata('design:paramtypes', [category_store_1.CategoryStore])
                ], CategoryList);
                return CategoryList;
            })();
            exports_1("CategoryList", CategoryList);
        }
    }
});
//# sourceMappingURL=category-list.js.map