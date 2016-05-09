import { Component } from '@angular/core';


@Component({
    selector:'app',
    template:`
        <form (ngSubmit)="submitForm();log(formControl.form.controls.nameControl.valid)" #formControl="ngForm" >
            <input ngControl="nameControl" required />
            <button *ngIf="nameControl" [disabled]="!nameControl.valid" >Submit</button>
            <button [disabled]="!formControl.form.valid" >Submit</button>
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
    submitForm(){
        console.log('form submitted');
    }
    log(formControl){
        console.log(formControl);
    }
}