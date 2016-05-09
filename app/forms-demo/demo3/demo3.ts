import {Component} from '@angular/core';

@Component({
    selector:'app',
    template:`
        <form #formControl="ngForm" (ngSubmit)="submit()" >
            <input #nameTextBox ngControl="nameControl" required />
            <span *ngIf="formControl.form.controls.nameControl"
                [hidden]="formControl.form.controls.nameControl.valid || formControl.form.controls.nameControl.pristine"
            >
                Required Field,
            </span>
            {{nameTextBox.className}}
            <button
                *ngIf="formControl.form.controls.nameControl"
                [disabled]="!formControl.form.controls.nameControl.valid"
            >
                Submit
            </button>
        </form>
    `
})
export class App{
    submit(){
        console.log('submitted');
    }
}