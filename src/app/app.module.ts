import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CreateItemComponent } from './create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
