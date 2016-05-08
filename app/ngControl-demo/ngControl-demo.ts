import {Component} from '@angular/core';


@Component({
    selector:'app',
    template:`
        <form>
            <input value="tom" ngControl #nameControl="ngForm" #nameTextBox  required />
            <span [hidden]="nameControl.valid || nameControl.pristine" >
                Required Field
            </span><br/>
            {{nameTextBox.className}}<br/>
        </form>
    `
})
export class App{}