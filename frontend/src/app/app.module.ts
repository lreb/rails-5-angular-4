import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AccountNewComponent } from './account-new/account-new.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';


const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: AccountNewComponent },
  { path: 'signin', component: AuthenticationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AccountNewComponent,
    HomeComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
