import {Component,OnInit} from '@angular/core';


@Component({
    selector:'app',
    template:''
})
export class LifeCycleHook implements OnInit {
    ngOnInit(){
        console.log('LifeCycleHook initialized');
    }
}