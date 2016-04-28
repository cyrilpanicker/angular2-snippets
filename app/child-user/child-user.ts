import {Component} from 'angular2/core';
import {SampleChild} from './sample.child';
import {SampleService} from './sample.service';

@Component({
    selector:'app',
    directives:[SampleChild],
    providers:[SampleService],
    template:`
        <div>
            Parent
            <child></child>
        </div>
    `
})
export class ChildUser{}