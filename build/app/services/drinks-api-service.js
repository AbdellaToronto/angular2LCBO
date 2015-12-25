System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map', "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, http_2;
    var LCBOProductsRequest, LCBOCategoriesRequest;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (http_2_1) {
                http_2 = http_2_1;
            }],
        execute: function() {
            LCBOProductsRequest = (function () {
                function LCBOProductsRequest(http) {
                    this.http = http;
                }
                LCBOProductsRequest.prototype.getDrinks = function (queryString) {
                    var apiKey = 'MDphNDBhNTc4ZS05N2E2LTExZTUtOWFjNC0wM2ZlYzliMmYyMDI6ZzR4eWpKTzY3dGJIOUVHZVNDQlliMFhOdnF5MHJwYnA1bmEz';
                    var options = {
                        search: 'q=' + queryString,
                        headers: new http_2.Headers({
                            'Authorization': "Token " + apiKey
                        })
                    };
                    return this.http.get('https://lcboapi.com/v2/products?', options)
                        .map(function (res) { return res.json(); })
                        .map(function (res) { return res.data; }); //Todo: probably don't run this map to get access to meta data
                };
                ;
                LCBOProductsRequest = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LCBOProductsRequest);
                return LCBOProductsRequest;
            })();
            exports_1("LCBOProductsRequest", LCBOProductsRequest);
            LCBOCategoriesRequest = (function () {
                function LCBOCategoriesRequest(http) {
                    this.http = http;
                }
                LCBOCategoriesRequest.prototype.getCategories = function () {
                    var apiKey = 'MDphNDBhNTc4ZS05N2E2LTExZTUtOWFjNC0wM2ZlYzliMmYyMDI6ZzR4eWpKTzY3dGJIOUVHZVNDQlliMFhOdnF5MHJwYnA1bmEz';
                    var options = {
                        headers: new http_2.Headers({
                            'Authorization': "Token " + apiKey
                        })
                    };
                    return this.http.get('https://lcboapi.com/v2/categories', options)
                        .map(function (res) { return res.json(); })
                        .map(function (res) { return res.data; });
                };
                ;
                LCBOCategoriesRequest = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LCBOCategoriesRequest);
                return LCBOCategoriesRequest;
            })();
            exports_1("LCBOCategoriesRequest", LCBOCategoriesRequest);
        }
    }
});
//# sourceMappingURL=drinks-api-service.js.map