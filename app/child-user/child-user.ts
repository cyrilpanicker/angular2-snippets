import {Component,Injectable} from '@angular/core';

@Injectable()
class SampleService{
    getData(){
        return [1,2,3,4,5];
    }
}

@Component({
    selector:'child',
    template:'<div>Child</div>'
})
class SampleChild{
    constructor(private _sampleService:SampleService){
        console.log(this._sampleService.getData());
    }
}

@Component({
    selector:'app',
    directives:[SampleChild],
    providers:[SampleService],
    template:`
        <div>
            Parent
            <child></child>
        </div>
    `
})
export class ChildUser{}