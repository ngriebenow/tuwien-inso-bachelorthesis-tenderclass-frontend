import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendationComponent } from './recommendation/recommendation.component'
import { OverviewComponent } from './overview/overview.component'

const routes: Routes = [
  {path: 'recommendation', component: RecommendationComponent},
  {path: 'overview', component: OverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
