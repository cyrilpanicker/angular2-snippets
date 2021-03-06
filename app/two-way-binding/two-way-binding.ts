import {Component} from '@angular/core';

class Hero{
    constructor(
        public id:number,
        public name:string,
        public power:string,
        public alterEgo?:string
    ){}
}


@Component({
    selector:'app',
    template:`
        <form>
            Name : <input [(ngModel)]="model.name" required /><br/>
            Alter Ego : <input [(ngModel)]="model.alterEgo" /><br/>
            Power : 
            <select [(ngModel)]="model.power" >
                <option *ngFor="let power of powers"
                    [value]="power"
                >
                    {{power}}
                </option>
            </select>
            <br/>
            <button (click)="submitForm()" >Submit</button>
        </form>
        {{model.name}}<br/>
        {{model.alterEgo}}<br/>
        {{model.power}}
    `
})
export class App{
    model:Hero=new Hero(18, 'Dr IP', 'Weather Changer', 'Chuck Overstreet');
    powers=['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
    submitted=false;
    submitForm(){
        this.submitted = true;
    }
}