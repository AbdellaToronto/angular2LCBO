System.register(['./components/app/app-component', 'angular2/platform/browser', 'angular2/http', "angular2/common"], function(exports_1) {
    var app_component_1, browser_1, http_1, common_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, common_1.FORM_PROVIDERS]).then(function (success) { return console.log('AppComponent bootstrapped!'); }, function (error) { return console.log(error); });
        }
    }
});
//# sourceMappingURL=bootstrap.js.map