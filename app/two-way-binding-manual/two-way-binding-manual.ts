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
            Name : 
            <input #nameTextBox [value]="model.name" required
                (keyup)="model.name=nameTextBox.value"
            />
            <br/>
            Alter Ego :
            <input #egoTextBox [value]="model.alterEgo"
                (keyup)="model.alterEgo=egoTextBox.value" 
            />
            <br/>
            Power : 
            <select #powerSelectBox required
                (change)="model.power=powerSelectBox.value"
            >
                <option *ngFor="let power of powers" 
                    [value]="power" 
                    [selected]="power===model.power"
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
    model:Hero=new Hero(18, 'Dr IQ', 'Weather Changer', 'Chuck Overstreet');
    powers=['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
    submitted=false;
    submitForm(){
        this.submitted = true;
    }
}