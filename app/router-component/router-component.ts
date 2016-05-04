import {Component,Injectable,OnInit} from '@angular/core';
import {RouteConfig,Router,ROUTER_PROVIDERS,ROUTER_DIRECTIVES,RouteParams} from '@angular/router-deprecated'
import {Todo} from '../models/models';
//------------------------------------------------------
@Injectable()
class TodoService{
    private _todos:Todo[] = [
        {id:1,text:'abc',completed:false},
        {id:2,text:'def',completed:false},
        {id:3,text:'ghi',completed:false},
        {id:4,text:'jkl',completed:false},
        {id:5,text:'mno',completed:false},
        {id:6,text:'pqr',completed:false},
        {id:7,text:'stu',completed:false},
        {id:8,text:'vwx',completed:false},
        {id:9,text:'yza',completed:false}
    ];
    getTodos(){
        return Promise.resolve(this._todos);
    }
}
//------------------------------------------------------
@Component({
    styles:[`
        .completed{
            text-decoration:line-through;
        }
        .todo-item{
            cursor:pointer;
        }
    `],
    template:`
        <ul>
            <li *ngFor="let todo of todos" 
                (click)="toggleTodo(todo.id)" 
                [class.completed]="todo.completed"
                class="todo-item" 
            >
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
        this._todoService.getTodos().then(todos=>this.todos=todos);
    }
    toggleTodo(id:number){
        const todo = this.todos.find(todo=>todo.id===id);
        todo.completed = !todo.completed;
    }
    goToDetail(id:number){
        this._router.navigate(['TodoDetails',{id}]);
    }
}
//------------------------------------------------------
@Component({
    template:`
        <div *ngIf="todo" >
            id : {{todo.id}}<br/>
            text : <input [(ngModel)]="todo.text" /><br/>
            completed : <input [(ngModel)]="todo.completed" type="checkbox" /><br/>
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
            return todos.find(todo=>todo.id===id);
        }).then(todo=>{
            this.todo = todo;
        });
    }
    goBack(){
        window.history.back();
    }
}
//------------------------------------------------------
@Component({
    styles:[`
        .todo-item{
            cursor:pointer;
        }
    `],
    template:`
        <ul>
            <li *ngFor="let todo of todos" 
                (click)="toggleTodo(todo.id)"
                class="todo-item"
            >
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
    ngOnInit(){
        this._todoService.getTodos().then(todos=>{
            this.todos = todos.filter(todo=>todo.completed===false);
        });
    }
    toggleTodo(id:number){
        const todo = this.todos.find(todo=>todo.id===id);
        todo.completed = !todo.completed;
        this._todoService.getTodos().then(todos=>{
            this.todos = todos.filter(todo=>todo.completed===false);
        });
    }
    goToDetail(id:number){
        this._router.navigate(['TodoDetails',{id}]);
    }
}
//------------------------------------------------------
@Component({
    selector:'app',
    providers:[ROUTER_PROVIDERS,TodoService],
    directives:[ROUTER_DIRECTIVES],
    styles:[`
        .router-link-active{
            color:red;
        }
    `],
    template:`
        <h2>{{title}}</h2>
        <a [routerLink]="['AllTodos']" >All</a>
        <a [routerLink]="['PendingTodos']" >Pending</a>
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {name:'AllTodos',path:'alltodos',component:AllTodos,useAsDefault:true},
    {name:'PendingTodos',path:'pendingtodos',component:PendingTodos},
    {name:'TodoDetails',path:'tododetails/:id',component:TodoDetails}
])
export class App{
    title='TodoApp';
}
//------------------------------------------------------