import {Component} from 'angular2/core';
import {SampleService} from './sample.service';

@Component({
    selector:'child',
    template:'<div>Child</div>'
})
export class SampleChild{
    constructor(private _sampleService:SampleService){
        console.log(this._sampleService.getData());
    }
}