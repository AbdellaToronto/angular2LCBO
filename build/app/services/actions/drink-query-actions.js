System.register(['angular2/core', "../action-dispatcher"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, action_dispatcher_1;
    var DrinkActions;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (action_dispatcher_1_1) {
                action_dispatcher_1 = action_dispatcher_1_1;
            }],
        execute: function() {
            DrinkActions = (function () {
                function DrinkActions() {
                }
                DrinkActions.getDrinks = function (query) {
                    action_dispatcher_1.ActionDispatcher.dispatch({ name: 'getDrink', data: { q: query } });
                };
                DrinkActions.getDrinksByCategory = function (query) {
                    action_dispatcher_1.ActionDispatcher.dispatch({ name: 'getDrinkByCategory', data: { category: query } });
                };
                DrinkActions = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DrinkActions);
                return DrinkActions;
            })();
            exports_1("DrinkActions", DrinkActions);
        }
    }
});
//# sourceMappingURL=drink-query-actions.js.map