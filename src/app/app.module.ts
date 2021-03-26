import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PushModule } from '@ngrx/component';
import { AppComponent } from './app.component';
import {
  FooterComponent,
  NewTodoComponent,
  TodoListComponent,
  TodoListItemComponent,
} from './todos/components';
import { TodoComponent } from './todos/containers';
import { TodosService } from './todos/services';

const routes: Routes = [
  { path: ':filter', component: TodoComponent },
  { path: '**', redirectTo: 'all', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NewTodoComponent,
    TodoListComponent,
    TodoListItemComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    PushModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  bootstrap: [AppComponent],
  providers: [TodosService],
})
export class AppModule {}
