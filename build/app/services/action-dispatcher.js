System.register(['angular2/core', 'rxjs/add/operator/filter', "rxjs/Rx"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1;
    var ActionDispatcher;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            ActionDispatcher = (function () {
                function ActionDispatcher() {
                }
                ActionDispatcher.get = function (actionName) {
                    if (actionName) {
                        return ActionDispatcher.stream
                            .filter(function (action) { return action.name === actionName; });
                    }
                    else {
                        return ActionDispatcher.stream;
                    }
                };
                ActionDispatcher.dispatch = function (action) {
                    console.log(action.name + " fired with payload ", action.data);
                    ActionDispatcher.stream.next(action);
                };
                ;
                ActionDispatcher.stream = new Rx_1.ReplaySubject(1);
                ActionDispatcher = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ActionDispatcher);
                return ActionDispatcher;
            })();
            exports_1("ActionDispatcher", ActionDispatcher);
        }
    }
});
//# sourceMappingURL=action-dispatcher.js.map