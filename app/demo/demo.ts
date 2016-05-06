import {Component} from '@angular/core';

import {Todo} from '../models/models';

class IdService{
    private id=1;
    getId(){
        return this.id++;
    }
}

@Component({
    selector:'app',
    providers:[IdService],
    template:`
        <div>
            <input #textBox
                (keyup.enter)="addTodo(textBox.value);textBox.value='';"
                (blur)="addTodo(textBox.value);textBox.value='';"
            />
            <button (click)="addTodo(textBox.value);textBox.value='';">
                Add
            </button>
            <br/>
            <ul>
                <li *ngFor="let todo of todos" >
                    {{todo.text}}
                </li>
            </ul>
        </div>
    `
})
export class App{
    todos:Todo[]=[];
    constructor(
        private idService:IdService
    ){}
    addTodo(text:string){
        if(text){
            this.todos.push({
                id:this.idService.getId(),
                text:text,
                completed:false
            });
        }
    }
}