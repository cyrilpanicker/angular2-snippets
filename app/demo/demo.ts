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
    styles:[`
        .ng-valid[required]{
            border-left: 5px solid #42A948;
        }
        .ng-invalid{
            border-left: 5px solid #a94442;
        }
    `],
    template:`
        <div *ngIf="active" >
            Name : <input [(ngModel)]="hero.name" #nameControl="ngForm" required />
            <span [hidden]="nameControl.valid || nameControl.pristine" >Required Field</span><br/>
            Alter Ego : <input [(ngModel)]="hero.alterEgo" /><br/>
            Power : 
            <select [(ngModel)]="hero.power" required>
                <option *ngFor="let power of powers" [value]="power"  >
                    {{power}}
                </option>
            </select>
            <br/>
            <button (click)="resetHero()" >Reset Hero</button>
        </div>
    `
})
export class App{
    hero:Hero=new Hero(1,'Dr IQ','Super Hot','Chuck Overstreet');
    powers:string[]=['Really Smart','Super Flexible','Super Hot','Weather Changer'];
    submitted=false;
    active=true;
    resetHero(){
        this.hero=new Hero(1,'','');
        this.active=false;
        setTimeout(()=>this.active=true);
    }
}