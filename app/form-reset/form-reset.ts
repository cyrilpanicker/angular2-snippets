import {Component} from '@angular/core';

@Component({
    selector:'app',
    template:`
        <div *ngIf="active" >
            <input [(ngModel)]="name" #nameControl="ngForm" />
            <button (click)="reset()" >Reset</button>
            Is Reset : {{nameControl.pristine}}
        </div>
    `
})
export class App{
    name='tom';
    active=true;
    reset(){
        this.name = '';
        this.active=false;
        setTimeout(()=>this.active=true);
    }
}