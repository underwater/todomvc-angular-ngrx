import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import * as fromApp from './store';
import {
  FooterComponent,
  NewTodoComponent,
  TodoComponent,
  TodoListComponent,
  TodoListItemComponent,
} from './todos/components';
import { TodosEffects } from './todos/store/effects';

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
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(fromApp.reducers, {
      metaReducers: fromApp.metaReducers,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: fromApp.CustomRouterStateSerializer,
    }),
    EffectsModule.forRoot([TodosEffects]),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          name: 'TodoMVC app using Angular & NgRx',
          maxAge: 50,
        })
      : [],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
