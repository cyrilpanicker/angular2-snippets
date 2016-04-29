import {Component,Injectable} from 'angular2/core';

@Injectable()
class IdGenerator{
    private id=0;
    next(){
        return this.id++;
    }
}

class Todo{
    id:number;
    text:string;
}

@Component({
    selector:'app',
    providers:[IdGenerator],
    template:`
        <div>
            <input #inputTextBox />
            <button (click)="onSubmit(inputTextBox.value);inputTextBox.value='';" >Submit</button>
            <ul>
                <li *ngFor="#todo of todos" (click)="onSelect(todo.id)" >
                    {{todo.text}}
                </li>
            </ul>
        </div>
    `
})
export class EventBinding{
    todos:Todo[]=[];
    constructor(private _idGenerator:IdGenerator){}
    onSubmit(inputText:string){
        this.todos.push({
            id:this._idGenerator.next(),
            text:inputText
        });
    }
    onSelect(id:number){
        this.todos = this.todos.filter(todo=>todo.id!==id);
    }
}