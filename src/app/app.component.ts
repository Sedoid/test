import { Component } from '@angular/core';
import {ServiceService} from './service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   todo = [];
  constructor(private todoService:ServiceService){}
  title = 'Todo';

  updateTodo(added){
    console.log('just added the todo');
    console.log(added);
    this.todo.push(added);
  }

  completed(index){
    
  }
  delete(index){
    this.todo.splice(index,1);
  }
 
  }

