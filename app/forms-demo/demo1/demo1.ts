import {Component} from '@angular/core';

@Component({
    selector:'app',
    template:`
        <form (ngSubmit)="submit()" >
            <input ngControl #nameTextBox #nameControl="ngForm" required />
            <span [hidden]="nameControl.valid || nameControl.pristine" >
                Required Field,
            </span>
            {{nameTextBox.className}}
            <button [disabled]="!nameControl.valid" >Submit</button>
        </form>
    `
})
export class App{
    submit(){
        console.log('submitted');
    }
}