import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { TodoComponent } from './todo.component';
import { ListComponent } from './pages/list/list.component';
import { ControlComponent } from './pages/control/control.component';
import { PrimeThemeModule } from '../core/prime-theme/prime-theme.module';
import { MaterialThemeModule } from '../core/material-theme/material-theme.module'
import { BootstrapThemeModule } from "../core/bootstrap-theme/bootstrap-theme.module";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './pages/card/card.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
    ControlComponent,
    CardComponent
  ],
  imports: [
    PrimeThemeModule,
    MaterialThemeModule,
    CKEditorModule,
    FormsModule,
    CommonModule,
    BootstrapThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent,
        children: [
          {
            path: 'list',
            component: ListComponent
          },
          {
            path: 'create',
            component: ControlComponent
          },
          {
            path: 'edit',
            component: ControlComponent
          }
        ]
      },

    ])
  ],
  providers: [],
  bootstrap: []
})
export class TodoModule { }
