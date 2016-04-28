import {Injectable} from 'angular2/core';

@Injectable()
export class SampleService{
    getData(){
        return [0,1,2,3,4];
    }
}