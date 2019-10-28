import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(router: Router) { }

  ngOnInit() {
  }

  signOut() {
    alert("SignOut")
  }

}
