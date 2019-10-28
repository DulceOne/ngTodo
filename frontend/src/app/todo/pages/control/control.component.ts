import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpService } from '../../../core/services/http.service'
import { Router } from "@angular/router";
import { DatePipe } from '@angular/common';
import { Store } from "@ngrx/store";
import { AppState } from "../../../redux/app.state";
import { AddCard } from "../../../redux/card.action";
import { Card } from '../../../models/card'

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  providers:[DatePipe]
})
export class ControlComponent implements OnInit {

  // public body = new FormControl('', Validators.required);
  public body: string = '';
  public Editor = ClassicEditor;
  private myDate = new Date();

  constructor(private http: HttpService, private router: Router, private datePipe: DatePipe, private store: Store<AppState>) { }
  ngOnInit() {
  }

  createTask() {
    if(this.body) {
      const card = new Card(
        this.body,
        '',
        this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
      )

      this.store.dispatch(new AddCard(card))
    }


      // this.http.post('/card/create',{card: card}).subscribe( result => {
      //   this.router.navigate(['todo/list']);
      // })
    }

}
