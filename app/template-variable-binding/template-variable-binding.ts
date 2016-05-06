import {Component} from '@angular/core';


@Component({
    selector:'app',
    template:`
        <div>
            <input #textBox value="tom" (keyup)="0" /><br/>
            {{textBox.value}}
        </div>
    `
})
export class App{}