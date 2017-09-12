import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common'
import { DashboardComponent } from './dashboard.component';
import { RecipeList } from '../components/recipeList/recipeList.component';

export const ROUTES: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [
    DashboardComponent,
    RecipeList,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
})
export class DashboardModule { }
