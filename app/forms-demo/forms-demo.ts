import {Component} from '@angular/core';

@Component({
    selector:'app',
    template:`
        <form (ngSubmit)="submitForm()" >
            <input ngControl #inputTextbox #inputControl="ngForm" required />
            <span [hidden]="inputControl.valid || inputControl.pristine" >Required Field, </span>
            {{inputTextbox.className}}
            <button [disabled]="!inputControl.valid" >Submit</button>
        </form>
    `
})
export class App1{
    submitForm(){
        console.log('form submitted');
    }
}
//-------------------------------------------------
@Component({
    selector:'app',
    template:`
        <div ngForm>
            <input ngControl #inputTextbox #inputControl="ngForm" required />
            <span [hidden]="inputControl.valid || inputControl.pristine" >Required Field, </span>
            {{inputTextbox.className}}
            <button [disabled]="!inputControl.valid" (click)="submitForm()" >Submit</button>
        </div>
    `
})
export class App2{
    submitForm(){
        console.log('form submitted');
    }
}
//-------------------------------------------------
@Component({
    selector:'app',
    template:`
        <div>
            <input [ngModel]="inputTextbox.value" #inputTextbox #inputControl="ngForm" required />
            <span [hidden]="inputControl.valid || inputControl.pristine" >Required Field, </span>
            {{inputTextbox.className}}
            <button [disabled]="!inputControl.valid" (click)="submitForm()">Submit</button>
        </div>
    `
})
export class App3{
    submitForm(){
        console.log('form submitted');
    }
}
//-------------------------------------------------
@Component({
    selector:'app',
    template:`
        <form (ngSubmit)="submitForm()" #formControl="ngForm" >
            <input ngControl #inputTextbox #inputControl="ngForm" required />
            <span [hidden]="inputControl.valid || inputControl.pristine" >Required Field, </span>
            {{inputTextbox.className}}
            <button [disabled]="!formControl.valid" >Submit</button>
        </form>
    `
})
export class App4{
    submit(){
        console.log('form submitted');
    }
}
//-------------------------------------------------
@Component({
    selector:'app',
    template:`
        <div ngForm #formControl="ngForm" >
            <input ngControl #inputTextbox #inputControl="ngForm" required />
            <span [hidden]="inputControl.valid || inputControl.pristine" >Required Field, </span>
            {{inputTextbox.className}}
            <button [disabled]="!formControl.valid" (click)="submitForm()" >Submit</button>
        </div>
    `
})
export class App5{
    submitForm(){
        console.log('form submitted');
    }
}
//-------------------------------------------------
@Component({
    selector:'app',
    template:`
        <form (ngSubmit)="submitForm()" #formControl="ngForm" >
            <input ngControl="inputControl" #inputTextbox required />
            <span [hidden]="formControl.form.controls.inputControl && (formControl.form.controls.inputControl.valid || formControl.form.controls.inputControl.pristine)">Required Field, </span>
            {{inputTextbox.className}}
            <button [disabled]="formControl.form.controls.inputControl && !formControl.form.controls.inputControl.valid" >Submit</button>
        </form>
    `
})
export class App6{
    submitForm(){
        console.log('form submitted');
    }
}
//-------------------------------------------------
@Component({
    selector:'app',
    template:`
        <div ngForm #formControl="ngForm" >
            <input ngControl="inputControl" #inputTextbox required />
            <span [hidden]="formControl.form.controls.inputControl && (formControl.form.controls.inputControl.valid || formControl.form.controls.inputControl.pristine)">Required Field, </span>
            {{inputTextbox.className}}
            <button [disabled]="formControl.form.controls.inputControl && !formControl.form.controls.inputControl.valid" (click)="submitForm()" >Submit</button>
        </form>
    `
})
export class App7{
    submitForm(){
        console.log('form submitted');
    }
}