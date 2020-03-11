import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  @Output() addItem = new EventEmitter();
   name;
   date;
   state:any;
   task;
   deadline;
   time;
   Todo = {
    //  name,
    //  this.state,
    //  this.date,
    //  this.task,
    //  this.deadline,
    //  this.time,
   }
    
   constructor(private todo:ServiceService) { }

   click(){
     
     console.log("name is" +this.name)
     console.log("state is" +this.state)
     console.log("task is" + this.task)
     console.log("time is" +this.time)
     console.log( "date is "+this.date)
     let task = {
       name: this.name,
       state: this.state,
       task: this.task,
       time: this.task,
       date: this.date,
     }

     this.addItem.emit(task);
    //  this.todo.getTodo(this.name,this.state,this.task,this.time,this.date)
     console.log('all items have been sent successfully');
   }

  

  ngOnInit(): void {
  }

}
