import {Component,Input} from '@angular/core';

@Component({
    selector:'child',
    template:`
        <div>
            Child : 
            {{text}} : 
            <input #textBox [value]="text" /> : 
            <button (click)="onChange(textBox.value)" >Change</button>
        </div>
    `
})
class Child{
    @Input() text:string;
    onChange(text:string){
        // this line breaks the link between Parent and Child binding
        this.text = text;
    }
}


@Component({
    selector:'app',
    directives:[Child],
    template:`
        <div>
            Parent : 
            {{text}} : 
            <input #textBox [value]="text" /> : 
            <button (click)="onChange(textBox.value)" >Change</button>
        </div>
        <child [text]="text" ></child>
    `
})
export class PropertyBindingAnomaly{
    text:string = 'abc';
    onChange(text:string){
        this.text = text;
    }
}