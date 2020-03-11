import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  allTodos = [];
  todo ={
   
  }

  getTodo(name,state,task,time,date){

    this.todo={
      name,
      state,
      task,
      time,
      date
    }
    this.allTodos.push(this.todo);
    console.log('items recieved successfully');
  }
  addTodo(){
    console.log(' Items are being ask for right now')
    return this.allTodos;
  }
  constructor() { }
}
