import {Component,Input} from 'angular2/core';
import {Person} from '../models/models';

@Component({
    selector:'child',
    template:`
        <div>
            Child :
            {{person?.name}} :
            <input #textBox [value]="person?.name" /> :
            <button (click)="onChange(textBox.value)" >Change</button>
        </div>
    `
})
class Child{
    @Input() person:Person;
    onChange(name){
        this.person.name = name;
    }
}

@Component({
    selector:'app',
    directives:[Child],
    template:`
        <div>
            Parent :
            {{person.name}} :
            <input #textBox [value]="person.name" > :
            <button (click)="onChange(textBox.value)" >Change</button>
        </div>
        <child [person]="person" ><child>
    `
})
export class PropertyBinding{
    person:Person = {id:1,name:'tom'};
    onChange(name){
        this.person.name = name;
    }
}