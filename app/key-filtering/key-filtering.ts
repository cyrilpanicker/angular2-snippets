import {Component} from '@angular/core';

@Component({
    selector:'app',
    template:`
        <div>
            <input #textBox (keyup.enter)="0" (blur)="0" /><br/>
            {{textBox.value}}
        </div>
    `
})
export class App{}