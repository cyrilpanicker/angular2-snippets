import {Component} from '@angular/core';

@Component({
    selector:'app',
    template:`
        <div class="container">
            {{content}}
        </div>
    `,
    styles:[`
        .container{
            width:60%;
            margin-left:auto;
            margin-right:auto;
            text-align: center;
        }
    `]
})
export class ComponentStyle{
    content = 'container content';
} 