import {Component,Injectable,OnInit} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS,RouteParams,Router} from 'angular2/router';

import {Todo} from '../models/models';
//-------------------------------------------------
@Injectable()
class TodoService{
    todos:Todo[] = [
        {id:1,text:'abc',completed:false},
        {id:2,text:'def',completed:false},
        {id:3,text:'ghi',completed:false},
        {id:4,text:'jkl',completed:false},
        {id:5,text:'mno',completed:false},
        {id:6,text:'pqr',completed:false},
        {id:7,text:'stu',completed:false},
        {id:8,text:'vwx',completed:false}
    ];
    getTodos(){
        return Promise.resolve(this.todos);
    }
    toggleTodo(id){
        return new Promise(resolve=>{
            const todo = this.todos.find(todo=>todo.id===id);
            todo.completed = !todo.completed;
            resolve();
        }); 
    }
}
//-------------------------------------------------
@Component({
    styles:[`
        .todo-item{
            cursor:pointer;
        }
        .completed{
            text-decoration: line-through;
        }
    `],
    template:`
        <ul>
            <li *ngFor="let todo of todos" class="todo-item" (click)="toggleTodo(todo.id)" [class.completed]="todo.completed" >
                {{todo.text}}
                <button (click)="goToDetail(todo.id);$event.stopPropagation();" >Edit</button>
            </li>
        </ul>
    `
})
class AllTodos implements OnInit {
    todos:Todo[];
    constructor(
        private _todoService:TodoService,
        private _router:Router
    ){}
    ngOnInit(){
        this._todoService.getTodos().then(todos => this.todos=todos);
    }
    toggleTodo(id){
        this._todoService.toggleTodo(id);
    }
    goToDetail(id:number){
        this._router.navigate(['TodoDetails',{id}]);
    }
}
//-------------------------------------------------
@Component({
    styles:[`
        .todo-item{
            cursor:pointer;
        }
    `],
    template:`
        <ul>
            <li *ngFor="let todo of todos" class="todo-item" (click)="toggleTodo(todo.id)" >
                {{todo.text}}
                <button (click)="goToDetail(todo.id);$event.stopPropagation();" >Edit</button>
            </li>
        </ul>
    `
})
class PendingTodos implements OnInit {
    todos:Todo[];
    constructor(
        private _todoService:TodoService,
        private _router:Router
    ){}
    updateTodos(){
        this.todos = this.todos.filter(todo=>!todo.completed);
    }
    ngOnInit(){
        this._todoService.getTodos().then(todos => this.todos = todos.filter(todo=>!todo.completed));
    }
    toggleTodo(id){
        this._todoService.toggleTodo(id).then(this.updateTodos.bind(this));
    }
    goToDetail(id:number){
        this._router.navigate(['TodoDetails',{id}])
    }
}
//-------------------------------------------------
@Component({
    template:`
        <div *ngIf="todo">
            <h2>Details</h2>
            id : {{todo?.id}}<br/>
            text : <input [(ngModel)]="todo.text" /><br/>
            complete : <input [(ngModel)]="todo.completed" type="checkbox" /><br/>
            <button (click)="goBack()" >Back</button>
        </div>
    `
})
class TodoDetails implements OnInit {
    todo:Todo;
    constructor(
        private _todoService:TodoService,
        private _routeParams:RouteParams
    ){}
    ngOnInit(){
        const id = parseInt(this._routeParams.get('id'));
        this._todoService.getTodos().then(todos=>{
            this.todo = todos.find(todo=>todo.id===id);
        });
    }
    goBack(){
        window.history.back();
    }
}
//-------------------------------------------------
@Component({
    selector:'app',
    providers:[ROUTER_PROVIDERS,TodoService],
    directives:[ROUTER_DIRECTIVES],
    template:`
        <h2>Todo App</h2>
        <a [routerLink]="['AllTodos']" >All Todos</a>
        <a [routerLink]="['PendingTodos']" >Pending Todos</a>
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path:'/alltodos',name:'AllTodos',component:AllTodos,useAsDefault:true},
    {path:'/pendingtodos',name:'PendingTodos',component:PendingTodos},
    {path:'/tododetails/:id',name:'TodoDetails',component:TodoDetails}
])
export class App{}
//-------------------------------------------------