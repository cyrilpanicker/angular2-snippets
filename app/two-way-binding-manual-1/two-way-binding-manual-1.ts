import {Component} from '@angular/core';

class Hero{
    constructor(
        public id:number,
        public name:string,
        public alterEgo:string,
        public power:string
    ){}
}

@Component({
    selector:'app',
    template:`
        <form>
            Name : <input [ngModel]="hero.name" (ngModelChange)="hero.name=$event" required /><br/>
            Alter Ego : <input [ngModel]="hero.alterEgo" (ngModelChange)="hero.alterEgo=$event" /><br/>
            Powers :
            <select [ngModel]="hero.power" (ngModelChange)="hero.power=$event" >
                <option *ngFor="let power of powers" [value]="power">
                    {{power}}
                </option>
            </select>
            <br/>
            <button (click)="submitForm()" >Submit</button>
        </form>
        {{hero.name}}<br/>
        {{hero.alterEgo}}<br/>
        {{hero.power}}
    `
})
export class App{
    hero:Hero = new Hero(18, 'Dr IQ', 'Chuck Overstreet', 'Weather Changer');
    submitted:boolean = false;
    powers:string[]=['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
    submitForm(){
        this.submitted = true;
    } 
}