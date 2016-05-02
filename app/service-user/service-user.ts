import {Component,Injectable,OnInit} from 'angular2/core';

@Injectable()
class SampleService{
    getData():Promise<number[]>{
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve([1,2,3,4,5]);
            },2000);
        });
    }
}

@Component({
    selector:'app',
    template:'',
    providers:[SampleService]
})
export class ServiceUser implements OnInit {
    data:number[];
    constructor(private _sampleService:SampleService){}
    ngOnInit(){
        this._sampleService.getData().then(data=>{
            this.data = data;
            console.log(this.data);
        });
    }
}