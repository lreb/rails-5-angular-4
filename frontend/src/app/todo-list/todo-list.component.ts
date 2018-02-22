import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

public columns = ['id','name'];
public rows : Array<Todo>; 
  constructor(public apiService: ApiService , public router : Router) { }

  ngOnInit() {
  	this.apiService.get("todos").subscribe((data : Todo[])=>{
    console.log(data);
    this.rows = data;
    });
  }

}
