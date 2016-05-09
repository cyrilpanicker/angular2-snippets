import {Component} from '@angular/core';

@Component({
    selector:'app',
    template:`
        <form (ngSubmit)="submit()" #formControl="ngForm" >
            <input ngControl #nameTextBox #nameControl="ngForm" required />
            <span [hidden]="nameControl.valid || nameControl.pristine" >
                Required Field,
            </span>
            {{nameTextBox.className}}
            <button [disabled]="!formControl.valid" >Submit</button>
        </form>
    `
})
export class App{
    submit(){
        console.log('submitted');
    }
}