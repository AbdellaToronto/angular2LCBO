import { Injectable } from 'angular2/core';
import 'rxjs/add/operator/filter';
import {ReplaySubject} from "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ActionDispatcher {

    private static stream: ReplaySubject = new ReplaySubject(1);

    public static get(actionName?: String){
        if(actionName){
            return ActionDispatcher.stream
            .filter(action => action.name === actionName);

        }else{
            return ActionDispatcher.stream;
        }
    }

    public static dispatch(action) {
        console.log(`${action.name} fired with payload `, action.data);
        ActionDispatcher.stream.next(action);
    };


    constructor(){}
}