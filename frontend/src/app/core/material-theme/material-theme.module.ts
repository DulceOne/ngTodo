import {NgModule} from '@angular/core';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatRadioModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatMenuModule,
  MatListModule,
  MatCardModule
} from '@angular/material';

const modules = [
  MatDatepickerModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTableModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatStepperModule,
  MatInputModule,
  MatTabsModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatRadioModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatMenuModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialThemeModule { }
