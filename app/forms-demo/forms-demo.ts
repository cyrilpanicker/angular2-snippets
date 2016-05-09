import {Component} from '@angular/core';


@Component({
    selector:'app',
    template:`
        
        <div ngForm #formControl2="ngForm" >
            <input ngControl #nameTextBox1 #nameControl1="ngForm" required>
            <span [hidden]="nameControl1.valid || nameControl1.pristine" >
                Required Field,
            </span>
            {{nameTextBox1.className}}
            <button (click)="submit()" [disabled]="!formControl2.valid" >Submit</button>
        </div>
        
        <div ngForm #formControl2="ngForm" >
            <input ngControl="" #nameTextBox1 required>
            <span [hidden]="nameControl1.valid || nameControl1.pristine" >
                Required Field,
            </span>
            {{nameTextBox1.className}}
            <button (click)="submit()" [disabled]="!formControl.valid" >Submit</button>
        </div>
        
        <div>
            <input [(ngModel)]="name" #nameTextBox2 #nameControl2="ngForm" required />
            <span [hidden]="nameControl2.valid || nameControl2.pristine" >
                Required Field,
            </span>
            {{nameTextBox2.className}}
            <button (click)="submit()" >Submit</button>
        </div>

    `
})
export class App{
    name='tom';
    submit(){
        console.log('submitted');
    }
}