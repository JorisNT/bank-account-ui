import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HttpServiceModule } from '../services/http-service.module';

const routes: Routes = [
  {path: '', component: HomeComponent}
];


@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpServiceModule
  ],
  providers: []
})
export class HomeModule { }
