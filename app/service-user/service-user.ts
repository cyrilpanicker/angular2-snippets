import {Component} from 'angular2/core';
import {SampleService} from './sample.service';

@Component({
    selector:'app',
    template:'',
    providers:[SampleService]
})
export class ServiceUser{
    constructor(private _sampleService:SampleService){
        console.log(this._sampleService.getData());
    }
}