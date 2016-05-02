import {Component,Injectable,OnInit} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';


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
    selector:'view1',
    directives:[ROUTER_DIRECTIVES],
    template:`
        <div>
            {{title}}<br/>
            <a [routerLink]="['View2']">Go to View2</a>
        </div>
    `
})
class View1 implements OnInit {
    title='View1';
    constructor(private _sampleService:SampleService){}
    ngOnInit(){
        this._sampleService.getData().then(data=>{
            console.log('VIEW1 : '+data);
        });
    }
}

@Component({
    selector:'view2',
    directives:[ROUTER_DIRECTIVES],
    template:`
        <div>
            {{title}}<br/>
            <a [routerLink]="['View1']">Go to View1</a>
        </div>
    `
})
class View2 implements OnInit {
    title='View2';
    constructor(private _sampleService:SampleService){}
    ngOnInit(){
        this._sampleService.getData().then(data=>{
            console.log('VIEW2 : '+data);
        });
    }
}



@Component({
    selector:'app',
    directives:[ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS,SampleService],
    template:`
        Parent View
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path:'/view1',name:'View1',component:View1,useAsDefault:true},
    {path:'/view2',name:'View2',component:View2}
])
export class RouterComponent{}