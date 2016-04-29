import {Component} from 'angular2/core';
import {Person} from '../models/models';

@Component({
    selector:'app',
    template:`
        <div>
            {{person.name}}<br/>
            <input [(ngModel)] = "person.name" />
        </div>
    `
})
export class TwoWayBinding{
    person:Person={
        id:1,
        name:'tom'
    }
}