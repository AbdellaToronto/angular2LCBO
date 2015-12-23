import { AppComponent } from './components/app/app-component';
import { bootstrap } from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {FORM_PROVIDERS} from "angular2/common";

bootstrap(AppComponent, [HTTP_PROVIDERS, FORM_PROVIDERS]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
