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
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
var LCBOStore = (function () {
    function LCBOStore(http) {
        this.apiKey = 'MDpjYmEyYzk4NC05Nzk3LTExZTUtOWU1OS00NzQ2ODZmYzkyMWQ6bGZkQ0hGZWY5Q3ZHUHIwSmxISEFCeTRVYTh3NzdHV1FpUm00';
        this.drinks = http.get('https://lcboapi.com/v2/products', { search: 'red wine', headers: {
                Authorization: 'Token ' + this.apiKey
            } })
            .map(function (res) { return JSON.parse(res._body); })
            .map(function (res) { return res.data; }); //Todo: probably don't run this map to get access to meta data
    }
    LCBOStore = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LCBOStore);
    return LCBOStore;
})();
exports.LCBOStore = LCBOStore;
//# sourceMappingURL=drinks-api-service.js.map