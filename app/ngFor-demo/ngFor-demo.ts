import {Component} from 'angular2/core';


class Person{
    id:number;
    name:string;
}


@Component({
    selector:'app',
    template:`
        <div>
            <h3>Persons</h3>
            <ul>
                <li *ngFor="#person of persons">
                    {{person.id}}, {{person.name}}
                </li>
            </ul>
        </div>
    `
})
export class ngForDemo{
    persons:Person[] = [
        {id:1,name:'a'},
        {id:2,name:'b'},
        {id:3,name:'c'},
        {id:4,name:'d'},
        {id:5,name:'e'},
        {id:6,name:'f'},
        {id:7,name:'g'}
    ]
}