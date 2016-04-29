import {Component} from 'angular2/core';
import {Todo} from '../models/models';


@Component({
    selector:'app',
    template:`
        <ul>
            <li *ngFor="#todo of todos"
                (click)="onSelect(todo.id)"
                [class.completed]="todo.completed" >
                {{todo.text}}
            </li>
        </ul>
    `,
    styles:[`
        .completed{
            text-decoration: line-through;
        }
    `]
})
export class ClassInput{
    todos:Todo[]=[
        {id:1,text:'abc',completed:false},
        {id:2,text:'bcd',completed:false},
        {id:3,text:'cde',completed:false},
        {id:4,text:'def',completed:false},
        {id:5,text:'efg',completed:false},
        {id:6,text:'fgh',completed:false},
        {id:7,text:'ghi',completed:false}
    ];
    onSelect(id){
        const todo = this.todos.find(todo=>todo.id===id);
        todo.completed = !todo.completed;
    }
}