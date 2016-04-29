import {Component,Injectable} from 'angular2/core';

@Injectable()
class SampleService{
    getData(){
        return [1,2,3,4,5];
    }
}

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